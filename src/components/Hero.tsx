"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const text = textRef.current;
    const overlay = overlayRef.current;
    if (!section || !bg || !text || !overlay) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const ctx = gsap.context(() => {
      // Parallax: bg moves faster (out), text moves much slower (stays)
      gsap.to(bg, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text barely moves - stays on screen longer
      gsap.to(text, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Fade to white - starts earlier and completes faster
      gsap.to(overlay, {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "30% top",
          end: "65% top",
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[160dvh] flex items-start justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        ref={bgRef}
        className="absolute inset-0 -top-[15%] -bottom-[15%]"
        style={{ willChange: "transform" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/hero-bg.webp)" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-text/50" />
      </div>

      {/* White fade overlay (animated on scroll) */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-bg pointer-events-none"
        style={{ opacity: 0 }}
      />

      {/* Centered title - wider, smaller, max 3 lines */}
      <h1
        ref={textRef}
        className="relative z-10 text-3xl md:text-[2.75rem] lg:text-[3.5rem] font-heading font-extrabold tracking-[--heading-tracking] text-on-primary leading-[1.1] text-center max-w-[28ch] px-6 pt-[35dvh]"
        style={{ willChange: "transform" }}
      >
        Reclutamiento y seleccion de personal para empresas de alto desempeno
      </h1>
    </section>
  );
}
