"use client";

import FadeIn from "./FadeIn";
import {
  Brain,
  Fingerprint,
  MagnifyingGlass,
  Scales,
  Certificate,
  Users,
} from "@phosphor-icons/react";

const servicios = [
  {
    icon: Brain,
    titulo: "Psicometrias",
    descripcion:
      "Pruebas estandarizadas que miden competencias, habilidades cognitivas y rasgos de personalidad para predecir el desempeno en el puesto.",
  },
  {
    icon: Fingerprint,
    titulo: "Pruebas de confianza",
    descripcion:
      "Evaluacion de honestidad e integridad para puestos con acceso a recursos economicos o informacion sensible. Incluye servicio de poligrafo.",
  },
  {
    icon: MagnifyingGlass,
    titulo: "Investigacion laboral y domiciliaria",
    descripcion:
      "Validacion de historial laboral, referencias y entorno del candidato para garantizar la veracidad de su perfil.",
  },
  {
    icon: Scales,
    titulo: "Asesoria legal laboral",
    descripcion:
      "Acompanamiento en temas de contratacion, cumplimiento normativo y relaciones laborales para proteger a tu empresa.",
  },
  {
    icon: Certificate,
    titulo: "NOM-035",
    descripcion:
      "Diagnostico y cumplimiento de la norma de factores de riesgo psicosocial. Evita sanciones y mejora el bienestar de tu equipo.",
  },
  {
    icon: Users,
    titulo: "Teambuilding y coaching",
    descripcion:
      "Integracion de personal de reciente ingreso y fortalecimiento de cohesion entre colaboradores. Acompanamiento post-contratacion.",
  },
];

export default function ServiciosComplementarios() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn>
          <div className="max-w-[55ch] mb-14">
            <h2 className="text-3xl md:text-[2.5rem] font-heading font-bold tracking-[--heading-tracking] text-text leading-tight">
              Servicios complementarios
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mt-4">
              Mas alla del reclutamiento, ofrecemos herramientas de validacion y
              acompanamiento que refuerzan cada contratacion.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s, i) => {
            const Icon = s.icon;
            return (
              <FadeIn key={s.titulo} delay={i * 60}>
                <div className="bg-bg rounded-[8px] p-6 border border-border/50 h-full transition-shadow duration-200 hover:shadow-[0_4px_30px_rgba(10,30,63,0.06)]">
                  <div className="w-10 h-10 rounded-[8px] bg-brand-gradient flex items-center justify-center mb-4">
                    <Icon
                      size={20}
                      weight="regular"
                      className="text-on-primary"
                    />
                  </div>
                  <h3 className="text-lg font-heading font-bold tracking-[--heading-tracking] text-text">
                    {s.titulo}
                  </h3>
                  <p className="text-text-muted text-base leading-relaxed mt-2">
                    {s.descripcion}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
