// app/layout.tsx
import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://invaluablessproduction.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Invaluabless Productions",
    template: "%s • Invaluabless Productions",
  },

  description:
    "Professional recording, mixing, and mastering studio in San Antonio, Texas.",

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
    title: "Invaluabless Productions",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <head>
        {/* Performance Preconnect */}
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
      </head>

      <body className="bg-[#07070a] text-white antialiased">

        {/* Google Analytics 4 */}
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

        {/* Structured Data (Local Business) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Invaluabless Productions",
              url: siteUrl,
              description:
                "Recording, mixing, and mastering studio in San Antonio, Texas.",
              telephone: "+1-210-608-6422",
              image: `${siteUrl}/logo.png`,
              logo: `${siteUrl}/logo.png`,
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Antonio",
                addressRegion: "TX",
                addressCountry: "US",
              },
              areaServed: "San Antonio, TX",
              keywords:
                "recording studio, mixing, mastering, music production, San Antonio",
            }),
          }}
        />

        <Nav />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}