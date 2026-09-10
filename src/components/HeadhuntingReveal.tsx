"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HeadhuntingReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      bg.style.transform = "scaleY(1)";
      setFilled(true);
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 85%",
        onEnter: () => {
          bg.style.transform = "scaleY(1)";
          setFilled(true);
        },
        onLeaveBack: () => {
          bg.style.transform = "scaleY(0)";
          setFilled(false);
        },
      });
    }, section);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      ref={sectionRef}
      id="headhunting"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Animated blue background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-text origin-center transition-transform duration-300"
        style={{ transform: "scaleY(0)", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text content */}
          <div>
            <span
              className={`inline-block text-xs font-body font-medium uppercase tracking-[0.1em] mb-4 transition-colors duration-300 ${
                filled ? "text-[#94A3BB]" : "text-primary"
              }`}
            >
              Headhunting ejecutivo
            </span>
            <h2
              className={`text-3xl md:text-[2.5rem] font-heading font-bold tracking-[--heading-tracking] leading-tight transition-colors duration-300 ${
                filled ? "text-on-primary" : "text-text"
              }`}
            >
              Talento directivo para decisiones de alto impacto
            </h2>
            <p
              className={`text-lg leading-relaxed mt-6 max-w-[50ch] transition-colors duration-300 ${
                filled ? "text-[#94A3BB]" : "text-text-muted"
              }`}
            >
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
                  className={`flex items-start gap-3 transition-colors duration-300 ${
                    filled ? "text-[#94A3BB]" : "text-text-muted"
                  }`}
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              className={`inline-flex items-center gap-2 mt-10 px-8 py-3.5 font-body font-medium text-base rounded-full transition-all duration-300 active:scale-[0.98] ${
                filled
                  ? "bg-on-primary text-text hover:bg-on-primary/90"
                  : "bg-primary text-on-primary hover:brightness-110"
              }`}
              style={{ transitionTimingFunction: "var(--easing)" }}
            >
              Pide informacion
            </a>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-[4/3] rounded-[8px] overflow-hidden shadow-[0_8px_60px_rgba(10,30,63,0.15)]">
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
    </section>
  );
}
