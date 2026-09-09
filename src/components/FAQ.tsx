const faqs = [
  {
    pregunta: "Como funciona el proceso de reclutamiento con Reclutia?",
    respuesta:
      "Comenzamos con una reunion de diagnostico para entender las necesidades de tu empresa, la cultura organizacional y el perfil ideal del candidato. A partir de ahi, disenamos una estrategia de busqueda personalizada, realizamos el filtrado y presentamos unicamente a los candidatos que se alinean con los valores y objetivos de tu negocio.",
  },
  {
    pregunta: "En que industrias tiene experiencia Reclutia?",
    respuesta:
      "Trabajamos con empresas en sectores como manufactura, salud, construccion, agencias de publicidad y marketing, y gobierno. Nuestra metodologia se adapta a las particularidades de cada industria y al perfil cultural de cada organizacion.",
  },
  {
    pregunta: "Cuanto tiempo tarda el proceso de reclutamiento?",
    respuesta:
      "El tiempo varia segun el nivel del puesto y la complejidad del perfil. Para posiciones operativas o de nivel medio, el proceso suele completarse en dias o semanas. Para perfiles especializados o directivos, puede tomar un poco mas. Te damos tiempos estimados desde la primera reunion.",
  },
  {
    pregunta: "Que diferencia a Reclutia de otras empresas de reclutamiento?",
    respuesta:
      "Nuestra diferenciacion esta en el enfoque en cultura organizacional. No solo buscamos candidatos con el perfil tecnico correcto, sino personas que se alineen con las creencias, valores y forma de trabajar de tu empresa. Esto reduce la rotacion y mejora el desempeno a largo plazo.",
  },
  {
    pregunta: "Reclutia trabaja con empresas fuera de Mexico?",
    respuesta:
      "Si, tenemos cobertura internacional y trabajamos con empresas en distintos paises. Ofrecemos reclutamiento bilingue para empresas en Estados Unidos que necesitan candidatos hispanohablantes o perfiles bilingues espanol-ingles.",
  },
  {
    pregunta: "Que incluye el proceso de seleccion ademas de la entrevista?",
    respuesta:
      "El proceso incluye psicometrias especificas para cada vacante, validacion del historial laboral, investigaciones laborales y domiciliarias, y pruebas de confianza cuando el puesto lo requiere. Estas capas de evaluacion reducen el riesgo de una mala contratacion.",
  },
  {
    pregunta: "Como puedo empezar a trabajar con Reclutia?",
    respuesta:
      "Escribenos a hugo.cortes@reclutia.com o llena el formulario de contacto en el sitio. Un especialista se pondra en contacto contigo para entender tu necesidad y explicarte como podemos ayudarte a encontrar el talento ideal. No se requiere contrato previo para la primera consulta.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-bg">
      <div className="max-w-[800px] mx-auto px-6">
        <h2 className="text-3xl font-heading font-bold tracking-[--heading-tracking] text-text mb-14">
          Preguntas frecuentes
        </h2>

        <div className="flex flex-col gap-10">
          {faqs.map((faq) => (
            <div key={faq.pregunta}>
              <h3 className="text-lg font-heading font-bold tracking-[--heading-tracking] text-text">
                {faq.pregunta}
              </h3>
              <p className="text-text-muted text-base leading-relaxed mt-3">
                {faq.respuesta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
