export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Reclutia",
  alternateName: "Reclutia Recursos Humanos",
  description:
    "Agencia especializada en reclutamiento y seleccion de personal, con enfoque en cultura organizacional y alineacion del talento a los valores y creencias de cada empresa.",
  url: "https://www.reclutia.com",
  email: "hugo.cortes@reclutia.com",
  areaServed: [
    { "@type": "Country", name: "Mexico" },
    { "@type": "Country", name: "United States" },
  ],
  knowsAbout: [
    "Reclutamiento y seleccion de personal",
    "Cultura organizacional",
    "Recursos humanos",
    "Headhunting",
    "Alineacion de talento",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hugo.cortes@reclutia.com",
    contactType: "sales",
    availableLanguage: ["Spanish", "English"],
  },
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Reclutia",
  url: "https://www.reclutia.com",
  inLanguage: ["es", "en"],
  description:
    "Tu socio de negocio en recursos humanos. Reclutamiento y seleccion de personal con enfoque en cultura organizacional.",
};

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como funciona el proceso de reclutamiento con Reclutia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Comenzamos con una reunion de diagnostico para entender las necesidades de tu empresa, la cultura organizacional y el perfil ideal del candidato. A partir de ahi, disenamos una estrategia de busqueda personalizada, realizamos el filtrado y presentamos unicamente a los candidatos que se alinean con los valores y objetivos de tu negocio.",
      },
    },
    {
      "@type": "Question",
      name: "En que industrias tiene experiencia Reclutia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trabajamos con empresas en sectores como manufactura, salud, construccion, agencias de publicidad y marketing, y gobierno. Nuestra metodologia se adapta a las particularidades de cada industria y al perfil cultural de cada organizacion.",
      },
    },
    {
      "@type": "Question",
      name: "Cuanto tiempo tarda el proceso de reclutamiento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El tiempo varia segun el nivel del puesto y la complejidad del perfil. Para posiciones operativas o de nivel medio, el proceso suele completarse en dias o semanas. Para perfiles especializados o directivos, puede tomar un poco mas. Te damos tiempos estimados desde la primera reunion.",
      },
    },
    {
      "@type": "Question",
      name: "Que diferencia a Reclutia de otras empresas de reclutamiento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nuestra diferenciacion esta en el enfoque en cultura organizacional. No solo buscamos candidatos con el perfil tecnico correcto, sino personas que se alineen con las creencias, valores y forma de trabajar de tu empresa. Esto reduce la rotacion y mejora el desempeno a largo plazo.",
      },
    },
    {
      "@type": "Question",
      name: "Reclutia trabaja con empresas fuera de Mexico?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si, tenemos cobertura internacional y trabajamos con empresas en distintos paises. Ofrecemos reclutamiento bilingue para empresas en Estados Unidos que necesitan candidatos hispanohablantes o perfiles bilingues espanol-ingles.",
      },
    },
    {
      "@type": "Question",
      name: "Que incluye el proceso de seleccion ademas de la entrevista?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El proceso incluye psicometrias especificas para cada vacante, validacion del historial laboral, investigaciones laborales y domiciliarias, y pruebas de confianza cuando el puesto lo requiere. Estas capas de evaluacion reducen el riesgo de una mala contratacion.",
      },
    },
    {
      "@type": "Question",
      name: "Como puedo empezar a trabajar con Reclutia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Escribenos a hugo.cortes@reclutia.com o llena el formulario de contacto en el sitio. Un especialista se pondra en contacto contigo para entender tu necesidad y explicarte como podemos ayudarte a encontrar el talento ideal. No se requiere contrato previo para la primera consulta.",
      },
    },
  ],
};

export const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Reclutamiento y Seleccion de Personal",
    description:
      "Servicio integral de reclutamiento y seleccion de personal para empresas, enfocado en encontrar candidatos que no solo cumplan con el perfil tecnico sino que se alineen con la cultura organizacional de cada empresa.",
    provider: {
      "@type": "ProfessionalService",
      name: "Reclutia",
      url: "https://www.reclutia.com",
    },
    areaServed: "Internacional",
    serviceType: "Reclutamiento y seleccion de personal",
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Pequenas y medianas empresas",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Headhunting Ejecutivo",
    description:
      "Busqueda activa de candidatos para posiciones gerenciales y directivas, dirigida a profesionales que no estan buscando empleo activamente. Cobertura en Mexico y Estados Unidos.",
    provider: {
      "@type": "ProfessionalService",
      name: "Reclutia",
      url: "https://www.reclutia.com",
    },
    areaServed: "Internacional",
    serviceType: "Headhunting ejecutivo",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Reclutamiento para Industrias Especializadas",
    description:
      "Servicio de reclutamiento especializado para sectores de manufactura, salud, construccion, agencias y gobierno, con conocimiento de los perfiles tecnicos y culturales especificos de cada industria.",
    provider: {
      "@type": "ProfessionalService",
      name: "Reclutia",
      url: "https://www.reclutia.com",
    },
    areaServed: "Internacional",
    serviceType: "Reclutamiento sectorial especializado",
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Manufactura, salud, construccion, agencias, gobierno",
    },
  },
];
