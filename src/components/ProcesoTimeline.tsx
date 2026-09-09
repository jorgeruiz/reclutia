"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface PasoData {
  numero: string;
  titulo: string;
  descripcion: string;
  imagen: string;
}

const pasos: PasoData[] = [
  {
    numero: "01",
    titulo: "Diagnostico",
    descripcion:
      "Nos reunimos contigo para entender las necesidades de tu empresa, la cultura organizacional y el perfil ideal del candidato.",
    imagen: "/images/proceso-diagnostico.webp",
  },
  {
    numero: "02",
    titulo: "Busqueda",
    descripcion:
      "Activamos nuestra red de talento y canales especializados para identificar candidatos que cumplan con el perfil tecnico y cultural.",
    imagen: "/images/proceso-busqueda.webp",
  },
  {
    numero: "03",
    titulo: "Evaluacion",
    descripcion:
      "Aplicamos psicometrias, validacion de historial laboral e investigaciones para garantizar la idoneidad de cada candidato.",
    imagen: "/images/proceso-evaluacion.webp",
  },
  {
    numero: "04",
    titulo: "Presentacion",
    descripcion:
      "Te presentamos unicamente a los candidatos que se alinean con los valores y objetivos de tu negocio, listos para integrarse.",
    imagen: "/images/proceso-presentacion.webp",
  },
];

function PasoCard({
  paso,
  index,
}: {
  paso: PasoData;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`
        relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-12 items-center
        transition-all duration-300
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
      style={{
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${index * 60}ms`,
      }}
    >
      {/* Left content (or empty on even steps at desktop) */}
      <div
        className={`${
          isEven ? "md:order-1" : "md:order-3"
        } order-2`}
      >
        <div
          className={`${
            isEven ? "md:text-right md:ml-auto" : "md:text-left md:mr-auto"
          } max-w-[380px]`}
        >
          <span className="font-mono text-primary text-sm font-medium">
            {paso.numero}
          </span>
          <h3 className="text-2xl font-heading font-bold tracking-[--heading-tracking] text-on-primary mt-1">
            {paso.titulo}
          </h3>
          <p className="text-[#94A3BB] text-base leading-relaxed mt-3">
            {paso.descripcion}
          </p>
        </div>
      </div>

      {/* Center node (hidden on mobile, timeline runs through here) */}
      <div className="hidden md:flex md:order-2 items-center justify-center">
        <div
          className={`
            w-4 h-4 rounded-full border-2 border-primary
            transition-colors duration-300
            ${visible ? "bg-primary" : "bg-text"}
          `}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        />
      </div>

      {/* Image */}
      <div
        className={`${
          isEven ? "md:order-3" : "md:order-1"
        } order-1`}
      >
        <div
          className={`
            relative w-full max-w-[280px] aspect-square rounded-[8px] overflow-hidden
            shadow-[0_4px_40px_rgba(10,30,63,0.06)]
            ${isEven ? "md:mr-auto" : "md:ml-auto"}
            mx-auto md:mx-0
          `}
        >
          <Image
            src={paso.imagen}
            alt={paso.titulo}
            fill
            className="object-cover"
            sizes="280px"
          />
        </div>
      </div>
    </div>
  );
}

export default function ProcesoTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathHeight, setPathHeight] = useState(0);

  // Measure container height dynamically
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const measure = () => setPathHeight(container.offsetHeight);
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  // GSAP scroll-driven path draw
  useEffect(() => {
    const container = containerRef.current;
    const path = pathRef.current;
    if (!container || !path || pathHeight === 0) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      path.style.strokeDashoffset = "0";
      return;
    }

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const ctx = gsap.context(() => {
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, [pathHeight]);

  return (
    <section className="py-20 bg-text">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold tracking-[--heading-tracking] text-on-primary">
            Nuestro proceso de seleccion
          </h2>
          <p className="text-[#94A3BB] text-lg mt-4 max-w-[55ch] mx-auto leading-relaxed">
            Un metodo estructurado que garantiza candidatos alineados a tu
            empresa, paso a paso.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {/* SVG vertical line (desktop only) */}
          {pathHeight > 0 && (
            <svg
              className="hidden md:block absolute left-1/2 top-0 w-[2px] -translate-x-1/2 overflow-visible"
              height={pathHeight}
              viewBox={`0 0 2 ${pathHeight}`}
              preserveAspectRatio="none"
            >
              <path
                ref={pathRef}
                d={`M1,0 L1,${pathHeight}`}
                stroke="var(--color-primary)"
                strokeWidth="2"
                fill="none"
                style={{ willChange: "stroke-dashoffset" }}
              />
            </svg>
          )}

          {/* Steps */}
          <div className="flex flex-col gap-16 md:gap-24">
            {pasos.map((paso, i) => (
              <PasoCard key={paso.numero} paso={paso} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
