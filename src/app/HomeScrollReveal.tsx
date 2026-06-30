"use client";

import { useEffect } from "react";

type WindowWithIdleCallback = Window &
  typeof globalThis & {
    requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
    cancelIdleCallback?: (handle: number) => void;
  };

export function HomeScrollReveal() {
  useEffect(() => {
    const browserWindow = window as WindowWithIdleCallback;
    let isCancelled = false;
    let cleanupReveal: (() => void) | undefined;
    let timeoutHandle: number | undefined;
    let idleHandle: number | undefined;

    const loadReveal = () => {
      void import("./ScrollReveal").then(({ initScrollReveal }) => {
        if (isCancelled) {
          return;
        }

        cleanupReveal = initScrollReveal();
      });
    };

    if (typeof browserWindow.requestIdleCallback === "function") {
      idleHandle = browserWindow.requestIdleCallback(loadReveal, { timeout: 1600 });
    } else {
      timeoutHandle = Number(window.setTimeout(loadReveal, 900));
    }

    return () => {
      isCancelled = true;

      if (idleHandle !== undefined && typeof browserWindow.cancelIdleCallback === "function") {
        browserWindow.cancelIdleCallback(idleHandle);
      }

      if (timeoutHandle !== undefined) {
        window.clearTimeout(timeoutHandle);
      }

      cleanupReveal?.();
    };
  }, []);

  return null;
}
