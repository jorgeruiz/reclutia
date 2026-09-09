import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center bg-bg pt-20">
      <div className="max-w-[1280px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_0.85fr] gap-10 md:gap-16 items-center">
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-[3.5rem] font-heading font-extrabold tracking-[--heading-tracking] text-text leading-[1.1]">
              Reclutamiento y seleccion de personal para empresas de alto
              desempeno
            </h1>
            <p className="text-text-muted text-lg leading-relaxed mt-6 max-w-[50ch]">
              Somos tu socio estrategico en talento. Encontramos al candidato
              que no solo cumple con el perfil tecnico, sino que se alinea con
              la cultura y valores de tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-on-primary font-body font-medium text-base rounded-full transition-transform duration-200 active:scale-[0.98] hover:brightness-110"
                style={{
                  transitionTimingFunction: "var(--easing)",
                }}
              >
                Pide informacion
              </a>
              <a
                href="#proceso"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-border text-text font-body font-medium text-base rounded-full transition-colors duration-200 hover:bg-surface"
                style={{
                  transitionTimingFunction: "var(--easing)",
                }}
              >
                Conoce nuestro proceso
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-[3/2] rounded-[8px] overflow-hidden shadow-[0_4px_40px_rgba(10,30,63,0.08)]">
            <Image
              src="/images/hero-home.webp"
              alt="Consultora de reclutamiento en reunion con cliente"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Executive summary for AEO - visible text near hero */}
      <div className="absolute bottom-0 left-0 right-0 bg-surface border-t border-border">
        <div className="max-w-[1280px] mx-auto px-6 py-5">
          <p className="text-text-muted text-sm leading-relaxed max-w-[85ch]">
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
