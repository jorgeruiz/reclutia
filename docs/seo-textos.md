# Textos SEO — Reclutia

**Generado por Constructor el 4 de septiembre de 2026**
**Cliente:** Reclutia

Este documento contiene los textos del sitio optimizados para SEO: meta titles, meta descriptions, headings H1/H2/H3, copy por sección y página. Usa estos textos directamente en el código — no escribas copy de relleno ni generes texto placeholder.

---

# Reclutia — SEO: Configuración Técnica Global

## Resumen para Code

Reclutia es una agencia de recursos humanos B2B (reclutamiento, selección, headhunting y servicios complementarios de talento) con operación mixta física/digital y alcance internacional, enfocada principalmente en México y EUA. El sitio es **bilingüe español/inglés** — esta es la alerta técnica crítica: cada sección del single-page site debe tener su contraparte en inglés con hreflang correctamente implementado desde el deploy inicial. Este documento define los estándares técnicos SEO del sitio. Aplícalos globalmente. Los meta tags, schema por página y copy se generarán cuando se cree cada página en Brief 4.

---

## Schema Organization

Se usa `Organization` (no `LocalBusiness`) porque Reclutia opera con alcance internacional y modelo mixto sin una sede física única como punto de atención al cliente.

Colocar en el `<head>` del layout global (aplica a todo el sitio):

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Reclutia",
  "url": "https://www.reclutia.com",
  "logo": "https://www.reclutia.com/logo.png",
  "description": "Agencia de recursos humanos B2B especializada en reclutamiento y selección de personal, headhunting ejecutivo y servicios complementarios de talento para empresas en México y EUA.",
  "email": "hugo.cortes@reclutia.com",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "hugo.cortes@reclutia.com",
    "contactType": "customer service",
    "availableLanguage": ["Spanish", "English"]
  },
  "areaServed": ["MX", "US"],
  "sameAs": [
    "[COMPLETAR: URL LinkedIn]",
    "[COMPLETAR: URL Instagram u otra red activa]"
  ]
}
```

**Notas:**
- `telephone` marcado como `[COMPLETAR]` — no está en el brief. Agregar cuando el cliente lo proporcione.
- `address` omitido intencionalmente: el negocio tiene ubicación mixta sin sede única declarada. Si se define una dirección principal, agregar `PostalAddress` en ese momento.
- `sameAs` requiere URLs reales de redes sociales; el cliente debe confirmarlas.

---

## Configuración técnica global

### Idioma y hreflang

El sitio es bilingüe (`bilingual_es_en`). Se requiere hreflang en todas las páginas/secciones desde producción.

**Estructura recomendada: subdirectorio `/en/`** — preferida sobre subdominio porque consolida la autoridad de dominio en un solo origen, especialmente importante para un dominio relativamente nuevo (3–10 años de operación, alcance internacional).

```html
<!-- Implementar en el <head> de cada versión de página -->

<!-- Versión en español (default) -->
<link rel="alternate" hreflang="es" href="https://www.reclutia.com/" />
<link rel="alternate" hreflang="en" href="https://www.reclutia.com/en/" />
<link rel="alternate" hreflang="x-default" href="https://www.reclutia.com/" />
```

**En Next.js (App Router):**

```ts
// En metadata de cada página — ejemplo para Home ES
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.reclutia.com/',
    languages: {
      'es': 'https://www.reclutia.com/',
      'en': 'https://www.reclutia.com/en/',
    },
  },
}

// En metadata de cada página — ejemplo para Home EN
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.reclutia.com/en/',
    languages: {
      'es': 'https://www.reclutia.com/',
      'en': 'https://www.reclutia.com/en/',
    },
  },
}
```

> **Alerta para Code:** El sitio es single-page. Si se implementa como una sola ruta con toggle de idioma en cliente (i18n sin rutas separadas), los hreflang no funcionarán correctamente para Googlebot. Se requieren **rutas separadas** (`/` para ES, `/en/` para EN) aunque el layout visual sea idéntico.

---

### Canonical strategy

Cada versión de idioma autoreferencia su propia URL como canonical. No hay paginación ni filtros previstos en un single-page site.

```
ES: <link rel="canonical" href="https://www.reclutia.com/" />
EN: <link rel="canonical" href="https://www.reclutia.com/en/" />
```

No se prevén URLs con parámetros de consulta en la estructura actual. Si en el futuro se agregan anclas (`#servicios`, `#contacto`), estas no se tratan como URLs canónicas separadas — el canonical siempre apunta a la raíz de su versión de idioma.

---

### Robots

```txt
# robots.txt — www.reclutia.com
User-agent: *
Allow: /

Disallow: /api/
Disallow: /admin/

Sitemap: https://www.reclutia.com/sitemap.xml
```

**Páginas a marcar con `noindex`:**
- Cualquier página de confirmación de formulario (ej. `/gracias`, `/thank-you`) si se crean como rutas separadas.
- Rutas de API internas.

**En Next.js:**
```ts
// Para páginas que no deben indexarse
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}
```

> **Verificar en producción:** Confirmar que el deploy no tenga `noindex` global heredado de ambiente de staging. Error común al lanzar sitios en Vercel/Netlify con preview URLs.

---

### Open Graph — defaults globales

Valores aplicados a cualquier página sin OG tags específicos:

```
og:site_name     → Reclutia
og:type          → website
og:locale        → es_MX  (versión ES)
og:locale        → en_US  (versión EN)
og:image default → https://www.reclutia.com/og-default.jpg  (1200×630)
twitter:card     → summary_large_image
```

**Nota para Code:** Crear imagen OG genérica del sitio (`/public/og-default.jpg`, 1200×630 px) antes del launch. Debe incluir logotipo y tagline. Cada sección o página sobreescribirá estos valores con su propio og:title, og:description e og:image al construirse en Brief 4.

**En Next.js (layout global):**
```ts
export const metadata: Metadata = {
  openGraph: {
    siteName: 'Reclutia',
    type: 'website',
    locale: 'es_MX', // Cambiar a 'en_US' en layout de /en/
    images: [
      {
        url: 'https://www.reclutia.com/og-default.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
}
```

---

## Sitemap.xml — estructura y reglas

Generación automática recomendada vía `app/sitemap.ts` en Next.js. El archivo se construye conforme se agregan páginas; no se lista contenido específico aquí.

**Reglas de prioridad:**

| Tipo de página | `<priority>` | `<changefreq>` |
|---|---|---|
| Home ES (`/`) | 1.0 | weekly |
| Home EN (`/en/`) | 1.0 | weekly |
| Páginas de servicios (futuras) | 0.8 | monthly |
| Páginas institucionales | 0.6 | monthly |
| Páginas legales (Privacy, Terms) | 0.3 | yearly |

**Excluir del sitemap:**
- Rutas `/api/*`
- Páginas con `noindex` (confirmaciones de formulario, `/gracias`, `/thank-you`)
- URLs de preview o staging

**Nota sobre sitio bilingüe:** El sitemap debe incluir ambas versiones de idioma (`/` y `/en/`) como entradas independientes. Opcionalmente usar `<xhtml:link>` para declarar relaciones hreflang dentro del sitemap XML — recomendado para sitios con pocas URLs.

---

## Convenciones de URLs y slugs

**Formato global:**
- Minúsculas, sin acentos, sin caracteres especiales.
- Separador: guion medio (`-`). Nunca guion bajo, nunca camelCase.
- Máximo 3–5 palabras por slug.
- Versión ES en español; versión EN en inglés, bajo `/en/`.

**Tabla de referencia:**

| ✓ Correcto | ✗ Incorrecto |
|---|---|
| `/servicios` | `/Servicios`, `/SERVICIOS` |
| `/en/recruitment-services` | `/en/Recruitment_Services` |
| `/headhunting-ejecutivo` | `/headhuntingEjecutivo` |
| `/en/executive-headhunting` | `/en/executive_headhunting` |

**Slugs del proyecto actual (`page_structure: single_page`):**

Dado que el sitio es single-page, las rutas son mínimas. Las secciones internas se navegan con anclas (`#`), no con rutas independientes.

| Página / Ruta | Slug ES | Slug EN |
|---|---|---|
| Home (raíz) | `/` | `/en/` |
| Página de gracias / confirmación (si se crea) | `/gracias` | `/en/thank-you` |
| Política de privacidad (recomendada) | `/privacidad` | `/en/privacy` |

> Si en el futuro el sitio evoluciona a multi-page, los slugs de servicios deben alinearse con los keywords de mayor volumen. Referencia orientativa basada en keywords del brief: `/reclutamiento-personal-operativo`, `/headhunting-ejecutivo`, `/psicometrias-seleccion-personal`, `/investigacion-laboral-domiciliaria`.

---

## Recomendaciones de implementación

**Meta tags — manejo global:**
- Cada ruta debe exportar su propio `metadata` con `title` y `description`. Nunca heredar los del layout raíz sin sobreescribir.
- Patrón de title: `[Tema] | Reclutia`
- Ejemplo: `Reclutamiento y Selección de Personal | Reclutia`
- Límites: title 55–60 caracteres, description 150–160 caracteres.
- En la versión EN, titles y descriptions en inglés — no traducciones literales, sino adaptaciones con los keywords en inglés correspondientes.

**Indexación — checklist de launch:**
- Confirmar que `robots.txt` en producción tiene `Allow: /` antes de indexar.
- Verificar en Search Console que no hay `noindex` global activo.
- Enviar sitemap manualmente a Google Search Console y Bing Webmaster Tools en el primer día de launch.
- Registrar ambas versiones de dominio en Search Console: `https://www.reclutia.com` y `https://reclutia.com` (sin www); configurar la versión con www como preferida.

**Core Web Vitals:**
- La imagen hero del sitio debe usar `fetchPriority="high"` y `loading="eager"` — es el LCP más probable en un single-page site.
- Todas las demás imágenes: `loading="lazy"` con `width` y `height` explícitos para evitar CLS.
- Scripts de analytics (Google Analytics, Meta Pixel si aplica): cargar con `strategy="afterInteractive"` en Next.js (`next/script`).
- Fuentes web: usar `font-display: swap` para evitar FOIT que impacta CLS y percepción de velocidad.

**Implementación bilingüe — puntos críticos:**
- Usar `next-intl` o `next-i18next` para gestión de traducciones — evitar condicionales manuales en componentes.
- El atributo `lang` del `<html>` debe cambiar dinámicamente: `lang="es"` en `/`, `lang="en"` en `/en/`.
- No usar el mismo componente de metadata sin parametrizar el idioma — los OG tags, titles y descriptions son distintos en cada versión.
- El formulario de contacto puede ser el mismo componente pero los labels, placeholders y mensajes de validación deben estar en el idioma correspondiente.

---

## Estrategia SEO

# Reclutia — SEO: Estrategia

## Resumen estratégico

Reclutia es una consultora de recursos humanos (reclutamiento, selección, headhunting y servicios complementarios de talento) con presencia mixta y alcance internacional, orientada a empresas B2B en manufactura, salud, construcción, agencias y gobierno; el sitio opera en español e inglés. El set de keywords comprende 15 términos seleccionados que cubren tres ejes principales: reclutamiento operativo/administrativo, headhunting ejecutivo y servicios diferenciadores (psicometrías, pruebas de confianza, cultura organizacional). La alerta estratégica más importante: el sitio está diseñado como una sola página (*single_page*), lo que implica que todas las keywords deben convivir en un único documento HTML — esto limita la capacidad de rankear por términos de alta competencia que normalmente requieren páginas dedicadas; Jorge debe evaluar si agregar páginas de servicios individuales en el futuro. El brief no incluye análisis de competidores ni datos de volumen real (no se corrió DataForSEO), por lo que los volúmenes son estimaciones relativas. **Nivel de confianza: Media — keyword set moderado, sin análisis de competencia ni datos reales de volumen.**

---

## Keywords del proyecto por tema

### Tema 1: Reclutamiento y selección — núcleo del negocio

| Keyword | Tipo | Intención | Volumen estimado |
|---|---|---|---|
| reclutamiento y selección de personal | Primaria | Comercial | Alto |
| contratación de personal | Primaria | Comercial | Alto |
| selección de personal para empresas | Primaria | Comercial | Alto |
| servicio de reclutamiento para empresas | Secundaria | Transaccional | Medio |
| outsourcing de reclutamiento para pymes | Long-tail | Transaccional | Bajo |
| reclutamiento personal operativo industria | Long-tail | Transaccional | Bajo |
| reclutamiento personal administrativo para empresas medianas | Long-tail | Transaccional | Bajo |

**Cuándo usar este grupo:** Sección principal de servicios y hero del sitio. Estas keywords activan búsquedas de dueños y directores que ya saben que necesitan cubrir vacantes y buscan un proveedor externo.

**Notas de uso:** Las tres keywords primarias tienen alta competencia a nivel LATAM — el diferenciador de Reclutia (alineación cultural) debe estar explícito en el copy para distinguirse de agencias genéricas. "Outsourcing de reclutamiento para pymes" es oportunidad de bajo costo competitivo para el segmento SMB objetivo.

---

### Tema 2: Headhunting y posiciones ejecutivas

| Keyword | Tipo | Intención | Volumen estimado |
|---|---|---|---|
| headhunters en monterrey | Secundaria | Comercial | Medio |
| headhunting ejecutivo mexico | Secundaria | Comercial | Medio |

**Cuándo usar este grupo:** Sección o módulo dedicado al servicio de Headhunting Empresarial dentro del sitio. Activan búsquedas de empresas que necesitan cubrir posiciones gerenciales o directivas y buscan un especialista, no una bolsa de trabajo.

**Notas de uso:** "Headhunters en monterrey" tiene intención local fuerte — refuerza la presencia física de Reclutia en esa plaza. Si el sitio tiene alcance internacional, conviene que el copy mencione explícitamente Monterrey como base de operaciones sin restringir el mensaje a esa ciudad.

---

### Tema 3: Agencia de RRHH y posicionamiento institucional

| Keyword | Tipo | Intención | Volumen estimado |
|---|---|---|---|
| agencia de recursos humanos b2b | Secundaria | Comercial | Medio |
| consultoría de cultura organizacional y talento | Long-tail | Comercial | Bajo |

**Cuándo usar este grupo:** Sección "Quiénes somos" o módulo de diferenciadores. Estas keywords posicionan a Reclutia como consultora estratégica, no solo como proveedor de currículums — refuerzan el diferenciador de cultura organizacional.

**Notas de uso:** "Consultoría de cultura organizacional y talento" tiene volumen bajo pero alta calidad de lead — quien busca esto ya entiende el problema profundo. Esta keyword es la de mayor potencial de conversión del set.

---

### Tema 4: Servicios complementarios y diferenciadores

| Keyword | Tipo | Intención | Volumen estimado |
|---|---|---|---|
| psicometrías para selección de personal | Secundaria | Comercial | Medio |
| pruebas de confianza para personal empresas | Long-tail | Comercial | Bajo |
| investigación laboral y domiciliaria para candidatos | Long-tail | Informacional/Comercial | Bajo |

**Cuándo usar este grupo:** Sección de servicios complementarios o módulo de "beneficios incluidos". Estas keywords atraen a empresas que ya están evaluando candidatos y necesitan herramientas adicionales de validación.

**Notas de uso:** Son keywords de bajo volumen pero muy específicas — el usuario que las busca tiene alta intención de contratar. Refuerzan la propuesta de valor frente a competidores que solo ofrecen reclutamiento básico.

---

### Tema 5: Retención y problemas organizacionales

| Keyword | Tipo | Intención | Volumen estimado |
|---|---|---|---|
| cómo reducir rotación de personal en empresas | Long-tail | Informacional | Medio |

**Cuándo usar este grupo:** Contenido informacional o módulo de dolor del cliente en el sitio. Esta keyword captura a dueños y directores que tienen el problema pero aún no saben que la solución es externalizar el reclutamiento.

**Notas de uso:** Es la única keyword de intención puramente informacional del set — en un sitio single-page tiene alcance limitado, pero puede activarse bien en un artículo de blog futuro o en la sección de "¿Por qué Reclutia?".

---

**Narrativa estratégica del set**

El ángulo SEO de Reclutia es el de una consultora especializada en talento alineado a cultura, diferenciada de bolsas de trabajo genéricas y de agencias de colocación masiva. La keyword de mayor potencial de conversión es **"consultoría de cultura organizacional y talento"** — tiene bajo volumen pero captura un perfil de cliente sofisticado, con dolor claro y disposición a pagar por un servicio premium, que además coincide directamente con el diferenciador declarado en el brief. El riesgo de canibalización más relevante ocurre entre los temas 1 y 3: "agencia de recursos humanos b2b" y "servicio de reclutamiento para empresas" compiten por una intención similar; en un sitio single-page ambas deben tratarse dentro del mismo bloque de contenido para evitar señales contradictorias.

---

## Estructura sugerida del sitio

Dado que el cliente optó por single-page, la "estructura" equivale a secciones dentro de una misma página. La tabla refleja eso.

| Sección sugerida | Keywords relevantes | Prioridad |
|---|---|---|
| Hero / Propuesta de valor | Reclutamiento y selección, Agencia RRHH b2b | Alta |
| Servicios de reclutamiento (operativo, administrativo, bilingüe) | Reclutamiento núcleo, Long-tails operativos | Alta |
| Headhunting ejecutivo | Headhunters Monterrey, Headhunting ejecutivo México | Alta |
| Servicios complementarios (psicometrías, pruebas de confianza, investigación laboral) | Diferenciadores, Servicios complementarios | Alta |
| Diferenciadores / Por qué Reclutia | Cultura organizacional, Reducir rotación | Media |
| Contacto / CTA principal | Todas — ancla final del flujo | Alta |
| Blog (futuro, página separada) | Rotación de personal, Informacional | Futura |
| Landing bilingüe EUA (futura) | Reclutamiento bilingüe, Headhunting México-EUA | Futura |

**Nota para Jorge:** Si en Brief 4 se decide crear páginas individuales por servicio (recomendado a mediano plazo), cada tema de keywords del mapa se convierte naturalmente en una página independiente, lo que multiplicaría la capacidad de rankeo sin cambiar la estrategia de contenido.

---

## Estrategia de internal linking

**Principios para este proyecto:**

1. **Flujo hacia el CTA único:** Cada sección del single-page debe tener un enlace ancla o botón que dirija al formulario/contacto al final. En un sitio de página única, el "internal linking" es navegación por anclas — deben ser intencionales y estar orientadas a conversión.

2. **Jerarquía visual = jerarquía semántica:** El orden de las secciones debe reflejar el embudo: primero el problema del cliente (falta de personal), luego los servicios que lo resuelven, luego los diferenciadores que generan confianza, luego el CTA. El motor de búsqueda lee el contenido en ese orden.

3. **Menciones cruzadas entre servicios:** Si la sección de headhunting menciona psicometrías, debe incluir un enlace ancla hacia esa sección. Evitar menciones huérfanas de servicios sin referencia navegable.

4. **Páginas futuras enlazan al inicio:** Cuando se creen páginas adicionales (blog, landing bilingüe), deben enlazar de vuelta a la página principal con texto ancla descriptivo ("consultoría de reclutamiento para empresas"), no con "inicio" o "home".

5. **Versión en inglés:** Si se implementa el sitio bilingüe con URLs separadas (ej. `/en/`), cada versión debe incluir etiqueta `hreflang` apuntando a su par — esto es crítico para evitar que Google indexe ambas versiones compitiendo entre sí.

---

## Ideas de contenido futuro

**Blog / artículos (temas sugeridos):**

- *Cómo reducir la rotación de personal en empresas medianas* — cubre directamente la keyword informacional del set y atrae dueños en etapa de diagnóstico antes de que busquen proveedor.
- *Qué es el headhunting y cuándo usarlo en tu empresa* — captura búsquedas de directores que no conocen el término pero tienen la necesidad, alineado al tema ejecutivo del mapa.
- *5 errores en la contratación de personal operativo en manufactura* — combina keyword de reclutamiento con los sectores objetivo del cliente (manufactura, construcción).
- *Por qué la cultura organizacional determina el éxito de tu próxima contratación* — refuerza el diferenciador principal de Reclutia y posiciona el término de consultoría cultural.
- *Psicometrías en el proceso de selección: cuáles usar y para qué perfil* — cubre la keyword de psicometrías con contenido de autoridad que genera confianza antes del cierre comercial.
- *Investigación laboral y domiciliaria: qué información revela y por qué importa* — cubre la keyword de investigación laboral con intención informacional y educa al prospecto sobre un servicio que pocos conocen.

**Páginas adicionales o landings:**

- *Landing de reclutamiento bilingüe México-EUA* — cubre el servicio mencionado en el texto fuente del cliente que no tiene keyword asignada aún; tiene potencial real dado el alcance internacional declarado.
- *Landing por industria: Reclutamiento para manufactura / salud / construcción* — cada página cubriría long-tails sectoriales de alta conversión ("reclutamiento personal operativo industria") con mayor especificidad que el sitio general.

**Recursos de autoridad:**

- *Guía descargable: Proceso de selección por etapas para empresas sin área de RRHH* — posiciona a Reclutia como experto, genera leads calificados (quienes descargan ya tienen el problema activo) y distribuye el contenido en LinkedIn, canal natural para el segmento B2B dueño/CEO.