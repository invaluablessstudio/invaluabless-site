"use client";

import Image from "next/image";
import Script from "next/script";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";

function track(eventName: string, params?: Record<string, any>) {
  const gtag = (window as any)?.gtag;
  if (typeof gtag === "function") gtag("event", eventName, params ?? {});
}

export default function BookPage() {
  const t = useTranslations("Book");
  const locale = useLocale();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / 50, y: e.clientY / 50 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scheduleUrl =
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3L2SStwJf3zpwl82ZvB6qAw4D9mXAQTtqZMsE29CwZeF77TSLfCDD6KfsXACgRouvG_lge-6n5?gv=true";

  const deposit = useMemo(
    () => ({
      cashAppUrl: "https://cash.app/$invaluabless",
      paypalUrl: "https://paypal.me/invaluabless",
      zelleRecipient: "2106086422",
      applePayRecipient: "2106086422",
    }),
    []
  );

  const phoneE164 = "12106086422";

  const whatsappMessage =
    locale === "es"
      ? "Hola, acabo de reservar una sesión en tu calendario. Tengo una pregunta rápida sobre el depósito."
      : "Hi! I just booked a session on your calendar. Quick question about the deposit.";

  const smsMessage =
    locale === "es"
      ? "Hola, acabo de reservar una sesión en tu calendario. Tengo una pregunta rápida sobre el depósito."
      : "Hi! I just booked a session on your calendar. Quick question about the deposit.";

  const whatsappUrl = `https://wa.me/${phoneE164}?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  const smsUrl = `sms:+${phoneE164}?&body=${encodeURIComponent(smsMessage)}`;

  const [depositOpen, setDepositOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  const [calendarInView, setCalendarInView] = useState(false);

  useEffect(() => {
    const el = calendarRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setCalendarInView(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "-20% 0px -55% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="afterInteractive"
      />

      <div className="grain" />
      <div className="scanlines" />

      <div className="fixed inset-0 -z-20 bg-[#0a0a0f]">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #ff0040 0%, transparent 50%), radial-gradient(circle at 80% 80%, #00f0ff 0%, transparent 40%)",
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div className="absolute inset-0 bg-[url('/images/hero-mic.jpg')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
      </div>

      <div
        className="fixed inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <section className="mx-auto w-full max-w-6xl px-5 pb-14 pt-24 sm:px-6 sm:pb-16">
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-[1px] w-12 bg-[#ff0040]" />
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00f0ff]">
              {t("eyebrow")}
            </p>
          </div>

          <h1 className="font-urban text-6xl uppercase leading-[0.85] md:text-8xl">
            {t("title")}
            <span className="text-[#ff0040] text-glow-red">.</span>
          </h1>

          <p className="mt-6 max-w-xl border-l-2 border-[#ff0040] pl-6 text-lg leading-relaxed text-gray-400">
            {t("intro")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <TrustChip label={t("trust1")} />
            <TrustChip label={t("trust2")} />
            <TrustChip label={t("trust3")} />
          </div>
        </div>

        <div className="mt-8">
          <div
            className={[
              "md:static md:mx-0 md:max-h-none md:translate-y-0 md:px-0 md:pb-0 md:opacity-100 md:pointer-events-auto",
              calendarInView
                ? "pointer-events-none max-h-0 -translate-y-2 overflow-hidden opacity-0"
                : "sticky top-20 z-20 -mx-5 max-h-40 translate-y-0 px-5 pb-3 opacity-100",
              "transition-all duration-300 ease-out",
            ].join(" ")}
          >
            <div className="street-card p-5 backdrop-blur">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-2 w-2 animate-pulse bg-[#ff0040]" />
                <p className="font-urban text-xl uppercase tracking-wider text-white">
                  {t("depositBannerTitle")}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  track("deposit_modal_open", { page: "book" });
                  setDepositOpen(true);
                }}
                className="group relative overflow-hidden bg-[#ff0040] px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition-all hover:glow-red"
              >
                <span className="relative z-10">{t("payDeposit")}</span>
                <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-12">
          <div ref={calendarRef} className="md:col-span-7">
            <div className="street-card p-4">
              <div className="overflow-hidden bg-white">
                <div className="relative h-[72vh] min-h-[560px] w-full md:h-[720px]">
                  <iframe
                    title={t("iframeTitle")}
                    src={scheduleUrl}
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 md:hidden">
                <a
                  href={smsUrl}
                  onClick={() => track("contact_click_sms", { page: "book" })}
                  className="inline-flex items-center justify-center border border-white/20 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-white/10"
                >
                  {t("textButton")}
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    track("contact_click_whatsapp", { page: "book" })
                  }
                  className="inline-flex items-center justify-center border border-[#00f0ff]/50 py-3 text-xs font-semibold uppercase tracking-wider text-[#00f0ff] transition-all hover:bg-[#00f0ff]/10 hover:glow-cyan"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative overflow-hidden border border-white/10 bg-[#0a0a0f]">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/images/hero-mic.jpg"
                  alt={t("studioImageAlt")}
                  fill
                  className="object-cover opacity-80 mix-blend-luminosity"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-urban text-3xl uppercase text-white">
                    {t("studioLabel")}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-[#00f0ff]">
                    San Antonio, TX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="street-card p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-[#ff0040]">★</span>
              <p className="font-urban text-xl uppercase tracking-wider">
                {t("reviewsTitle")}
              </p>
            </div>
            <div
              className="elfsight-app-1b7dac44-ab99-4496-b1d8-0dc850f88094"
              data-elfsight-app-lazy
            />
          </div>
        </div>
      </section>

      {depositOpen && (
        <DepositModal
          onClose={() => setDepositOpen(false)}
          cashAppUrl={deposit.cashAppUrl}
          paypalUrl={deposit.paypalUrl}
          zelleRecipient={deposit.zelleRecipient}
          applePayRecipient={deposit.applePayRecipient}
        />
      )}
    </main>
  );
}

function TrustChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] uppercase tracking-wider text-gray-400">
      <span className="h-1.5 w-1.5 bg-[#ff0040]" />
      {label}
    </span>
  );
}

function DepositModal({
  onClose,
  cashAppUrl,
  paypalUrl,
  zelleRecipient,
  applePayRecipient,
}: {
  onClose: () => void;
  cashAppUrl: string;
  paypalUrl: string;
  zelleRecipient: string;
  applePayRecipient: string;
}) {
  const t = useTranslations("Book");
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  function closeModal() {
    track("deposit_modal_close", { page: "book" });
    onClose();
  }

  async function copyValue(value: string, eventName: string, key: string) {
    try {
      await navigator.clipboard.writeText(value);
      track(eventName, { page: "book" });
      setCopiedLabel(key);
      setTimeout(() => setCopiedLabel(null), 1200);
    } catch {}
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={closeModal}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        aria-label={t("close")}
      />

      <div className="relative w-full max-w-lg overflow-hidden border border-white/10 bg-[#0a0a0f] shadow-[0_30px_120px_rgba(0,0,0,0.9)]">
        <div className="border-b border-white/10 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-urban text-2xl uppercase text-white">
                {t("payDeposit")}
              </p>
              <p className="mt-2 text-sm text-gray-400">
                {t("depositModalSubtitle")}
              </p>
            </div>
            <button
              type="button"
              onClick={closeModal}
              className="font-mono text-gray-500 transition-colors hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="grid gap-3 p-6">
          <a
            href={cashAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("deposit_click_cashapp", { page: "book" })}
            className="group flex items-center justify-between border border-[#ff0040]/30 bg-[#ff0040]/5 p-4 transition-all hover:bg-[#ff0040]/10"
          >
            <div>
              <p className="font-urban text-lg uppercase text-[#ff0040] transition-all group-hover:text-glow-red">
                Cash App
              </p>
              <p className="mt-1 text-xs text-gray-500">{t("openCashApp")}</p>
            </div>
            <span className="text-[#ff0040] transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href={paypalUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("deposit_click_paypal", { page: "book" })}
            className="group flex items-center justify-between border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10"
          >
            <div>
              <p className="font-urban text-lg uppercase text-white">PayPal</p>
              <p className="mt-1 text-xs text-gray-500">{t("openPayPal")}</p>
            </div>
            <span className="text-gray-500 transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

          <CopyCard
            title="Zelle"
            value={zelleRecipient}
            helper={t("sendToPhone")}
            copied={copiedLabel === "zelle"}
            onCopy={() =>
              copyValue(zelleRecipient, "deposit_copy_zelle", "zelle")
            }
          />

          <CopyCard
            title="Apple Pay"
            value={applePayRecipient}
            helper={t("sendToPhone")}
            copied={copiedLabel === "applepay"}
            onCopy={() =>
              copyValue(applePayRecipient, "deposit_copy_applepay", "applepay")
            }
          />

          <p className="pt-2 text-xs uppercase tracking-wider text-gray-600">
            {t("receiptNote")}
          </p>
        </div>
      </div>
    </div>
  );
}

function CopyCard({
  title,
  value,
  helper,
  copied,
  onCopy,
}: {
  title: string;
  value: string;
  helper: string;
  copied: boolean;
  onCopy: () => void;
}) {
  const t = useTranslations("Book");

  return (
    <div className="border border-white/10 bg-white/5 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <p className="font-urban text-lg uppercase text-white">{title}</p>
          <p className="mt-1 text-xs text-gray-500">{helper}</p>
          <p className="mt-3 border border-white/5 bg-black/30 px-3 py-2 font-mono text-sm text-[#00f0ff]">
            {value}
          </p>
        </div>
        <button
          type="button"
          onClick={onCopy}
          className="border border-white/10 px-4 py-2 text-xs uppercase tracking-wider text-gray-400 transition-all hover:border-[#ff0040] hover:text-white"
        >
          {copied ? t("copied") : t("copy")}
        </button>
      </div>
    </div>
  );
}