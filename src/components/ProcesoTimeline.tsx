"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PasoData {
  numero: string;
  titulo: string;
  descripcion: string;
  fase: string;
  etiqueta: string;
}

const pasos: PasoData[] = [
  {
    numero: "01",
    titulo: "Diseno de Cultura Organizacional",
    descripcion:
      "Alineacion estrategica con el objetivo del liderazgo o dueno de la empresa.",
    fase: "I",
    etiqueta: "Estrategia",
  },
  {
    numero: "02",
    titulo: "Definicion de Identidad Corporativa",
    descripcion:
      "Estructuracion practica de Mision, Vision y Valores corporativos.",
    fase: "I",
    etiqueta: "Estrategia",
  },
  {
    numero: "03",
    titulo: "Alineacion de la Cultura a Puestos",
    descripcion:
      "Integracion de los valores de la empresa con la dinamica operativa diaria.",
    fase: "I",
    etiqueta: "Estructura",
  },
  {
    numero: "04",
    titulo: "Diseno y Descripcion de Competencias por Puesto",
    descripcion:
      "Elaboracion de descripciones de puesto y matriz de competencias requerida.",
    fase: "II",
    etiqueta: "Perfiles",
  },
  {
    numero: "05",
    titulo: "Reclutamiento y Atraccion de Personal",
    descripcion:
      "Estrategia de atraccion de talentos especializados para el sector PYME.",
    fase: "III",
    etiqueta: "Atraccion",
  },
  {
    numero: "06",
    titulo: "Seleccion Basada en Entrevista por Competencias",
    descripcion:
      "Filtro tecnico profundo evaluando conductas y alineacion al puesto.",
    fase: "III",
    etiqueta: "Evaluacion",
  },
  {
    numero: "07",
    titulo: "Pruebas de Confianza y Poligrafo",
    descripcion:
      "Evaluacion de honestidad e integridad para posiciones criticas o de responsabilidad.",
    fase: "III",
    etiqueta: "Blindaje",
  },
  {
    numero: "08",
    titulo: "Capacitacion en Procesos de Reclutamiento y Seleccion",
    descripcion:
      "Entrenamiento a supervisores y lideres para entrevistar y filtrar talento.",
    fase: "IV",
    etiqueta: "Capacitacion",
  },
  {
    numero: "09",
    titulo: "Gestion del Liderazgo con Sentido Humano",
    descripcion:
      "Formacion gerencial orientada al bienestar, empatia y logro de metas.",
    fase: "IV",
    etiqueta: "Liderazgo",
  },
  {
    numero: "10",
    titulo: "Capacitacion en Procesos de Evaluacion del Desempeno",
    descripcion:
      "Metricas y retroalimentacion periodica para potenciar la productividad.",
    fase: "IV",
    etiqueta: "Capacitacion",
  },
  {
    numero: "11",
    titulo: "Analisis Estadistico y Acciones para Reducir la Rotacion",
    descripcion:
      "Analisis de causa raiz e implementacion de planes para conservar talento.",
    fase: "V",
    etiqueta: "Retencion",
  },
  {
    numero: "12",
    titulo: "Capacitacion en Procesos de Terminaciones Laborales",
    descripcion:
      "Protocolo de desvinculacion formal, legal y con sentido humano.",
    fase: "V",
    etiqueta: "Cierre Legal",
  },
];

export default function ProcesoTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(false);
  const filledRef = useRef(false);

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
        start: "top 15%",
        onEnter: () => {
          bg.style.transform = "scaleY(1)";
          setFilled(true);
          filledRef.current = true;
        },
        onLeaveBack: () => {
          bg.style.transform = "scaleY(0)";
          setFilled(false);
          filledRef.current = false;
        },
      });
    }, section);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      ref={sectionRef}
      id="proceso"
      className="relative py-24 overflow-hidden"
    >
      {/* Animated dark background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-text origin-center transition-transform duration-300"
        style={{
          transform: "scaleY(0)",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-[2.5rem] font-heading font-bold tracking-[--heading-tracking] leading-tight transition-colors duration-300 ${
              filled ? "text-on-primary" : "text-text"
            }`}
          >
            Diagrama de Flujo Continuo del Servicio
          </h2>
          <p
            className={`text-lg leading-relaxed mt-4 max-w-[55ch] mx-auto transition-colors duration-300 ${
              filled ? "text-[#94A3BB]" : "text-text-muted"
            }`}
          >
            Recorrido secuencial completo de 12 pasos desde la cultura inicial
            hasta la terminacion laboral.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className={`absolute left-[29px] md:left-[35px] top-0 bottom-0 w-[2px] transition-colors duration-300 ${
              filled ? "bg-primary/40" : "bg-border"
            }`}
          />

          <div className="flex flex-col gap-6">
            {pasos.map((paso) => (
              <div key={paso.numero} className="relative flex gap-5 md:gap-6 items-start">
                {/* Bullet node */}
                <div
                  className={`relative z-10 w-[58px] h-[58px] md:w-[70px] md:h-[70px] rounded-[12px] flex flex-col items-center justify-center shrink-0 border-2 transition-all duration-300 ${
                    filled
                      ? "border-primary/60 bg-text"
                      : "border-border bg-bg"
                  }`}
                >
                  <span
                    className={`text-sm md:text-base font-heading font-extrabold leading-none transition-colors duration-300 ${
                      filled ? "text-primary" : "text-primary"
                    }`}
                  >
                    {paso.numero}
                  </span>
                  <span
                    className={`text-[9px] uppercase font-body font-bold mt-0.5 transition-colors duration-300 ${
                      filled ? "text-[#94A3BB]" : "text-text-muted"
                    }`}
                  >
                    Fase {paso.fase}
                  </span>
                </div>

                {/* Card */}
                <div
                  className={`flex-1 rounded-[12px] p-5 md:p-6 border transition-all duration-300 ${
                    filled
                      ? "border-on-primary/10 backdrop-blur-[16px]"
                      : "border-border bg-surface"
                  }`}
                  style={
                    filled
                      ? {
                          background:
                            "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                          boxShadow:
                            "inset 0 1px 0 rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.2)",
                        }
                      : {}
                  }
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3
                      className={`text-base md:text-lg font-heading font-bold tracking-[--heading-tracking] transition-colors duration-300 ${
                        filled ? "text-on-primary" : "text-text"
                      }`}
                    >
                      {paso.titulo}
                    </h3>
                    <span
                      className={`text-[10px] font-body font-bold uppercase px-2.5 py-0.5 rounded-full transition-colors duration-300 ${
                        filled
                          ? "bg-primary/15 text-primary"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {paso.etiqueta}
                    </span>
                  </div>
                  <p
                    className={`text-sm md:text-base leading-relaxed transition-colors duration-300 ${
                      filled ? "text-[#94A3BB]" : "text-text-muted"
                    }`}
                  >
                    {paso.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
