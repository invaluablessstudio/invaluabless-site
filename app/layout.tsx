// app/layout.tsx
import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ResourcesDownloads from "./components/ResourceDownloads";
import PageTransition from "./components/PageTransition";
import { BeatPlayerProvider } from "./components/BeatPlayerProvider";
import GlobalBeatPlayer from "./components/GlobalBeatPlayer";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://invaluablessproduction.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Invaluabless Productions | Recording Studio San Antonio",
    template: "%s • Invaluabless Productions",
  },
  description:
    "Invaluabless Productions is a professional recording studio in San Antonio, TX specializing in reggaeton, Latin, rap, trap, and Christian music. Book recording sessions, mixing, mastering, and beat production.",
  applicationName: "Invaluabless Productions",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Invaluabless Productions",
    title: "Invaluabless Productions | Recording Studio San Antonio",
    description:
      "Professional recording, mixing, and mastering studio in San Antonio, Texas.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Invaluabless Productions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invaluabless Productions",
    description:
      "Professional recording, mixing, and mastering studio in San Antonio, Texas.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Invaluabless Productions",
  url: "https://www.invaluablessproduction.com",
  description: "Recording, mixing, and mastering studio in San Antonio, Texas.",
  telephone: "+1-210-608-6422",
  image: "https://www.invaluablessproduction.com/logo.png",
  logo: "https://www.invaluablessproduction.com/logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Antonio",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: "San Antonio, TX",
  keywords:
    "recording studio San Antonio, music studio San Antonio, reggaeton studio San Antonio, Latin recording studio, rap studio San Antonio, mixing mastering San Antonio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="preconnect" href="https://www.youtube.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body className="bg-transparent text-white antialiased">
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        )}

        <BeatPlayerProvider>
          <div className="relative z-50">
            <Nav />
          </div>

          <div className="pb-32
          ">
            <PageTransition>{children}</PageTransition>
          </div>

          <div className="relative z-50">
            <Footer />
          </div>

          <GlobalBeatPlayer />
        </BeatPlayerProvider>

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}