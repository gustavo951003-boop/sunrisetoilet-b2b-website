"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { HomeHeroSlide } from "./HomeHeroMedia";

type HomeHeroCarouselProps = {
  slides: HomeHeroSlide[];
};

type WindowWithIdleCallback = Window &
  typeof globalThis & {
    requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
    cancelIdleCallback?: (handle: number) => void;
  };

export function HomeHeroCarousel({ slides }: HomeHeroCarouselProps) {
  const markerRef = useRef<HTMLSpanElement>(null);
  const [shouldLoadCarousel, setShouldLoadCarousel] = useState(false);
  const [loadedImages, setLoadedImages] = useState(0);
  const carouselReady = shouldLoadCarousel && slides.length > 0 && loadedImages >= slides.length;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || slides.length === 0) {
      return undefined;
    }

    const loadCarousel = () => setShouldLoadCarousel(true);
    const browserWindow = window as WindowWithIdleCallback;
    let timeoutHandle: number | undefined;
    let idleHandle: number | undefined;

    if (typeof browserWindow.requestIdleCallback === "function") {
      idleHandle = browserWindow.requestIdleCallback(loadCarousel, { timeout: 1800 });
    } else {
      timeoutHandle = Number(window.setTimeout(loadCarousel, 1200));
    }

    return () => {
      if (idleHandle !== undefined && typeof browserWindow.cancelIdleCallback === "function") {
        browserWindow.cancelIdleCallback(idleHandle);
      }

      if (timeoutHandle !== undefined) {
        window.clearTimeout(timeoutHandle);
      }
    };
  }, [slides.length]);

  useEffect(() => {
    const media = markerRef.current?.closest<HTMLElement>(".hero-media");

    if (!media) {
      return undefined;
    }

    if (carouselReady) {
      media.classList.remove("hero-media-static");
      media.classList.add("hero-media-carousel");
    }

    return () => {
      media.classList.add("hero-media-static");
      media.classList.remove("hero-media-carousel");
    };
  }, [carouselReady]);

  return (
    <>
      <span ref={markerRef} hidden />
      {shouldLoadCarousel
        ? slides.map((slide, index) => (
            <Image
              className={`hero-image hero-image-${index + 2}`}
              src={slide.image}
              alt={slide.alt}
              width={slide.width}
              height={slide.height}
              loading="lazy"
              sizes="100vw"
              onLoad={() => setLoadedImages((current) => current + 1)}
              key={slide.image}
            />
          ))
        : null}
    </>
  );
}
