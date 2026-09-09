"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import {
  UsersThree,
  Buildings,
  Translate,
  Handshake,
} from "@phosphor-icons/react";

const servicios = [
  {
    icon: UsersThree,
    titulo: "Reclutamiento operativo",
    descripcion:
      "Personal de linea, produccion y campo para industrias como manufactura, construccion y salud. Candidatos evaluados y alineados a tu operacion.",
  },
  {
    icon: Buildings,
    titulo: "Reclutamiento administrativo",
    descripcion:
      "Perfiles de oficina, contabilidad, recursos humanos y coordinacion. Seleccionamos talento que se integre a la dinamica de tu empresa.",
  },
  {
    icon: Translate,
    titulo: "Reclutamiento bilingue",
    descripcion:
      "Candidatos con dominio de espanol e ingles para empresas con operaciones en Mexico y Estados Unidos. Cobertura internacional.",
  },
  {
    icon: Handshake,
    titulo: "Outsourcing de reclutamiento",
    descripcion:
      "Externalizamos tu proceso completo de seleccion. Ideal para pymes que no tienen area de recursos humanos interna.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 bg-surface">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20">
          {/* Left: heading + image */}
          <div>
            <FadeIn>
              <span className="inline-block text-xs font-body font-medium uppercase tracking-[0.1em] text-primary mb-4">
                Servicios de reclutamiento
              </span>
              <h2 className="text-3xl md:text-[2.5rem] font-heading font-bold tracking-[--heading-tracking] text-text leading-tight">
                Seleccion de personal para cada nivel de tu empresa
              </h2>
              <p className="text-text-muted text-lg leading-relaxed mt-4 max-w-[50ch]">
                Cubrimos vacantes operativas, administrativas y bilingues con un
                proceso que prioriza la alineacion cultural sobre el curriculum.
              </p>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="relative w-full aspect-[4/3] rounded-[8px] overflow-hidden mt-10 shadow-[0_4px_40px_rgba(10,30,63,0.06)]">
                <Image
                  src="/images/servicios-reclutamiento.webp"
                  alt="Equipo diverso colaborando en planta industrial"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
            </FadeIn>
          </div>

          {/* Right: service cards with icons */}
          <div className="flex flex-col gap-6 lg:pt-8">
            {servicios.map((s, i) => {
              const Icon = s.icon;
              return (
                <FadeIn key={s.titulo} delay={i * 80}>
                  <div className="bg-bg rounded-[8px] p-6 shadow-[0_2px_20px_rgba(10,30,63,0.04)] border border-border/50 transition-shadow duration-200 hover:shadow-[0_4px_30px_rgba(10,30,63,0.08)]">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-[8px] bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon
                          size={20}
                          weight="regular"
                          className="text-primary"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-bold tracking-[--heading-tracking] text-text">
                          {s.titulo}
                        </h3>
                        <p className="text-text-muted text-base leading-relaxed mt-1.5">
                          {s.descripcion}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}

            <FadeIn delay={servicios.length * 80}>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-primary font-body font-medium text-base transition-opacity duration-200 hover:opacity-80 w-fit mt-2"
              >
                Cotiza tu proceso de seleccion
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="mt-px"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
