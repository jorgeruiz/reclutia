# Especificacion Tecnica del Sitio - Reclutia

**Ultima actualizacion:** 2026-09-09
**Construido por:** Claude Code / Click Society

---

## Stack

**Framework:** Next.js 16.3.4
**Node:** 24.x
**Package manager:** npm
**Deploy:** Vercel

**Dependencias principales:**

| Paquete | Version | Proposito |
|---------|---------|-----------|
| next | 16.3.4 | Framework principal (App Router, RSC) |
| react | 19.2.8 | UI |
| tailwindcss | 4.x | Estilos via tokens CSS |
| gsap | 3.15.x | Scroll-driven animations (ScrollTrigger) |

---

## Design System

**Fuentes de verdad del diseno:**
- `DESIGN.md` - prohibiciones, tokens documentados, tipografia, motion budget, accesibilidad
- `tokens.css` - variables CSS canonicas (7 colores + error, tipografia, escala, shape, motion)

Los tokens no se duplican aqui. Consultar `tokens.css` y `DESIGN.md` para valores exactos.

**Tipografias:**
- Headings: Montserrat, 700-800
- Body: Montserrat, 400-500
- Mono: JetBrains Mono, 400-500

**Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## Componentes clave

| Componente | Ruta | Descripcion |
|-----------|------|-------------|
| Layout raiz | `src/app/layout.tsx` | Carga fuentes, metadata global, schemas JSON-LD globales |
| Nav | `src/components/Nav.tsx` | Isla flotante con blur, hamburger morphing, CTA |
| Hero | `src/components/Hero.tsx` | Split asimetrico texto/imagen + resumen AEO |
| Servicios | `src/components/Servicios.tsx` | Grid desigual con imagen + lista de servicios |
| HeadhuntingReveal | `src/components/HeadhuntingReveal.tsx` | Seccion navy con clip-path reveal scroll-driven |
| ProcesoTimeline | `src/components/ProcesoTimeline.tsx` | SVG path draw + pasos alternados con fade-up |
| Diferenciadores | `src/components/Diferenciadores.tsx` | Numeros editoriales grandes + texto |
| ServiciosComplementarios | `src/components/ServiciosComplementarios.tsx` | Grid 3 cols con accent bars |
| FAQ | `src/components/FAQ.tsx` | FAQs abiertas en texto plano |
| CTA | `src/components/CTA.tsx` | Bloque centrado flotante con sombra |
| Footer | `src/components/Footer.tsx` | Grid 4 cols sobre fondo navy, datos verificables |
| JsonLd | `src/components/JsonLd.tsx` | Componente reutilizable para schema.org |

---

## Estructura de paginas

| Ruta | Archivo | Descripcion |
|------|---------|-------------|
| `/` | `src/app/page.tsx` | Home (single page con todas las secciones) |

---

## Decisiones de arquitectura

- **Single page:** El sitio es una sola pagina con secciones navegadas por anclas (#). No hay paginas internas implementadas.
- **GSAP sobre framer-motion:** Se eligio GSAP + ScrollTrigger para scroll-driven animations por precision en scrub. framer-motion esta prohibido en este proyecto.
- **CSS transitions para UI:** Hover, focus y active usan CSS transitions nativas (max 300ms) en vez de librerias de animacion.
- **Seccion headhunting invertida:** La seccion de headhunting usa fondo navy (--color-text) con texto blanco como momento de inmersion deliberado. Documentado en DESIGN.md.
- **Bilingue pendiente:** El sitio esta preparado para i18n (hreflang en metadata, lang="es" en html) pero la version en ingles no esta implementada.

---

## Notas para mantenimiento

- Correr `./verify-design.sh` antes de cada commit. Verifica hex compliance, contraste WCAG, motion budget y em-dash ban.
- Los hex #94A3BB y #1E3A5F son excepciones documentadas para secciones con fondo navy (headhunting + footer).
- Las imagenes del sitio estan en `/public/images/` en formato webp. El manifiesto esta en `docs/image-manifest.md`.
- El logo esta en `/public/images/logo.webp` (convertido del original en `/public/images/cliente/`).
