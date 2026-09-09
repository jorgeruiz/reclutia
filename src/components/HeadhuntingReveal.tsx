"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HeadhuntingReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const reveal = revealRef.current;
    if (!section || !reveal) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      reveal.style.clipPath = "inset(0 0% 0 0)";
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        reveal,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      {/* Reveal container with clip-path animation */}
      <div
        ref={revealRef}
        className="bg-text py-24 md:py-32"
        style={{
          clipPath: "inset(0 100% 0 0)",
          willChange: "clip-path",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Text content */}
            <div>
              <span className="inline-block text-xs font-body font-medium uppercase tracking-[0.1em] text-[#94A3BB] mb-4">
                Headhunting ejecutivo
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-[--heading-tracking] text-on-primary leading-tight">
                Talento directivo para decisiones de alto impacto
              </h2>
              <p className="text-[#94A3BB] text-lg leading-relaxed mt-6 max-w-[50ch]">
                Identificamos y atraemos perfiles gerenciales y de direccion que
                no estan buscando empleo activamente. Nuestro proceso de
                headhunting combina discrecion, cobertura en Mexico y EUA, y un
                entendimiento profundo de lo que tu empresa necesita en sus
                posiciones clave.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Busqueda activa de candidatos pasivos",
                  "Cobertura Mexico y Estados Unidos",
                  "Evaluacion de alineacion cultural y liderazgo",
                  "Confidencialidad en todo el proceso",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[#94A3BB]"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 mt-10 px-8 py-3.5 bg-primary text-on-primary font-body font-medium text-base rounded-full transition-transform duration-200 active:scale-[0.98] hover:brightness-110"
                style={{
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                Pide informacion
              </a>
            </div>

            {/* Image */}
            <div className="relative w-full aspect-[2/1] md:aspect-[7/5] rounded-[8px] overflow-hidden">
              <Image
                src="/images/headhunting-ejecutivo.webp"
                alt="Headhunting ejecutivo - talento directivo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
