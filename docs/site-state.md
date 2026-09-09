# Estado del Sitio - Reclutia

---

## Estado actual

**Ultima actualizacion:** 2026-09-09
**Version del sitio:** 1.0.0
**URL de produccion:** Pendiente de deploy
**Repo:** https://github.com/jorgeruiz/reclutia.git
**Branch principal:** main

---

## Construccion inicial

**Fecha:** 2026-09-09
**Stack:** Next.js 16.3.4 + Tailwind v4 + GSAP 3.15 + Vercel

---

## Features implementadas

- [x] Home single-page con 10 secciones
- [x] Navegacion flotante con blur y hamburger mobile
- [x] Hero asimetrico con imagen + resumen ejecutivo AEO
- [x] Servicios de reclutamiento (grid desigual imagen + lista)
- [x] Headhunting ejecutivo con clip-path reveal scroll-driven
- [x] Proceso de seleccion con SVG path draw + timeline alternada
- [x] Diferenciadores con numeros editoriales
- [x] Servicios complementarios (grid 3 cols)
- [x] FAQs abiertas en texto plano (7 preguntas)
- [x] CTA centrado flotante con enlace a email
- [x] Footer con datos verificables (contacto, sectores, cobertura)
- [x] Design system cerrado (tokens.css + DESIGN.md)
- [x] verify-design.sh con checks automaticos (hex, contraste WCAG, motion, em-dash)
- [x] JSON-LD schemas (ProfessionalService, WebSite, FAQPage, 3x Service)
- [x] Metadata SEO completa (title, description, OG, Twitter Cards)
- [x] robots.ts y sitemap.ts
- [x] Fuentes optimizadas con next/font/google (Montserrat + JetBrains Mono)
- [x] prefers-reduced-motion respetado en todas las animaciones
- [x] focus-visible global para accesibilidad
- [x] Imagenes webp optimizadas con lazy loading (hero eager)

---

## Pendientes e issues conocidos

### Bloqueantes

- Ninguno

### No bloqueantes

- Imagen OG default (`/public/og-default.jpg` 1200x630) pendiente de crear
- Version en ingles (`/en/`) no implementada (sitio bilingue declarado en SEO)
- Paginas internas (servicios individuales) no implementadas (decidido por Jorge)
- Sistemas de contenido (blog, landings, micrositios) no bootstrappeados (decidido por Jorge)
- Formulario de contacto no implementado (CTA enlaza a mailto)
- Redes sociales en schema.org marcadas como pendientes (LinkedIn, Instagram)
- Telefono de contacto no disponible

---

## Historial de cambios

### 2026-09-09 - Construccion inicial

**Cambios aplicados:**
- Home completo con 10 secciones
- Design system (tokens.css, DESIGN.md)
- SEO infrastructure (schemas, robots, sitemap)
- Auditor ejecutado: 0 FALLOs en reporte final

**Aplicado por:** Claude Code / Click Society
