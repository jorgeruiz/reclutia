import Image from "next/image";

interface Servicio {
  titulo: string;
  descripcion: string;
}

const servicios: Servicio[] = [
  {
    titulo: "Reclutamiento operativo",
    descripcion:
      "Personal de linea, produccion y campo para industrias como manufactura, construccion y salud. Candidatos evaluados y alineados a tu operacion.",
  },
  {
    titulo: "Reclutamiento administrativo",
    descripcion:
      "Perfiles de oficina, contabilidad, recursos humanos y coordinacion. Seleccionamos talento que se integre a la dinamica de tu empresa.",
  },
  {
    titulo: "Reclutamiento bilingue",
    descripcion:
      "Candidatos con dominio de espanol e ingles para empresas con operaciones en Mexico y Estados Unidos. Cobertura internacional.",
  },
  {
    titulo: "Outsourcing de reclutamiento",
    descripcion:
      "Externalizamos tu proceso completo de seleccion. Ideal para pymes que no tienen area de recursos humanos interna.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 bg-surface">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 items-start">
          {/* Left: heading + image */}
          <div>
            <span className="inline-block text-xs font-body font-medium uppercase tracking-[0.1em] text-primary mb-4">
              Servicios de reclutamiento
            </span>
            <h2 className="text-3xl font-heading font-bold tracking-[--heading-tracking] text-text">
              Seleccion de personal para cada nivel de tu empresa
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mt-4 max-w-[50ch]">
              Cubrimos vacantes operativas, administrativas y bilingues con un
              proceso que prioriza la alineacion cultural sobre el curriculum.
            </p>
            <div className="relative w-full aspect-[4/3] rounded-[8px] overflow-hidden mt-10 shadow-[0_4px_40px_rgba(10,30,63,0.06)]">
              <Image
                src="/images/servicios-reclutamiento.webp"
                alt="Equipo diverso colaborando en planta industrial"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 55vw"
              />
            </div>
          </div>

          {/* Right: service list */}
          <div className="flex flex-col gap-8 md:pt-16">
            {servicios.map((s, i) => (
              <div
                key={s.titulo}
                className={`pb-8 ${
                  i < servicios.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <h3 className="text-xl font-heading font-bold tracking-[--heading-tracking] text-text">
                  {s.titulo}
                </h3>
                <p className="text-text-muted text-base leading-relaxed mt-2">
                  {s.descripcion}
                </p>
              </div>
            ))}
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-primary font-body font-medium text-base transition-opacity duration-200 hover:opacity-80 w-fit"
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
          </div>
        </div>
      </div>
    </section>
  );
}
