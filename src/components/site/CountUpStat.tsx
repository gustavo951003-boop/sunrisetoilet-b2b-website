"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type CountUpStatProps = {
  end: number;
  suffix?: string;
  duration?: number;
  label: string;
  ariaLabel?: string;
};

function easeOutCubic(progress: number) {
  return 1 - Math.pow(1 - progress, 3);
}

function formatNumber(value: number) {
  return Math.round(value).toLocaleString("en-US");
}

export function CountUpStat({
  end,
  suffix = "",
  duration = 1000,
  label,
  ariaLabel,
}: CountUpStatProps) {
  const statRef = useRef<HTMLSpanElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const hasAnimatedRef = useRef(false);
  const [value, setValue] = useState(end);
  const finalText = `${formatNumber(end)}${suffix}`;

  useEffect(() => {
    const node = statRef.current;

    if (!node) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      hasAnimatedRef.current = true;
      return undefined;
    }

    const startAnimation = () => {
      if (hasAnimatedRef.current) {
        return;
      }

      hasAnimatedRef.current = true;
      setValue(0);
      const startedAt = performance.now();

      const tick = (time: number) => {
        const progress = Math.min((time - startedAt) / duration, 1);
        setValue(Math.round(end * easeOutCubic(progress)));

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(tick);
        } else {
          setValue(end);
        }
      };

      animationFrameRef.current = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();

      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [duration, end]);

  return (
    <span
      ref={statRef}
      className="count-up-stat"
      aria-label={ariaLabel ?? `${finalText} ${label}`}
      style={{ "--stat-width": `${finalText.length}ch` } as CSSProperties}
    >
      {formatNumber(value)}
      {suffix}
    </span>
  );
}
