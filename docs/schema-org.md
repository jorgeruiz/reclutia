# Reclutia — Schema.org: Structured Data

> **Generado el 4 de septiembre de 2026 por Constructor / Click Society**
> **Cliente:** Reclutia

---

<!-- El contenido generado por IA se agrega a continuación -->

# Reclutia — Schema.org: Structured Data

## Schema del tipo de negocio (ProfessionalService)

El Brief 2 define `ProfessionalService` como business_type. Dado que Reclutia es una empresa de reclutamiento y selección de personal, se usa `ProfessionalService` con campos de servicios de RH. No hay ubicación física única confirmada (scope: international / mixed), por lo que `address` se marca como `[COMPLETAR]`.

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Reclutia",
  "alternateName": "Reclutia Recursos Humanos",
  "description": "Agencia especializada en reclutamiento y selección de personal, con enfoque en cultura organizacional y alineación del talento a los valores y creencias de cada empresa.",
  "url": "https://www.reclutia.com",
  "email": "hugo.cortes@reclutia.com",
  "telephone": "[COMPLETAR]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[COMPLETAR si aplica]",
    "addressLocality": "[COMPLETAR: ciudad principal]",
    "addressRegion": "[COMPLETAR: estado o región]",
    "addressCountry": "MX"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "Mexico"
    },
    {
      "@type": "Country",
      "name": "[COMPLETAR: otros países si aplica]"
    }
  ],
  "knowsAbout": [
    "Reclutamiento y selección de personal",
    "Cultura organizacional",
    "Recursos humanos",
    "Headhunting",
    "Alineación de talento"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Reclutamiento",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Reclutamiento y selección de personal"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Consultoría en cultura organizacional"
        }
      }
    ]
  },
  "sameAs": [
    "[COMPLETAR: LinkedIn]",
    "[COMPLETAR: otras redes sociales si aplican]"
  ]
}
```

> **Nota para Code:** Este schema complementa (no duplica) el `Organization` base definido en `seo-tecnico.md`. Si `seo-tecnico.md` ya genera un `Organization`, este schema `ProfessionalService` debe combinarse en un solo bloque usando `@graph`, o reemplazar al `Organization` ya que `ProfessionalService` es más específico.

---

## FAQPage Schema

El Brief 2 no incluye FAQs explícitas ni se proporcionó Keyword Research con PAA. Se generan 7 preguntas frecuentes basadas en el tipo de negocio (reclutamiento B2B), el perfil del cliente (dueños/CEOs de PYMES) y el pain point central (falta de personal adecuado).

**Ubicación:** Homepage (`app/page.tsx`), en la sección de FAQs visible en el sitio.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo funciona el proceso de reclutamiento con Reclutia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Comenzamos con una reunión de diagnóstico para entender las necesidades de tu empresa, la cultura organizacional y el perfil ideal del candidato. A partir de ahí, diseñamos una estrategia de búsqueda personalizada, realizamos el filtrado y presentamos únicamente a los candidatos que se alinean con los valores y objetivos de tu negocio."
      }
    },
    {
      "@type": "Question",
      "name": "¿En qué industrias tiene experiencia Reclutia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trabajamos con empresas en sectores como manufactura, salud, construcción, agencias de publicidad y marketing, y gobierno. Nuestra metodología se adapta a las particularidades de cada industria y al perfil cultural de cada organización."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo tarda el proceso de reclutamiento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El tiempo varía según el nivel del puesto y la complejidad del perfil. Para posiciones operativas o de nivel medio, el proceso suele completarse en días o semanas. Para perfiles especializados o directivos, puede tomar un poco más. Te damos tiempos estimados desde la primera reunión."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué diferencia a Reclutia de otras empresas de reclutamiento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nuestra diferenciación está en el enfoque en cultura organizacional. No solo buscamos candidatos con el perfil técnico correcto, sino personas que se alineen con las creencias, valores y forma de trabajar de tu empresa. Esto reduce la rotación y mejora el desempeño a largo plazo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Reclutia trabaja con empresas fuera de México?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, tenemos cobertura internacional y trabajamos con empresas en distintos países. Contáctanos para evaluar cómo podemos apoyar tus necesidades de talento sin importar tu ubicación."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué tipo de empresas pueden contratar los servicios de Reclutia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trabajamos principalmente con pequeñas y medianas empresas cuyos dueños o directores generales buscan contratar al personal correcto sin perder tiempo en procesos de selección internos. También atendemos empresas medianas y grandes que requieren apoyo externo especializado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo puedo empezar a trabajar con Reclutia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es muy sencillo: escríbenos a hugo.cortes@reclutia.com o llena el formulario de contacto en el sitio. Un especialista se pondrá en contacto contigo para entender tu necesidad y explicarte cómo podemos ayudarte a encontrar el talento ideal."
      }
    }
  ]
}
```

> **Nota para Code:** El texto de cada `acceptedAnswer` debe coincidir exactamente (o ser un subconjunto fiel) del texto visible en la sección de FAQs del HTML renderizado. Si el copywriter ajusta las respuestas en el sitio, actualizar este schema en consecuencia.

---

## Service Schemas

Reclutia tiene un servicio central (reclutamiento y selección) con especializaciones por enfoque. Se generan 3 schemas: el servicio principal y dos especializaciones que destacan el diferenciador de cultura organizacional.

**Ubicación:** Los tres schemas pueden incluirse en la homepage dado que el sitio es de una sola página (`single_page`). Colocarlos todos en `app/page.tsx` junto con el FAQPage.

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Reclutamiento y Selección de Personal",
  "description": "Servicio integral de reclutamiento y selección de personal para empresas, enfocado en encontrar candidatos que no solo cumplan con el perfil técnico sino que se alineen con la cultura organizacional de cada empresa.",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Reclutia",
    "url": "https://www.reclutia.com"
  },
  "areaServed": "Internacional",
  "serviceType": "Reclutamiento y selección de personal",
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Pequeñas y medianas empresas"
  }
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Reclutamiento con Enfoque en Cultura Organizacional",
  "description": "Proceso de selección que evalúa la alineación del candidato con los valores, creencias y forma de trabajo de la empresa contratante, reduciendo la rotación de personal y mejorando el desempeño del equipo.",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Reclutia",
    "url": "https://www.reclutia.com"
  },
  "areaServed": "Internacional",
  "serviceType": "Consultoría en cultura organizacional aplicada al reclutamiento"
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Reclutamiento para Industrias Especializadas",
  "description": "Servicio de reclutamiento especializado para sectores de manufactura, salud, construcción, agencias y gobierno, con conocimiento de los perfiles técnicos y culturales específicos de cada industria.",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Reclutia",
    "url": "https://www.reclutia.com"
  },
  "areaServed": "Internacional",
  "serviceType": "Reclutamiento sectorial especializado",
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Manufactura, salud, construcción, agencias, gobierno"
  }
}
```

---

## BreadcrumbList

No aplica: sitio de profundidad única (`single_page`). Todas las secciones están en la homepage mediante scroll o anclas internas (`#servicios`, `#faq`, `#contacto`). No hay páginas internas con jerarquía de URL.

---

## Schemas adicionales

**WebSite schema con SearchAction** — Útil para habilitar el sitelinks search box en Google y confirmar el nombre canónico del sitio:

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Reclutia",
  "url": "https://www.reclutia.com",
  "inLanguage": ["es", "en"],
  "description": "Tu socio de negocio en recursos humanos. Reclutamiento y selección de personal con enfoque en cultura organizacional."
}
```

**ContactPoint schema** — Refuerza el método de contacto principal (relevante dado que el único CTA es contactar):

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Reclutia",
  "url": "https://www.reclutia.com",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "hugo.cortes@reclutia.com",
    "contactType": "sales",
    "availableLanguage": ["Spanish", "English"]
  }
}
```

> **Nota:** El `ContactPoint` se puede integrar directamente dentro del schema `ProfessionalService` de la sección 1 en lugar de ser un bloque separado. Se presenta por separado aquí por claridad; Code debe decidir si fusionarlos en un `@graph`.

---

## Implementación en Next.js

### Componente reutilizable

Crear en `components/JsonLd.tsx`:

```tsx
interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[]
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
```

### Archivo de constantes de schemas

Crear `lib/schemas.ts` con todos los schemas como constantes exportadas:

```ts
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Reclutia",
  // ... schema completo de la sección 1
}

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  // ... schema completo
}

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  // ... schema completo de la sección 2
}

export const serviceSchemas = [
  { /* Reclutamiento y Selección */ },
  { /* Cultura Organizacional */ },
  { /* Industrias Especializadas */ }
]
```

### Mapa de implementación por archivo

| Schema | Archivo Next.js | Notas |
|--------|-----------------|-------|
| `ProfessionalService` + `ContactPoint` | `app/layout.tsx` | Global, todas las páginas |
| `WebSite` | `app/layout.tsx` | Global, todas las páginas |
| `FAQPage` | `app/page.tsx` | Solo si la sección FAQ es visible en el HTML |
| `Service` (×3) | `app/page.tsx` | Solo si las secciones de servicio son visibles en el HTML |

### Implementación en `app/layout.tsx`

```tsx
import { JsonLd } from '@/components/JsonLd'
import { professionalServiceSchema, webSiteSchema } from '@/lib/schemas'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <JsonLd data={professionalServiceSchema} />
        <JsonLd data={webSiteSchema} />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Implementación en `app/page.tsx`

```tsx
import { JsonLd } from '@/components/JsonLd'
import { faqPageSchema, serviceSchemas } from '@/lib/schemas'

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPageSchema} />
      {serviceSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      {/* Contenido de la página */}
    </>
  )
}
```

### Consideración bilingüe

El sitio es bilingüe (es/en). Si Next.js implementa rutas por locale (`/es/` y `/en/`), los schemas deben adaptarse:

- El `FAQPage` schema debe existir en su versión en español e inglés, con las preguntas y respuestas en el idioma correspondiente.
- Crear `lib/schemas.es.ts` y `lib/schemas.en.ts`, o usar una función que reciba el locale como parámetro.
- El campo `inLanguage` del `WebSite` schema ya declara ambos idiomas.

### Validación antes del deploy

Validar en: **https://search.google.com/test/rich-results**

Schemas con rich results elegibles para Reclutia:

| Schema | Rich result posible |
|--------|---------------------|
| `FAQPage` | Preguntas expandibles en SERP de Google |
| `ProfessionalService` | Panel de conocimiento + rich snippet local |
| `WebSite` | Sitelinks search box (baja prioridad para sitio nuevo) |

Prioridad de validación: `FAQPage` primero (mayor impacto visual en SERP), luego `ProfessionalService`.