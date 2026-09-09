"use client";

import { useState } from "react";
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
      "Personal de linea, produccion y campo para manufactura, construccion y salud.",
    imagen: "/images/servicios-reclutamiento.webp",
  },
  {
    icon: Buildings,
    titulo: "Reclutamiento administrativo",
    descripcion:
      "Perfiles de oficina, contabilidad, RRHH y coordinacion alineados a tu dinamica.",
    imagen: "/images/diferenciador-cultura.webp",
  },
  {
    icon: Translate,
    titulo: "Reclutamiento bilingue",
    descripcion:
      "Candidatos espanol-ingles para operaciones en Mexico y Estados Unidos.",
    imagen: "/images/hero-home.webp",
  },
  {
    icon: Handshake,
    titulo: "Outsourcing de reclutamiento",
    descripcion:
      "Externalizamos tu proceso completo. Ideal para pymes sin area de RRHH.",
    imagen: "/images/proceso-presentacion.webp",
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
                Servicios de reclutamiento
              </span>
              <h2 className="text-3xl md:text-[2.5rem] font-heading font-bold tracking-[--heading-tracking] text-text leading-tight max-w-[20ch]">
                Seleccion de personal para cada nivel
              </h2>
            </div>
            <p className="text-text-muted text-base leading-relaxed max-w-[40ch]">
              Cubrimos vacantes operativas, administrativas y bilingues
              priorizando la alineacion cultural.
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
                    <div className="w-10 h-10 rounded-[8px] bg-primary/10 flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-primary">
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
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-on-primary font-body font-medium text-base rounded-full transition-transform duration-200 active:scale-[0.98] hover:brightness-110"
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
