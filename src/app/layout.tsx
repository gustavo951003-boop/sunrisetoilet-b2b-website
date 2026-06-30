import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const googleAdsId = "AW-11142818750";
const googleAdsContactConversionId = "AW-11142818750/ADfXCOOtxMYcEL7Xp8Ep";

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
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
          strategy="lazyOnload"
        />
        <Script id="google-ads-tag" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAdsId}');
          `}
        </Script>
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
