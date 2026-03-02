// app/book/page.tsx
"use client";

import Image from "next/image";
import Script from "next/script";
import { useEffect, useMemo, useRef, useState } from "react";

/* ✅ GA4 Tracking Helper */
function track(eventName: string, params?: Record<string, any>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gtag = (window as any)?.gtag;
  if (typeof gtag === "function") gtag("event", eventName, params ?? {});
}

export default function BookPage() {
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

  const whatsappUrl = `https://wa.me/${phoneE164}?text=${encodeURIComponent(
    "Hi! I just booked a session on your calendar. Quick question about the deposit."
  )}`;

  const smsUrl = `sms:+${phoneE164}?&body=${encodeURIComponent(
    "Hi! I just booked a session on your calendar. Quick question about the deposit."
  )}`;

  const [depositOpen, setDepositOpen] = useState(false);

  const calendarRef = useRef<HTMLDivElement | null>(null);
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
    <main className="relative min-h-dvh">
      {/* Elfsight Script Loader */}
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="afterInteractive"
      />

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_25%_20%,rgba(255,255,255,0.10),transparent_55%),radial-gradient(800px_520px_at_70%_30%,rgba(176,141,46,0.12),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:url('/images/noise.png')]" />
      </div>

      <section className="mx-auto w-full max-w-6xl px-5 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-white/75 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b08d2e]" />
            Live availability • Secure deposit
          </div>

          <h1 className="mt-4 text-[44px] font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
            Book<span className="text-[#b08d2e]">.</span>
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
            Choose an available session time below. Availability is updated in
            real-time.
            <br />
            <span className="text-white/70">
              Elige un horario disponible. La disponibilidad se actualiza en
              tiempo real.
            </span>
          </p>

          {/* Trust Chips */}
          <div className="mt-5 flex flex-wrap gap-2">
            <TrustChip label="Secure booking" />
            <TrustChip label="Deposit confirms slot" />
            <TrustChip label="Live availability" />
          </div>
        </div>

        {/* Deposit Banner */}
        <div className="mt-6 md:mt-7">
          <div
            className={[
              "md:static md:mx-0 md:px-0 md:pb-0 md:opacity-100 md:pointer-events-auto md:max-h-none md:translate-y-0",
              calendarInView
                ? "pointer-events-none opacity-0 max-h-0 -translate-y-2 overflow-hidden"
                : "sticky top-0 z-20 -mx-5 px-5 pb-3 opacity-100 max-h-40 translate-y-0",
              "transition-all duration-300 ease-out",
            ].join(" ")}
          >
            <div className="rounded-2xl border border-[#b08d2e]/35 bg-[#0a0a0f]/70 p-4 backdrop-blur">
              <p className="font-semibold text-white">
                Deposit required to lock your session.
              </p>

              <button
                type="button"
                onClick={() => {
                  track("deposit_modal_open", { page: "book" });
                  setDepositOpen(true);
                }}
                className="mt-3 inline-flex items-center justify-center rounded-xl border border-[#b08d2e]/35 bg-[#b08d2e]/10 px-4 py-2 text-sm font-semibold text-[#d7bb63] hover:bg-[#b08d2e]/15"
              >
                Pay Deposit
              </button>
            </div>
          </div>
        </div>

        {/* Calendar + Image Layout */}
        <div className="mt-8 grid gap-6 md:grid-cols-12">
          <div ref={calendarRef} className="md:col-span-7">
            <div className="rounded-3xl border border-[#b08d2e]/25 bg-white/[0.04] p-4 backdrop-blur">
              <div className="overflow-hidden rounded-xl bg-white">
                <div className="relative h-[72vh] min-h-[560px] w-full md:h-[720px]">
                  <iframe
                    title="Book a session"
                    src={scheduleUrl}
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Mobile contact buttons */}
              <div className="mt-4 grid grid-cols-2 gap-3 md:hidden">
                <a
                  href={smsUrl}
                  onClick={() => track("contact_click_sms", { page: "book" })}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white/85 hover:bg-white/10"
                >
                  Text
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    track("contact_click_whatsapp", { page: "book" })
                  }
                  className="inline-flex items-center justify-center rounded-2xl border border-[#b08d2e]/35 bg-[#b08d2e]/10 px-4 py-3 text-sm font-semibold text-[#d7bb63] hover:bg-[#b08d2e]/15"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <div className="relative aspect-[16/10] md:aspect-[3/4]">
                <Image
                  src="/images/hero-mic.jpg"
                  alt="Studio microphone"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Google Reviews ⭐ */}
        <div className="mt-12">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm font-semibold text-white/90">
              Google Reviews ⭐
            </p>

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
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-white/70">
      <span className="h-1.5 w-1.5 rounded-full bg-[#b08d2e]" />
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
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label="Pay deposit"
    >
      {/* overlay */}
      <button
        type="button"
        onClick={() => {
          track("deposit_modal_close", { page: "book" });
          onClose();
        }}
        className="absolute inset-0 bg-black/70"
        aria-label="Close"
      />

      {/* panel */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b10] shadow-[0_30px_120px_rgba(0,0,0,0.75)]">
        <div className="border-b border-white/10 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-base font-semibold text-white">
                Pay your deposit
              </p>
              <p className="mt-1 text-sm text-white/70">
                Choose a method below. Your booking is confirmed after deposit
                is received.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                track("deposit_modal_close", { page: "book" });
                onClose();
              }}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
            >
              Close
            </button>
          </div>
        </div>

        <div className="grid gap-3 p-5">
          <a
            href={cashAppUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => track("deposit_click_cashapp", { page: "book" })}
            className="flex items-center justify-between rounded-2xl border border-[#b08d2e]/25 bg-[#b08d2e]/10 p-4 text-left hover:bg-[#b08d2e]/15"
          >
            <div>
              <p className="text-sm font-semibold text-[#d7bb63]">Cash App</p>
              <p className="mt-0.5 text-xs text-white/65">Open Cash App link</p>
            </div>
            <span className="text-xs text-white/60">↗</span>
          </a>

          <a
            href={paypalUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => track("deposit_click_paypal", { page: "book" })}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-left hover:bg-white/10"
          >
            <div>
              <p className="text-sm font-semibold text-white/90">PayPal</p>
              <p className="mt-0.5 text-xs text-white/65">Open PayPal link</p>
            </div>
            <span className="text-xs text-white/60">↗</span>
          </a>

          <CopyCard
            title="Zelle"
            value={zelleRecipient}
            helper="Send to this phone number."
            eventName="deposit_copy_zelle"
          />
          <CopyCard
            title="Apple Pay / Apple Cash"
            value={applePayRecipient}
            helper="Send to this phone number (Apple Cash)."
            eventName="deposit_copy_applepay"
          />

          <p className="pt-2 text-xs text-white/55">
            After you pay, keep the receipt screenshot (just in case). If you
            need help, text us.
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
  eventName,
}: {
  title: string;
  value: string;
  helper: string;
  eventName: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      track(eventName, { page: "book" });
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-white/90">{title}</p>
          <p className="mt-0.5 text-xs text-white/65">{helper}</p>
          <p className="mt-2 select-all break-all rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-xs text-white/80">
            {value}
          </p>
        </div>
        <button
          type="button"
          onClick={copy}
          className="h-fit rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-xs font-semibold text-white/80 hover:bg-black/30"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}