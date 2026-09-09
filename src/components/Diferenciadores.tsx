"use client";

import FadeIn from "./FadeIn";
import {
  Heart,
  ShieldCheck,
  UserCircle,
} from "@phosphor-icons/react";

const diferenciadores = [
  {
    icon: Heart,
    titulo: "Enfoque en cultura organizacional",
    descripcion:
      "No solo buscamos candidatos con el perfil tecnico correcto. Identificamos personas que comparten los valores y la forma de trabajar de tu empresa. Esto reduce la rotacion y mejora el desempeno a largo plazo.",
  },
  {
    icon: ShieldCheck,
    titulo: "Proceso integral de validacion",
    descripcion:
      "Psicometrias especificas por vacante, investigacion laboral y domiciliaria, pruebas de confianza y validacion de historial. Cada candidato pasa por multiples filtros antes de llegar a ti.",
  },
  {
    icon: UserCircle,
    titulo: "Trato personal y cercano",
    descripcion:
      "Trabajas directamente con un especialista que entiende tu industria. No somos un call center ni una bolsa de trabajo. Somos tu socio en la busqueda de talento.",
  },
];

export default function Diferenciadores() {
  return (
    <section id="diferenciadores" className="py-24 bg-text">
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-[2.5rem] font-heading font-bold tracking-[--heading-tracking] text-on-primary leading-tight">
              Por que Reclutia
            </h2>
            <p className="text-[#94A3BB] text-lg leading-relaxed mt-4 max-w-[50ch] mx-auto">
              Lo que nos diferencia de una agencia de colocacion convencional.
            </p>
          </div>
        </FadeIn>

        {/* 3-column cards on dark bg */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {diferenciadores.map((d, i) => {
            const Icon = d.icon;
            return (
              <FadeIn key={d.titulo} delay={i * 100}>
                <div className="bg-[#143A52] rounded-[8px] p-8 h-full border border-[#1E3A5F] transition-all duration-200 hover:border-primary/40 hover:bg-[#1A4460]">
                  <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mb-6">
                    <Icon
                      size={24}
                      weight="regular"
                      className="text-primary"
                    />
                  </div>
                  <h3 className="text-xl font-heading font-bold tracking-[--heading-tracking] text-on-primary">
                    {d.titulo}
                  </h3>
                  <p className="text-[#94A3BB] text-base leading-relaxed mt-3">
                    {d.descripcion}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* CTA row */}
        <FadeIn delay={300}>
          <div className="text-center mt-14">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-on-primary text-text font-body font-medium text-base rounded-full transition-transform duration-200 active:scale-[0.98] hover:bg-on-primary/90"
              style={{ transitionTimingFunction: "var(--easing)" }}
            >
              Conoce como trabajamos
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
