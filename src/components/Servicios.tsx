"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";
import {
  Buildings,
  Target,
  GraduationCap,
  ChartBar,
} from "@phosphor-icons/react";

const servicios = [
  {
    icon: Buildings,
    titulo: "Cultura Organizacional",
    descripcion:
      "Alineacion con el objetivo estrategico del dueno. Definicion de Mision, Vision y Valores. Alineacion de cultura a los perfiles de puesto. Diseno y descripcion de competencias clave.",
    imagen: "/images/diferenciador-cultura.webp",
  },
  {
    icon: Target,
    titulo: "Atraccion y Seleccion",
    descripcion:
      "Reclutamiento y atraccion especializada. Seleccion basada en entrevista por competencias. Pruebas de confianza e integridad. Evaluaciones con servicio de Poligrafo.",
    imagen: "/images/servicios-reclutamiento.webp",
  },
  {
    icon: GraduationCap,
    titulo: "Capacitacion y Liderazgo",
    descripcion:
      "Capacitacion en procesos de reclutamiento. Gestion del Liderazgo con sentido humano. Capacitacion en procesos de talento. Evaluacion del desempeno en equipos.",
    imagen: "/images/proceso-presentacion.webp",
  },
  {
    icon: ChartBar,
    titulo: "Retencion y Salida",
    descripcion:
      "Analisis estadistico de la rotacion de personal. Acciones efectivas para reducir la rotacion. Capacitacion en terminaciones laborales. Cierre legal y desvinculacion profesional.",
    imagen: "/images/hero-home.webp",
  },
];

export default function Servicios() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="servicios" className="py-20 bg-surface">
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <span className="inline-block text-xs font-body font-medium uppercase tracking-[0.1em] text-primary mb-4">
                Servicios PYMEs
              </span>
              <h2 className="text-3xl md:text-[2.5rem] font-heading font-bold tracking-[--heading-tracking] text-text leading-tight max-w-[24ch]">
                Soluciones especializadas para PYMEs
              </h2>
            </div>
            <p className="text-text-muted text-base leading-relaxed max-w-[40ch]">
              Disenadas para atender los retos de organizacion, seleccion y
              retencion de personal.
            </p>
          </div>
        </FadeIn>

        {/* Service rows */}
        <div className="flex flex-col">
          {servicios.map((s, i) => {
            const Icon = s.icon;
            const isActive = activeIndex === i;
            return (
              <FadeIn key={s.titulo} delay={i * 60}>
                <div
                  className="group border-t border-border py-6 cursor-pointer"
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-[8px] bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-200 group-hover:bg-brand-gradient">
                      <Icon
                        size={20}
                        weight="regular"
                        className="text-primary transition-colors duration-200 group-hover:text-on-primary"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-heading font-bold tracking-[--heading-tracking] text-text group-hover:text-primary transition-colors duration-200">
                        {s.titulo}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed mt-0.5">
                        {s.descripcion}
                      </p>
                    </div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="shrink-0 text-text-muted group-hover:text-primary transition-all duration-200 group-hover:translate-x-1"
                    >
                      <path
                        d="M4 10h12M12 6l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Expanding image strip */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: isActive ? "120px" : "0px",
                      opacity: isActive ? 1 : 0,
                      transitionTimingFunction:
                        "cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    <div className="relative w-full h-[100px] rounded-[8px] overflow-hidden mt-4">
                      <Image
                        src={s.imagen}
                        alt={s.titulo}
                        fill
                        className="object-cover object-center"
                        sizes="100vw"
                      />
                      <div className="absolute inset-0 bg-primary/20" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
          {/* Bottom border */}
          <div className="border-t border-border" />
        </div>

        <FadeIn delay={300}>
          <div className="mt-10">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-gradient text-on-primary font-body font-medium text-base rounded-full transition-transform duration-200 active:scale-[0.98] hover:brightness-110"
              style={{ transitionTimingFunction: "var(--easing)" }}
            >
              Cotiza tu proceso de seleccion
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
