"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const overlay = overlayRef.current;
    const text = textRef.current;
    if (!section || !bg || !overlay || !text) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const ctx = gsap.context(() => {
      // Parallax: bg drifts up as user scrolls
      gsap.to(bg, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Fade to white
      gsap.to(overlay, {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "15% top",
          end: "55% top",
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[130dvh]">
      {/* Background layer - clips its own overflow for parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={bgRef}
          className="absolute inset-0 -top-[15%] -bottom-[15%]"
          style={{ willChange: "transform" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/hero-bg.webp)" }}
          />
          <div className="absolute inset-0 bg-text/50" />
        </div>
      </div>

      {/* White fade overlay - covers everything including text */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-bg pointer-events-none z-20"
        style={{ opacity: 0 }}
      />

      {/* Sticky text - stays fixed in viewport while section scrolls past */}
      <div
        ref={textRef}
        className="sticky top-0 h-[100dvh] flex flex-col items-center justify-center z-10 px-6"
      >
        <h1 className="text-3xl md:text-[2.75rem] lg:text-[3.5rem] font-heading font-extrabold tracking-[--heading-tracking] text-on-primary leading-[1.1] text-center max-w-[28ch]">
          Reclutamiento y seleccion de personal para empresas de alto desempeno
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-3.5 font-body font-medium text-base rounded-full text-on-primary transition-transform duration-200 active:scale-[0.98] hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, #2D6CDF 0%, #143A52 100%)",
              transitionTimingFunction: "var(--easing)",
            }}
          >
            Pide informacion
          </a>
          <a
            href="#proceso"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-on-primary/30 text-on-primary font-body font-medium text-base rounded-full transition-colors duration-200 hover:bg-on-primary/10 backdrop-blur-[4px]"
            style={{ transitionTimingFunction: "var(--easing)" }}
          >
            Conoce nuestro proceso
          </a>
        </div>
      </div>
    </section>
  );
}
