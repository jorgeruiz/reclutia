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
      // Parallax: bg moves slower, text moves faster
      gsap.to(bg, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(text, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Fade to white overlay
      gsap.to(overlay, {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "60% top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        ref={bgRef}
        className="absolute inset-0 -top-[10%] -bottom-[10%]"
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

      {/* Centered title */}
      <h1
        ref={textRef}
        className="relative z-10 text-4xl md:text-[3.75rem] lg:text-[4.5rem] font-heading font-extrabold tracking-[--heading-tracking] text-on-primary leading-[1.05] text-center max-w-[16ch] px-6"
        style={{ willChange: "transform" }}
      >
        Reclutamiento y seleccion de personal para empresas de alto desempeno
      </h1>
    </section>
  );
}
