import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sunrisetoilet.com"),
  title: {
    default: "Portable Toilet Manufacturer in China | Sunrise",
    template: "%s | Sunrise Portable Sanitation",
  },
  description:
    "Sunrise is a portable toilet manufacturer in Ningbo, China, supplying HDPE portable restrooms for distributors, rental fleets and project buyers.",
  keywords: [
    "portable toilet manufacturer",
    "portable toilet supplier",
    "HDPE portable toilet",
    "portable restroom manufacturer",
    "portable toilet factory China",
    "accessible portable toilet supplier",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Portable Toilet Manufacturer in China | Sunrise",
    description:
      "Factory-direct HDPE portable toilets for distributors, rental fleets and project buyers.",
    url: "https://sunrisetoilet.com",
    siteName: "Sunrise Portable Sanitation",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
