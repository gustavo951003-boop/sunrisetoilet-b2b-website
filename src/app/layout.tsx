import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalyticsPageView } from "@/components/site/GoogleAnalyticsPageView";
import "./globals.css";

const googleAdsId = "AW-11142818750";
const ga4MeasurementId = "G-PE774SH1Q5";
const googleAdsContactConversionId = "AW-11142818750/ADfXCOOtxMYcEL7Xp8Ep";
const googleAdsEmailClickConversionId = "AW-11142818750/a8qYCPT03tAcEL7Xp8Ep";
const googleAdsWhatsAppClickConversionId = "AW-11142818750/KqgoCJuH39AcEL7Xp8Ep";

export const metadata: Metadata = {
  metadataBase: new URL("https://sunrisetoilet.com"),
  title: {
    default: "Portable Toilet Manufacturer in China | Sunrise Portable Toilets",
    template: "%s | Sunrise Portable Toilets",
  },
  description:
    "Sunrise manufactures HDPE portable toilets for rental fleets, distributors and project buyers. Factory-direct portable toilet supply for Australia, Europe, US and global markets.",
  keywords: [
    "portable toilet manufacturer",
    "portable toilet supplier",
    "HDPE portable toilet",
    "portable restroom manufacturer",
    "portable toilet factory China",
    "portable toilet for rental fleets",
    "portable toilet supplier for Australia",
    "accessible portable toilet supplier",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Portable Toilet Manufacturer in China | Sunrise Portable Toilets",
    description:
      "Factory-direct HDPE portable toilets for rental fleets, distributors and project buyers in Australia, Europe, US and global markets.",
    url: "https://sunrisetoilet.com",
    siteName: "Sunrise Portable Toilets",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/site/hero-yard.webp",
        width: 1200,
        height: 630,
        alt: "Sunrise HDPE portable toilets prepared for export",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portable Toilet Manufacturer in China | Sunrise Portable Toilets",
    description:
      "HDPE portable toilet factory supply for rental fleets, distributors and project buyers.",
    images: ["/images/site/hero-yard.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener("load", function () {
                document.querySelectorAll('a[href*="mailto"]').forEach(function (link) {
                  link.addEventListener("click", function () {
                    if (typeof gtag === "function") {
                      gtag("event", "conversion", {
                        'send_to': "${googleAdsEmailClickConversionId}",
                      });
                    }
                  });
                });
              });
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener("load", function () {
                document.querySelectorAll('a[href*="wa.me"]').forEach(function (link) {
                  link.addEventListener("click", function () {
                    if (typeof gtag === "function") {
                      gtag("event", "conversion", {
                        'send_to': "${googleAdsWhatsAppClickConversionId}",
                      });
                    }
                  });
                });
              });
            `,
          }}
        />
      </head>
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
          strategy="lazyOnload"
        />
        <Script id="google-ads-tag" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${googleAdsId}');
            gtag('config', '${ga4MeasurementId}', { send_page_view: false });
          `}
        </Script>
        <GoogleAnalyticsPageView />
        <Script id="google-ads-contact-conversion" strategy="lazyOnload">
          {`
            window.gtag_report_conversion = function(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };

              if (typeof gtag === 'function') {
                gtag('event', 'conversion', {
                  'send_to': '${googleAdsContactConversionId}',
                  'event_callback': callback
                });
              } else {
                callback();
              }

              return false;
            };
          `}
        </Script>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
