"use client";

import Image from "next/image";
import Script from "next/script";
import { useEffect, useMemo, useRef, useState } from "react";

function track(eventName: string, params?: Record<string, any>) {
  const gtag = (window as any)?.gtag;
  if (typeof gtag === "function") gtag("event", eventName, params ?? {});
}

export default function BookPage() {
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
  const whatsappUrl = `https://wa.me/${phoneE164}?text=${encodeURIComponent(
    "Hi! I just booked a session on your calendar. Quick question about the deposit."
  )}`;
  const smsUrl = `sms:+${phoneE164}?&body=${encodeURIComponent(
    "Hi! I just booked a session on your calendar. Quick question about the deposit."
  )}`;

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
    <main className="relative min-h-screen text-white overflow-hidden">
      <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />
      
      {/* Global Effects */}
      <div className="grain" />
      <div className="scanlines" />

      {/* Animated Background */}
      <div className="fixed inset-0 -z-20 bg-[#0a0a0f]">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, #ff0040 0%, transparent 50%), radial-gradient(circle at 80% 80%, #00f0ff 0%, transparent 40%)",
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
            transition: "transform 0.3s ease-out"
          }}
        />
        <div className="absolute inset-0 bg-[url('/images/hero-mic.jpg')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
      </div>

      {/* Grid Overlay */}
      <div className="fixed inset-0 -z-10 opacity-[0.03]" 
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}
      />

      <section className="mx-auto w-full max-w-6xl px-5 pb-14 pt-24 sm:px-6 sm:pb-16">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#ff0040]" />
            <p className="text-xs tracking-[0.4em] uppercase text-[#00f0ff] font-semibold">
              Lock Your Slot
            </p>
          </div>

          <h1 className="font-urban text-6xl md:text-8xl uppercase leading-[0.85]">
            Book<span className="text-[#ff0040] text-glow-red">.</span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-xl leading-relaxed border-l-2 border-[#ff0040] pl-6">
            Choose an available session time. Real-time updates. 
            <br />
            <span className="text-gray-500">
              Elige un horario disponible. La disponibilidad se actualiza en tiempo real.
            </span>
          </p>

          {/* Trust Chips */}
          <div className="mt-8 flex flex-wrap gap-3">
            <TrustChip label="Secure booking" />
            <TrustChip label="Deposit confirms slot" />
            <TrustChip label="Live availability" />
          </div>
        </div>

        {/* Deposit Banner */}
        <div className="mt-8">
          <div
            className={[
              "md:static md:mx-0 md:px-0 md:pb-0 md:opacity-100 md:pointer-events-auto md:max-h-none md:translate-y-0",
              calendarInView
                ? "pointer-events-none opacity-0 max-h-0 -translate-y-2 overflow-hidden"
                : "sticky top-20 z-20 -mx-5 px-5 pb-3 opacity-100 max-h-40 translate-y-0",
              "transition-all duration-300 ease-out",
            ].join(" ")}
          >
            <div className="street-card p-5 backdrop-blur">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 bg-[#ff0040] animate-pulse" />
                <p className="font-urban text-xl uppercase tracking-wider text-white">
                  Deposit required to lock session
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  track("deposit_modal_open", { page: "book" });
                  setDepositOpen(true);
                }}
                className="group relative px-6 py-3 bg-[#ff0040] text-black font-bold uppercase tracking-wider text-sm overflow-hidden transition-all hover:glow-red"
              >
                <span className="relative z-10">Pay Deposit</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Calendar + Image Layout */}
        <div className="mt-10 grid gap-6 md:grid-cols-12">
          <div ref={calendarRef} className="md:col-span-7">
            <div className="street-card p-4">
              <div className="overflow-hidden bg-white">
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
                  className="inline-flex items-center justify-center py-3 border border-white/20 text-white uppercase tracking-wider text-xs font-semibold hover:bg-white/10 transition-all"
                >
                  Text
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("contact_click_whatsapp", { page: "book" })}
                  className="inline-flex items-center justify-center py-3 border border-[#00f0ff]/50 text-[#00f0ff] uppercase tracking-wider text-xs font-semibold hover:bg-[#00f0ff]/10 transition-all hover:glow-cyan"
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
                  alt="Studio microphone"
                  fill
                  className="object-cover opacity-80 mix-blend-luminosity"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-urban text-3xl uppercase text-white">Studio A</p>
                  <p className="text-xs text-[#00f0ff] uppercase tracking-widest mt-1">San Antonio, TX</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Reviews */}
        <div className="mt-12">
          <div className="street-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#ff0040]">★</span>
              <p className="font-urban text-xl uppercase tracking-wider">Google Reviews</p>
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
    <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/[0.03] text-[11px] uppercase tracking-wider text-gray-400">
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
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={() => {
          track("deposit_modal_close", { page: "book" });
          onClose();
        }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        aria-label="Close"
      />
      
      <div className="relative w-full max-w-lg overflow-hidden border border-white/10 bg-[#0a0a0f] shadow-[0_30px_120px_rgba(0,0,0,0.9)]">
        <div className="border-b border-white/10 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-urban text-2xl uppercase text-white">
                Pay Deposit
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Choose a method. Booking confirmed after deposit received.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                track("deposit_modal_close", { page: "book" });
                onClose();
              }}
              className="text-gray-500 hover:text-white transition-colors font-mono"
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
            className="group flex items-center justify-between p-4 border border-[#ff0040]/30 bg-[#ff0040]/5 hover:bg-[#ff0040]/10 transition-all"
          >
            <div>
              <p className="font-urban text-lg uppercase text-[#ff0040] group-hover:text-glow-red transition-all">Cash App</p>
              <p className="text-xs text-gray-500 mt-1">Open Cash App link</p>
            </div>
            <span className="text-[#ff0040] group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <a
            href={paypalUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("deposit_click_paypal", { page: "book" })}
            className="group flex items-center justify-between p-4 border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
          >
            <div>
              <p className="font-urban text-lg uppercase text-white">PayPal</p>
              <p className="text-xs text-gray-500 mt-1">Open PayPal link</p>
            </div>
            <span className="text-gray-500 group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <CopyCard
            title="Zelle"
            value={zelleRecipient}
            helper="Send to this phone number"
            eventName="deposit_copy_zelle"
          />
          <CopyCard
            title="Apple Pay"
            value={applePayRecipient}
            helper="Send to this phone number"
            eventName="deposit_copy_applepay"
          />

          <p className="pt-2 text-xs text-gray-600 uppercase tracking-wider">
            Keep receipt screenshot. Text us if you need help.
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
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }

  return (
    <div className="p-4 border border-white/10 bg-white/5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <p className="font-urban text-lg uppercase text-white">{title}</p>
          <p className="text-xs text-gray-500 mt-1">{helper}</p>
          <p className="mt-3 font-mono text-sm text-[#00f0ff] bg-black/30 px-3 py-2 border border-white/5">
            {value}
          </p>
        </div>
        <button
          type="button"
          onClick={copy}
          className="px-4 py-2 border border-white/10 text-xs uppercase tracking-wider text-gray-400 hover:text-white hover:border-[#ff0040] transition-all"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}