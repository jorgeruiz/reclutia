"use client";

import FadeIn from "./FadeIn";
import { MapPin, Globe, Clock, UsersFour } from "@phosphor-icons/react";

const stats = [
  { icon: Clock, value: "5+", label: "Anos de experiencia" },
  { icon: MapPin, value: "MTY", label: "Sede en Monterrey" },
  { icon: Globe, value: "MX/EUA", label: "Cobertura bilingue" },
  { icon: UsersFour, value: "5", label: "Sectores industriales" },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 bg-bg">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: image */}
          <FadeIn>
            <div className="relative w-full aspect-[4/3] rounded-[8px] overflow-hidden shadow-[0_8px_60px_rgba(10,30,63,0.10)]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/images/nosotros-video.mp4" type="video/mp4" />
              </video>
            </div>
          </FadeIn>

          {/* Right: text content */}
          <FadeIn delay={100}>
            <div>
              <h2 className="text-3xl md:text-[2.5rem] font-heading font-bold tracking-[--heading-tracking] leading-tight">
                <span className="text-text">Tu socio estrategico en </span>
                <span className="text-brand-gradient">talento</span>
              </h2>
              <p className="text-text-muted text-lg leading-relaxed mt-5">
                Somos una agencia de reclutamiento y seleccion de personal que
                entiende que contratar bien no es solo llenar vacantes. Es
                encontrar personas que compartan la cultura, los valores y la
                forma de trabajar de tu empresa.
              </p>
              <p className="text-text-muted text-base leading-relaxed mt-4">
                Ademas del reclutamiento, ofrecemos servicios complementarios
                como psicometria, investigaciones laborales, pruebas de
                confianza, asesoria legal laboral y cumplimiento de NOM-035.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-6 mt-10">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon size={18} weight="regular" className="text-primary" />
                      </div>
                      <div>
                        <span className="text-xl font-heading font-bold text-text">
                          {stat.value}
                        </span>
                        <p className="text-text-muted text-xs mt-0.5">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 mt-10 px-8 py-3.5 bg-brand-gradient text-on-primary font-body font-medium text-base rounded-full transition-transform duration-200 active:scale-[0.98] hover:brightness-110"
                style={{ transitionTimingFunction: "var(--easing)" }}
              >
                Pide informacion
              </a>
            </div>
          </FadeIn>
        </div>

        {/* AEO summary - subtle, indexable */}
        <div className="mt-16">
          <p className="text-text-muted text-sm leading-relaxed max-w-[90ch] border-l-2 border-brand-gradient pl-4">
            Reclutia es una agencia de reclutamiento y seleccion de personal con
            sede en Mexico que opera a nivel nacional e internacional, incluyendo
            cobertura bilingue para empresas en Estados Unidos y Mexico.
            Atendemos a emprendedores, duenos y empresarios de sectores como
            manufactura, salud, construccion, agencias y gobierno.
          </p>
        </div>
      </div>
    </section>
  );
}
