const servicios = [
  {
    titulo: "Psicometrias",
    descripcion:
      "Pruebas estandarizadas que miden competencias, habilidades cognitivas y rasgos de personalidad para predecir el desempeno en el puesto.",
  },
  {
    titulo: "Pruebas de confianza",
    descripcion:
      "Evaluacion de honestidad e integridad para puestos con acceso a recursos economicos o informacion sensible. Incluye servicio de poligrafo.",
  },
  {
    titulo: "Investigacion laboral y domiciliaria",
    descripcion:
      "Validacion de historial laboral, referencias y entorno del candidato para garantizar la veracidad de su perfil.",
  },
  {
    titulo: "Asesoria legal laboral",
    descripcion:
      "Acompanamiento en temas de contratacion, cumplimiento normativo y relaciones laborales para proteger a tu empresa.",
  },
  {
    titulo: "NOM-035",
    descripcion:
      "Diagnostico y cumplimiento de la norma de factores de riesgo psicosocial. Evita sanciones y mejora el bienestar de tu equipo.",
  },
  {
    titulo: "Teambuilding y coaching",
    descripcion:
      "Integracion de personal de reciente ingreso y fortalecimiento de cohesion entre colaboradores. Acompanamiento post-contratacion.",
  },
];

export default function ServiciosComplementarios() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-[55ch] mb-14">
          <h2 className="text-3xl font-heading font-bold tracking-[--heading-tracking] text-text">
            Servicios complementarios
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mt-4">
            Mas alla del reclutamiento, ofrecemos herramientas de validacion y
            acompanamiento que refuerzan cada contratacion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {servicios.map((s) => (
            <div key={s.titulo} className="flex flex-col">
              <div className="w-10 h-[2px] bg-primary mb-5" />
              <h3 className="text-lg font-heading font-bold tracking-[--heading-tracking] text-text">
                {s.titulo}
              </h3>
              <p className="text-text-muted text-base leading-relaxed mt-2">
                {s.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
