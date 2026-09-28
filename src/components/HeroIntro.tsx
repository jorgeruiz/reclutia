"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function HeroIntro() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const isotipoRef = useRef<HTMLDivElement>(null);
  const ring1Ref = useRef<HTMLDivElement>(null);
  const ring2Ref = useRef<HTMLDivElement>(null);
  const ring3Ref = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const navEl = document.querySelector("[data-nav]") as HTMLElement | null;
    const heroContent = document.querySelector(
      "[data-hero-content]"
    ) as HTMLElement | null;
    if (navEl) gsap.set(navEl, { opacity: 0, y: -15 });
    if (heroContent) gsap.set(heroContent, { opacity: 0, y: 25 });

    if (mq.matches) {
      if (navEl) gsap.set(navEl, { opacity: 1, y: 0 });
      if (heroContent) gsap.set(heroContent, { opacity: 1, y: 0 });
      setDismissed(true);
      return;
    }

    document.body.style.overflow = "hidden";
    let cleaned = false;
    let bounceTween: gsap.core.Tween | null = null;

    /* ── dismiss ── */
    const dismiss = () => {
      if (cleaned) return;
      cleaned = true;
      cleanup();
      if (bounceTween) bounceTween.kill();

      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          setDismissed(true);
        },
      });

      tl.to(scrollRef.current, { opacity: 0, duration: 0.2 }, 0);

      tl.to(logoRef.current, {
        opacity: 0,
        scale: 0.88,
        y: -25,
        duration: 0.5,
        ease: "power2.in",
      }, 0);

      tl.to(lineRef.current, {
        scaleX: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power2.in",
      }, 0.05);

      tl.to(titleRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.4,
        ease: "power2.in",
      }, 0.1);

      tl.to(overlayRef.current, {
        opacity: 0,
        duration: 0.9,
        ease: "power2.inOut",
      }, 0.25);

      if (navEl) {
        tl.to(navEl, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        }, 0.7);
      }

      if (heroContent) {
        tl.to(heroContent, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        }, 0.8);
      }
    };

    const onWheel = () => dismiss();
    const onTouch = () => dismiss();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === " ") dismiss();
    };

    const cleanup = () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("keydown", onKey);
    };

    const enableListeners = () => {
      window.addEventListener("wheel", onWheel, { once: true });
      window.addEventListener("touchmove", onTouch, { once: true });
      window.addEventListener("keydown", onKey);
    };

    /* ── entry animation ── */
    const entryTl = gsap.timeline({
      onComplete: () => {
        enableListeners();
        bounceTween = gsap.to(scrollRef.current, {
          y: 6,
          duration: 0.9,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        });
      },
    });

    /* Phase 1 — isotipo fades in with pulse */
    entryTl.fromTo(
      isotipoRef.current,
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
    );

    /* Phase 2 — ripple rings expand outward (staggered) */
    const rings = [ring1Ref.current, ring2Ref.current, ring3Ref.current];
    rings.forEach((ring, i) => {
      entryTl.fromTo(
        ring,
        { scale: 0.5, opacity: 0.6 },
        {
          scale: 2.5,
          opacity: 0,
          duration: 1.2,
          ease: "power1.out",
        },
        `-=${i === 0 ? 0.1 : 0.85}`
      );
    });

    /* Phase 3 — blurred video fades in during ripples */
    entryTl.fromTo(
      bgRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.inOut" },
      "-=2.0"
    );

    /* Phase 4 — isotipo blurs out */
    entryTl.to(
      isotipoRef.current,
      {
        opacity: 0,
        scale: 0.6,
        filter: "blur(12px)",
        duration: 0.4,
        ease: "power2.in",
      },
      "-=0.6"
    );

    /* Phase 5 — full logo reveals (scale overshoot) */
    entryTl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8, filter: "blur(10px)" },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.7,
        ease: "back.out(1.4)",
      },
      "-=0.05"
    );

    /* Phase 6 — decorative line */
    entryTl.fromTo(
      lineRef.current,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 0.45, ease: "power2.out" },
      "-=0.25"
    );

    /* Phase 7 — title text */
    entryTl.fromTo(
      titleRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      "-=0.15"
    );

    /* Phase 8 — scroll indicator */
    entryTl.fromTo(
      scrollRef.current,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      "+=0.15"
    );

    return () => {
      entryTl.kill();
      if (bounceTween) bounceTween.kill();
      cleanup();
      document.body.style.overflow = "";
      if (navEl) gsap.set(navEl, { clearProps: "all" });
      if (heroContent) gsap.set(heroContent, { clearProps: "all" });
    };
  }, [dismissed]);

  if (dismissed) return null;

  /* shared ring style */
  const ringClass =
    "absolute w-28 h-28 rounded-full border border-primary/15 pointer-events-none";

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
    >
      {/* Solid light base */}
      <div className="absolute inset-0 bg-bg" />

      {/* Blurred video + light glass tint */}
      <div ref={bgRef} className="absolute inset-0" style={{ opacity: 0 }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover blur-[28px] scale-110"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-bg/75 backdrop-blur-[4px]" />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Ripple rings (behind isotipo) */}
        <div className="absolute flex items-center justify-center">
          <div ref={ring1Ref} className={ringClass} style={{ opacity: 0 }} />
          <div ref={ring2Ref} className={ringClass} style={{ opacity: 0 }} />
          <div ref={ring3Ref} className={ringClass} style={{ opacity: 0 }} />
        </div>

        {/* Isotipo (loading phase only) */}
        <div
          ref={isotipoRef}
          className="absolute flex items-center justify-center"
          style={{ opacity: 0 }}
        >
          <Image
            src="/images/logo-isotipo.webp"
            alt=""
            width={120}
            height={120}
            className="w-24 h-auto object-contain drop-shadow-[0_0_30px_rgba(45,108,223,0.15)]"
            priority
          />
        </div>

        {/* Full logo (after loading) */}
        <div ref={logoRef} style={{ opacity: 0 }}>
          <Image
            src="/images/logo-full-transparent.webp"
            alt="Reclutia - Socios Estrategicos en Talento"
            width={480}
            height={320}
            className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto object-contain drop-shadow-[0_0_50px_rgba(45,108,223,0.12)]"
            priority
          />
        </div>

        {/* Decorative line */}
        <div
          ref={lineRef}
          className="w-16 h-px bg-primary/30 mt-8 origin-center"
          style={{ opacity: 0 }}
        />

        {/* Title */}
        <p
          ref={titleRef}
          className="mt-5 text-center text-sm sm:text-base md:text-lg font-body font-medium tracking-[0.18em] text-text-muted uppercase max-w-[40ch] leading-relaxed"
          style={{ opacity: 0 }}
        >
          Tu socio estrategico en la contratacion de talento
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ opacity: 0 }}
      >
        <span className="text-text-muted/50 text-xs font-body font-medium tracking-[0.2em] uppercase">
          Scroll
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          className="text-text-muted/50"
        >
          <path
            d="M10 4v10m0 0l-4-4m4 4l4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
