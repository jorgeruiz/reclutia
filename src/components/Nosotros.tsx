"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import { MapPin, Globe, Clock, UsersFour } from "@phosphor-icons/react";

const stats = [
  { icon: Clock, label: "5+ anos de experiencia en reclutamiento" },
  { icon: MapPin, label: "Sede en Monterrey, Mexico" },
  { icon: Globe, label: "Cobertura bilingue Mexico y EUA" },
  { icon: UsersFour, label: "Manufactura, salud, construccion, agencias, gobierno" },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 bg-bg">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Top: intro text with logo and description */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          <FadeIn>
            <div>
              <Image
                src="/images/logo.webp"
                alt="Reclutia"
                width={160}
                height={53}
                className="h-12 w-auto object-contain mb-8"
              />
              <h2 className="text-3xl md:text-[2.5rem] font-heading font-bold tracking-[--heading-tracking] text-text leading-tight">
                Tu socio estrategico en talento
              </h2>
              <p className="text-text-muted text-lg leading-relaxed mt-5">
                Somos una agencia de reclutamiento y seleccion de personal que
                entiende que contratar bien no es solo llenar vacantes. Es
                encontrar personas que compartan la cultura, los valores y la
                forma de trabajar de tu empresa.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="bg-surface rounded-[8px] p-8 lg:p-10">
              <p className="text-text text-base leading-relaxed">
                Reclutia es una agencia de reclutamiento y seleccion de personal
                con sede en Mexico que opera a nivel nacional e internacional,
                incluyendo cobertura bilingue para empresas en Estados Unidos y
                Mexico. Atendemos a emprendedores, duenos y empresarios de
                sectores como manufactura, salud, construccion, agencias y
                gobierno que necesitan contratar personal administrativo,
                operativo y directivo alineado a la cultura de su organizacion.
              </p>
              <p className="text-text text-base leading-relaxed mt-4">
                Ademas del reclutamiento, ofrecemos servicios complementarios
                como psicometria, investigaciones laborales, pruebas de
                confianza, asesoria legal laboral y cumplimiento de NOM-035.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Bottom: stats strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <FadeIn key={stat.label} delay={i * 80}>
                <div className="flex items-start gap-3 p-5 border border-border rounded-[8px]">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={18} weight="regular" className="text-primary" />
                  </div>
                  <p className="text-text text-sm leading-relaxed font-medium">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Image row */}
        <FadeIn delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16">
            <div className="relative aspect-[4/3] rounded-[8px] overflow-hidden col-span-2 md:col-span-1">
              <Image
                src="/images/hero-home.webp"
                alt="Consultora en reunion con cliente"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-[8px] overflow-hidden">
              <Image
                src="/images/diferenciador-cultura.webp"
                alt="Equipo colaborando"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-[8px] overflow-hidden">
              <Image
                src="/images/servicios-reclutamiento.webp"
                alt="Equipo diverso en planta"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
