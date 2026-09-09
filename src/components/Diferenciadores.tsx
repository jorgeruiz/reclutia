import Image from "next/image";

const diferenciadores = [
  {
    numero: "01",
    titulo: "Enfoque en cultura organizacional",
    descripcion:
      "No solo buscamos candidatos con el perfil tecnico correcto. Identificamos personas que comparten los valores y la forma de trabajar de tu empresa. Esto reduce la rotacion y mejora el desempeno a largo plazo.",
  },
  {
    numero: "02",
    titulo: "Proceso integral de validacion",
    descripcion:
      "Psicometrias especificas por vacante, investigacion laboral y domiciliaria, pruebas de confianza y validacion de historial. Cada candidato pasa por multiples filtros antes de llegar a ti.",
  },
  {
    numero: "03",
    titulo: "Trato personal y cercano",
    descripcion:
      "Trabajas directamente con un especialista que entiende tu industria. No somos un call center ni una bolsa de trabajo. Somos tu socio en la busqueda de talento.",
  },
];

export default function Diferenciadores() {
  return (
    <section id="diferenciadores" className="py-20 bg-bg">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-3xl font-heading font-bold tracking-[--heading-tracking] text-text mb-16">
          Por que Reclutia
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[0.6fr_1fr] gap-10 md:gap-20 items-start">
          {/* Left: image */}
          <div className="relative w-full aspect-[3/2] rounded-[8px] overflow-hidden shadow-[0_4px_40px_rgba(10,30,63,0.06)]">
            <Image
              src="/images/diferenciador-cultura.webp"
              alt="Equipo cohesivo en sesion de trabajo colaborativo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          {/* Right: numbered differentiators */}
          <div className="flex flex-col gap-12">
            {diferenciadores.map((d) => (
              <div key={d.numero} className="flex gap-6 items-start">
                <span className="text-[4rem] md:text-[5rem] font-heading font-extrabold leading-none text-primary/10 select-none shrink-0 -mt-2">
                  {d.numero}
                </span>
                <div>
                  <h3 className="text-xl font-heading font-bold tracking-[--heading-tracking] text-text">
                    {d.titulo}
                  </h3>
                  <p className="text-text-muted text-base leading-relaxed mt-2 max-w-[50ch]">
                    {d.descripcion}
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
