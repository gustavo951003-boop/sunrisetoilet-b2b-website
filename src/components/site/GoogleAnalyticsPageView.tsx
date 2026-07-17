"use client";

import { Suspense, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const ga4MeasurementId = "G-PE774SH1Q5";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function trackPageView(pagePath: string) {
  const gtag =
    window.gtag ??
    ((...args: unknown[]) => {
      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push(args);
    });

  gtag("event", "page_view", {
    send_to: ga4MeasurementId,
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
  });
}

function GoogleAnalyticsRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const previousPagePath = useRef<string | null>(null);

  useEffect(() => {
    const queryString = searchParams.toString();
    const pagePath = queryString ? `${pathname}?${queryString}` : pathname;

    if (previousPagePath.current === pagePath) {
      return;
    }

    previousPagePath.current = pagePath;
    trackPageView(pagePath);
  }, [pathname, searchParams]);

  return null;
}

export function GoogleAnalyticsPageView() {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsRouteTracker />
    </Suspense>
  );
}
