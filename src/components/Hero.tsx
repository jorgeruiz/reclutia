"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative bg-bg pt-28 pb-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Top: big headline spanning full width */}
        <FadeIn>
          <h1 className="text-4xl md:text-[3.75rem] lg:text-[4.25rem] font-heading font-extrabold tracking-[--heading-tracking] text-text leading-[1.05] max-w-[18ch]">
            Reclutamiento y seleccion de personal para empresas de alto
            desempeno
          </h1>
        </FadeIn>

        {/* Grid: left text + right image */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-10 md:gap-16 mt-10 items-end">
          <FadeIn delay={100}>
            <div>
              <p className="text-text-muted text-lg leading-relaxed max-w-[48ch]">
                Somos tu socio estrategico en talento. Encontramos al candidato
                que no solo cumple con el perfil tecnico, sino que se alinea con
                la cultura y valores de tu empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-on-primary font-body font-medium text-base rounded-full transition-transform duration-200 active:scale-[0.98] hover:brightness-110"
                  style={{ transitionTimingFunction: "var(--easing)" }}
                >
                  Pide informacion
                </a>
                <a
                  href="#proceso"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-border text-text font-body font-medium text-base rounded-full transition-colors duration-200 hover:bg-surface"
                  style={{ transitionTimingFunction: "var(--easing)" }}
                >
                  Conoce nuestro proceso
                </a>
              </div>

              {/* Micro-stats strip */}
              <div className="flex gap-10 mt-12 pt-8 border-t border-border">
                {[
                  { value: "5+", label: "Anos de experiencia" },
                  { value: "MX/EUA", label: "Cobertura internacional" },
                  { value: "5", label: "Sectores industriales" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <span className="text-2xl font-heading font-bold text-text">
                      {stat.value}
                    </span>
                    <p className="text-text-muted text-sm mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Hero image - larger, with overlapping card */}
          <FadeIn delay={200} direction="right">
            <div className="relative">
              <div className="relative w-full aspect-[4/3] rounded-[8px] overflow-hidden shadow-[0_8px_60px_rgba(10,30,63,0.12)]">
                <Image
                  src="/images/hero-home.webp"
                  alt="Consultora de reclutamiento en reunion con cliente"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </div>
              {/* Floating info card */}
              <div className="hidden md:block absolute -bottom-6 -left-8 bg-bg border border-border rounded-[8px] shadow-[0_4px_40px_rgba(10,30,63,0.08)] p-5 max-w-[260px]">
                <p className="text-sm font-body text-text leading-relaxed">
                  Manufactura, salud, construccion, agencias y gobierno
                </p>
                <p className="text-xs text-text-muted mt-1">
                  Sectores que atendemos
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* AEO executive summary - integrated as a subtle strip */}
      <div className="max-w-[1280px] mx-auto px-6 mt-20">
        <p className="text-text-muted text-sm leading-relaxed max-w-[90ch] border-l-2 border-primary pl-4">
          Reclutia es una agencia de reclutamiento y seleccion de personal con
          sede en Mexico que opera a nivel nacional e internacional, incluyendo
          cobertura bilingue para empresas en Estados Unidos y Mexico.
          Atendemos a emprendedores, duenos y empresarios de sectores como
          manufactura, salud, construccion, agencias y gobierno.
        </p>
      </div>
    </section>
  );
}
