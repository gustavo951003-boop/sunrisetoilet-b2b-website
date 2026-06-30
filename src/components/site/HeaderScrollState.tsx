"use client";

import { useEffect } from "react";

export function HeaderScrollState() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>('[data-site-header="home"]');

    if (!header) {
      return undefined;
    }

    let ticking = false;
    let animationFrameId: number | null = null;

    const updateHeaderState = () => {
      const isScrolled = window.scrollY > 24;

      header.classList.toggle("site-header-transparent", !isScrolled);
      header.classList.toggle("site-header-solid", isScrolled);
      header.classList.toggle("site-header-scrolled", isScrolled);
      ticking = false;
      animationFrameId = null;
    };

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      animationFrameId = window.requestAnimationFrame(updateHeaderState);
    };

    updateHeaderState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return null;
}
