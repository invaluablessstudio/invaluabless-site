import Script from "next/script";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import { BeatPlayerProvider } from "../components/BeatPlayerProvider";
import GlobalBeatPlayer from "../components/GlobalBeatPlayer";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { routing } from "../../i18n/routing";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.invaluablessproduction.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isSpanish = locale === "es";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: isSpanish
        ? "Invaluabless Productions | Estudio de Grabación en San Antonio"
        : "Invaluabless Productions | Recording Studio San Antonio",
      template: "%s • Invaluabless Productions",
    },
    description: isSpanish
      ? "Invaluabless Productions es un estudio de grabación profesional en San Antonio, TX especializado en reggaetón, música latina, rap, trap y música cristiana."
      : "Invaluabless Productions is a professional recording studio in San Antonio, TX specializing in reggaeton, Latin, rap, trap, and Christian music.",
    applicationName: "Invaluabless Productions",
    icons: {
      icon: "/logo.png",
      shortcut: "/logo.png",
      apple: "/logo.png",
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}/${locale}`,
      siteName: "Invaluabless Productions",
      title: isSpanish
        ? "Invaluabless Productions | Estudio de Grabación en San Antonio"
        : "Invaluabless Productions | Recording Studio San Antonio",
      description: isSpanish
        ? "Grabación profesional, mezcla y mastering en San Antonio, Texas."
        : "Professional recording, mixing, and mastering studio in San Antonio, Texas.",
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
      description: isSpanish
        ? "Grabación profesional, mezcla y mastering en San Antonio, Texas."
        : "Professional recording, mixing, and mastering studio in San Antonio, Texas.",
      images: ["/logo.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      languages: {
        en: `${siteUrl}/en`,
        es: `${siteUrl}/es`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <>
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

      <NextIntlClientProvider messages={messages}>
        <BeatPlayerProvider>
          <div className="relative z-50">
            <Nav />
          </div>

          <div className="pb-32">
            <PageTransition>{children}</PageTransition>
          </div>

          <div className="relative z-50">
            <Footer />
          </div>

          <GlobalBeatPlayer />
        </BeatPlayerProvider>
      </NextIntlClientProvider>

      <SpeedInsights />
      <Analytics />
    </>
  );
}