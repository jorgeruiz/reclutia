# Reclutia - Design System

## Fuente de verdad

Los tokens de diseno viven en `tokens.css`. Este documento explica como usarlos.
No dupliques valores - si un token cambia, se cambia en `tokens.css` y este
documento se actualiza en consecuencia.

---

## Prohibiciones

- **Hex fuera de tokens:** NO usar colores hex directamente. Solo los 7 tokens
  de color + `#DC2626` (error). Usar las variables: `bg-bg`, `bg-surface`,
  `text-text`, `text-text-muted`, `bg-primary`, `text-on-primary`, `border-border`.
- **Clases Tailwind default:** NO usar `bg-blue-600`, `text-gray-500`,
  `rounded-lg`, `shadow-md`, ni ninguna clase de color/radius/shadow default
  de Tailwind. El `@theme` con `initial` las desactiva.
- **Fuentes fuera de variables:** NO usar `font-sans`, `font-serif` ni
  familias directas en CSS. Solo `font-heading`, `font-body`, `font-mono`.
- **framer-motion:** NO importar `framer-motion`. Usar GSAP + ScrollTrigger
  para scroll-driven animations, y CSS transitions/animations para el resto
  dentro del budget de motion.
- **Em-dash:** El caracter `—` esta prohibido en todo texto visible.

---

## Tokens de color

| Token | Hex | Uso |
|---|---|---|
| `--color-bg` | #FFFFFF | Fondo principal de la pagina |
| `--color-surface` | #F4F6F9 | Secciones alternas, cards, bloques diferenciados |
| `--color-primary` | #2D6CDF | Botones, enlaces, acentos de accion |
| `--color-on-primary` | #FFFFFF | Texto sobre elementos primary |
| `--color-text` | #0A1E3F | Texto principal, headings |
| `--color-text-muted` | #5A6B82 | Texto secundario, descripciones, metadata |
| `--color-border` | #D8DEE8 | Hairlines, separadores, bordes sutiles |
| `--color-error` | #DC2626 | Mensajes de error, validacion |

### Seccion de headhunting (excepcion controlada)

La seccion de headhunting usa fondo `--color-text` (#0A1E3F) con texto blanco
para crear un momento de inmersion. Esta es la UNICA seccion que invierte el
esquema. El texto sobre este fondo usa `--color-on-primary` (#FFFFFF) y el
muted usa `#94A3BB`. Esta excepcion esta documentada y no viola la consistencia
porque es un cambio de registro intencional, no una alternancia arbitraria.

---

## Tipografia

### Familias

- **Heading:** Montserrat (cargada via `next/font/google`)
- **Body:** Montserrat (misma carga, pesos distintos)
- **Mono:** JetBrains Mono (cargada via `next/font/google`)

### Pesos

| Uso | Peso |
|---|---|
| H1 (hero) | 800 |
| H2 (secciones) | 700 |
| H3 (subtitulos) | 600 |
| Body | 400 |
| Body enfatizado | 500 |
| Labels, eyebrows | 500 |

### Escala tipografica

| Token | Valor | Uso |
|---|---|---|
| `--text-4xl` | 3.5rem | H1 hero desktop |
| `--text-3xl` | 2.5rem | H2 secciones desktop |
| `--text-2xl` | 1.5rem | H3 subtitulos |
| `--text-xl` | 1.25rem | Lead paragraphs |
| `--text-lg` | 1.125rem | Body grande |
| `--text-base` | 1rem | Body default |
| `--text-sm` | 0.875rem | Metadata, labels |
| `--text-xs` | 0.75rem | Micro-labels, eyebrows |

### Tracking

- Headings: `--heading-tracking: -0.02em` (apretado, genera densidad)
- Body: tracking default (0)
- Eyebrows: `tracking-[0.1em]` (solo en las pocas eyebrows permitidas)

### Carga de fuentes

```tsx
// app/layout.tsx
import { Montserrat, JetBrains_Mono } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})
```

---

## Forma

- **Border radius:** `--radius: 8px`. Aplicar como `rounded-[8px]`.
  Botones: `rounded-full` (pill). Inputs: `rounded-[8px]`.
- **Shadows:** Sombras muy difusas para cards flotantes:
  `shadow-[0_4px_40px_rgba(10,30,63,0.06)]`. NO sombras default de Tailwind.
  NO sombras oscuras. Tintadas al color text (#0A1E3F) a opacity muy baja.
- **Glass:** No se usa glassmorphism en este proyecto.
- **Bordes:** Hairlines de 1px (`--border-width`) usando `--color-border`.
  NO bordes completos alrededor de cards. Preferir `border-b` o `border-t`.

---

## Densidad y espaciado

- **Seccion padding:** `py-20` (5rem = `--section-y`) como base.
  Secciones importantes (hero, CTA final): pueden usar `py-24` a `py-32`.
- **Content width:** `max-w-[1280px] mx-auto` con `px-6` de gutter.
- **Gap entre elementos:** `gap-8` a `gap-12` en grids de seccion.
  `gap-4` a `gap-6` dentro de cards/bloques.
- **Macro-whitespace:** Las secciones respiran. Minimo 5rem entre secciones.

---

## Motion

- **Budget:** CSS transitions + GSAP ScrollTrigger para scroll-driven.
  NO framer-motion. NO animaciones en loop infinito.
- **Duracion maxima:** `--duration-max: 300ms` para transiciones de UI
  (hover, focus, active). Scroll-driven animations no tienen limite de
  duracion porque estan vinculadas al scroll progress.
- **Easing:** `--easing: cubic-bezier(0.4, 0, 0.2, 1)` para transiciones.
  `cubic-bezier(0.16, 1, 0.3, 1)` para reveals en scroll (ease-out exponencial).
- **Propiedades permitidas:** Solo `transform` y `opacity`. NUNCA animar
  `top`, `left`, `width`, `height`.
- **prefers-reduced-motion:** OBLIGATORIO. Toda animacion scroll-driven
  debe colapsarse a estado final bajo `prefers-reduced-motion: reduce`.
- **Animaciones del proyecto:**
  - Proceso de seleccion: SVG path draw vinculado a scroll progress
  - Headhunting reveal: CSS clip-path vinculado a scroll (GSAP ScrollTrigger)
  - Fade-up de secciones: CSS `@keyframes` con IntersectionObserver
  - Hover en botones: `scale(0.98)` en active, transicion de bg en hover

---

## Accesibilidad

### Contraste (WCAG AA obligatorio)

| Par | Ratio minimo | Ratio real |
|---|---|---|
| text (#0A1E3F) vs bg (#FFFFFF) | 4.5:1 | 14.4:1 |
| text-muted (#5A6B82) vs bg (#FFFFFF) | 3.0:1 | 4.7:1 |
| text (#0A1E3F) vs surface (#F4F6F9) | 4.5:1 | 13.2:1 |
| on-primary (#FFFFFF) vs primary (#2D6CDF) | 4.5:1 | 4.6:1 |

### Focus visible

Todos los elementos interactivos deben tener `focus-visible:outline-2
focus-visible:outline-offset-2 focus-visible:outline-primary`.

### Reduccion de movimiento

`prefers-reduced-motion: reduce` desactiva:
- Scroll-driven animations (se muestran en estado final)
- Fade-up reveals (se muestran visibles)
- Transiciones de hover (se aplican instantaneamente)

---

## Seccion de headhunting - tratamiento especial

La seccion de headhunting ejecutivo usa un esquema invertido:
- Fondo: `--color-text` (#0A1E3F)
- Texto principal: `--color-on-primary` (#FFFFFF)
- Texto muted: `#94A3BB`
- CTA: `--color-primary` (#2D6CDF) con texto blanco
- Entrada: clip-path reveal vinculado a scroll (cortina de izquierda a derecha)

Este tratamiento diferenciado marca el cambio de registro hacia el servicio
premium de headhunting. Es un momento de inmersion deliberado dentro de la
pagina, no una alternancia arbitraria de temas.
