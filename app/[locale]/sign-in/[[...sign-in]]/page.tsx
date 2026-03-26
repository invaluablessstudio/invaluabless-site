"use client";

import { SignIn } from "@clerk/nextjs";
import { useEffect, useState } from "react";

function handleCardMouseMove(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget as HTMLElement;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
}

function handleCardMouseLeave(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget as HTMLElement;
  el.style.setProperty("--mx", "50%");
  el.style.setProperty("--my", "50%");
}

function MouseGlow() {
  return <div className="mouse-glow pointer-events-none" />;
}

export default function SignInPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) =>
      setMousePos({ x: e.clientX / 50, y: e.clientY / 50 });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0f] text-white">

      {/* ── Background ── */}
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        {/* Radial glows */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 50%, #ff0040 0%, transparent 45%), radial-gradient(circle at 85% 60%, #00f0ff 0%, transparent 40%)",
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]/60" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>
      <div className="grain" />
      <div className="scanlines" />

      {/* ── Content ── */}
      <div
        className={`relative z-20 flex w-full flex-col items-center px-4 py-16 transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Brand header */}
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-10 bg-[#ff0040]" />
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.45em] text-[#00f0ff]">
              Beat Maker Portal
            </p>
            <div className="h-[1px] w-10 bg-[#ff0040]" />
          </div>

          <h1 className="text-5xl font-black uppercase leading-[0.85] tracking-tighter sm:text-6xl">
            <span className="text-white">Invalua</span>
            <span className="text-[#ff0040] drop-shadow-[0_0_30px_rgba(255,0,64,0.6)]">
              Bless
            </span>
          </h1>

          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-white/50">
            Productions
          </p>

          <p className="mt-2 border-l-2 border-[#ff0040] pl-4 text-left text-sm leading-relaxed text-white/80">
            Sign in to access your beat maker dashboard
          </p>
        </div>

        {/* Clerk card */}
        <div
          className="street-card street-hover w-full max-w-[420px] overflow-hidden"
          style={{ background: "rgba(10,10,15,0.85)", backdropFilter: "blur(20px)" }}
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
        >
          <MouseGlow />
          {/* Red top accent bar */}
          <div className="h-[2px] w-full bg-gradient-to-r from-[#ff0040] via-white/20 to-[#00f0ff]" />

          <div className="relative z-10 px-2 py-2">
            <SignIn
              appearance={{
                variables: {
  colorPrimary: "#ff0040",
  colorBackground: "transparent",
  colorInputBackground: "rgba(0,0,0,0.5)",
  colorInputText: "#ffffff",
  colorText: "#ffffff",
  colorTextSecondary: "rgba(255,255,255,0.85)",
  colorNeutral: "#ffffff",
  borderRadius: "0px",
  fontFamily: "inherit",
  fontSize: "14px",
},
                elements: {
  rootBox: "w-full",
  card: "bg-transparent shadow-none border-none p-6",
  headerTitle: "hidden",
  headerSubtitle: "hidden",
  formFieldLabel:
    "text-white font-bold uppercase tracking-[0.18em] text-[11px]",
  formFieldInput:
    "bg-black/50 border border-white/20 text-white placeholder:text-white/40 focus:border-[#ff0040]/60 outline-none transition rounded-none",
  formButtonPrimary:
    "bg-[#ff0040] text-black font-extrabold uppercase tracking-[0.18em] hover:bg-white transition rounded-none mt-2",
  footerActionText: "text-white/80",
  footerActionLink: "text-[#00f0ff] hover:text-cyan-200 font-bold",
  footer: "bg-transparent border-t border-white/10 mt-2",
  identityPreviewText: "text-white font-bold",
  identityPreviewEditButton: "text-[#00f0ff]",
  formResendCodeLink: "text-[#00f0ff]",
  otpCodeFieldInput:
    "bg-black/50 border border-white/20 text-white focus:border-[#ff0040]/60 rounded-none",
  alertText: "text-white font-bold",
  alertTextDanger: "text-[#ff0040] font-bold",
  formFieldSuccessText: "text-[#00f0ff] font-bold",
  formFieldErrorText: "text-[#ff0040] font-bold",
  dividerLine: "bg-white/15",
  dividerText: "text-white/70 text-[11px] uppercase tracking-[0.2em]",
  socialButtonsBlockButton:
    "border border-white/20 bg-white/[0.05] text-white hover:bg-white/10 transition font-bold",
  socialButtonsBlockButtonText: "text-white font-bold",
  main: "gap-4",
  form: "gap-4",
},
              }}
            />
          </div>
        </div>

        {/* Bottom label */}
        <div className="mt-8 flex items-center gap-3 text-[0.58rem] font-bold uppercase tracking-[0.3em] text-white/30">
          <span className="h-[1px] w-8 bg-white/10" />
          Invaluabless Productions · San Antonio, TX
          <span className="h-[1px] w-8 bg-white/10" />
        </div>
      </div>
    </main>
  );
}