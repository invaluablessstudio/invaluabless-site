// app/layout.tsx
import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Invaluabless Productions",
    template: "%s • Invaluabless Productions",
  },
  description: "Recording, Mixing, Mastering Studio",
  applicationName: "Invaluabless Productions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Invaluabless Productions",
    title: "Invaluabless Productions",
    description: "Recording, Mixing, Mastering Studio",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Invaluabless Productions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invaluabless Productions",
    description: "Recording, Mixing, Mastering Studio",
    images: ["/og.jpg"],
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
      <body className="bg-[#07070a] text-white">
        {/* ✅ Google Analytics 4 */}
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

        {/* ✅ Local Business Structured Data (SEO BOOST) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicStudio",
              name: "Invaluabless Productions",
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              image: `${siteUrl}/images/hero-mic.jpg`,
              description:
                "Recording, Mixing, and Mastering Studio in San Antonio, Texas.",
              telephone: "+1-210-608-6422",
              areaServed: "San Antonio, Texas",
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Antonio",
                addressRegion: "TX",
                addressCountry: "US",
              },
              sameAs: [
                "https://www.instagram.com/YOUR_INSTAGRAM",
                "https://www.youtube.com/YOUR_YOUTUBE"
              ],
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