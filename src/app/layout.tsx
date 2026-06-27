import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

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
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
