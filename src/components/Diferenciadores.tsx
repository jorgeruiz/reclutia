"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import {
  Heart,
  ShieldCheck,
  UserCircle,
} from "@phosphor-icons/react";

const diferenciadores = [
  {
    numero: "01",
    icon: Heart,
    titulo: "Enfoque en cultura organizacional",
    descripcion:
      "No solo buscamos candidatos con el perfil tecnico correcto. Identificamos personas que comparten los valores y la forma de trabajar de tu empresa. Esto reduce la rotacion y mejora el desempeno a largo plazo.",
  },
  {
    numero: "02",
    icon: ShieldCheck,
    titulo: "Proceso integral de validacion",
    descripcion:
      "Psicometrias especificas por vacante, investigacion laboral y domiciliaria, pruebas de confianza y validacion de historial. Cada candidato pasa por multiples filtros antes de llegar a ti.",
  },
  {
    numero: "03",
    icon: UserCircle,
    titulo: "Trato personal y cercano",
    descripcion:
      "Trabajas directamente con un especialista que entiende tu industria. No somos un call center ni una bolsa de trabajo. Somos tu socio en la busqueda de talento.",
  },
];

export default function Diferenciadores() {
  return (
    <section id="diferenciadores" className="py-20 bg-bg">
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-[2.5rem] font-heading font-bold tracking-[--heading-tracking] text-text mb-16 leading-tight">
            Por que Reclutia
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[0.55fr_1fr] gap-10 lg:gap-20 items-start">
          {/* Left: image */}
          <FadeIn>
            <div className="relative w-full aspect-[3/2] rounded-[8px] overflow-hidden shadow-[0_4px_40px_rgba(10,30,63,0.06)] sticky top-28">
              <Image
                src="/images/diferenciador-cultura.webp"
                alt="Equipo cohesivo en sesion de trabajo colaborativo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </FadeIn>

          {/* Right: numbered differentiators with icons */}
          <div className="flex flex-col gap-10">
            {diferenciadores.map((d, i) => {
              const Icon = d.icon;
              return (
                <FadeIn key={d.numero} delay={i * 100}>
                  <div className="flex gap-6 items-start">
                    <div className="shrink-0 flex flex-col items-center gap-3">
                      <span className="text-[3.5rem] md:text-[4.5rem] font-heading font-extrabold leading-none text-primary/8 select-none">
                        {d.numero}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon
                          size={20}
                          weight="regular"
                          className="text-primary"
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <h3 className="text-xl font-heading font-bold tracking-[--heading-tracking] text-text">
                        {d.titulo}
                      </h3>
                      <p className="text-text-muted text-base leading-relaxed mt-2 max-w-[50ch]">
                        {d.descripcion}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
