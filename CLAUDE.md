# Reclutia

**Stack:** Next.js 16 + Tailwind v4 + GSAP + Vercel
**Repo:** https://github.com/jorgeruiz/reclutia.git
**Raiz del proyecto:** Este directorio

---

## Fuentes de verdad del diseno

- `DESIGN.md` - prohibiciones, tokens documentados, tipografia, motion budget, accesibilidad
- `tokens.css` - variables CSS canonicas
- `verify-design.sh` - verificacion automatica antes de cada commit

---

## Reglas del repositorio

### Paginas y secciones

- Toda pagina nueva se registra en `docs/site-map.md` con ID en snake_case y etiqueta legible
- Toda seccion nueva se agrega al mapa con su componente real

### Sesiones de cambios

- Toda sesion de cambios agrega una entrada a `docs/site-state.md` con fecha, descripcion y commit
- Actualizar `docs/site-spec.md` si cambia el stack o los componentes clave

### Documentacion

- No dejar bloques `>` con instrucciones en los docs
- No dejar placeholders `[...]` ni `{PLACEHOLDER}` en ningun doc
- Los docs reflejan el estado REAL del codigo, no el esperado

### Diseno

- Respetar los tokens de `tokens.css` en todo el sitio
- No usar hex fuera de los tokens definidos (ver verify-design.sh para la lista)
- No usar clases default de Tailwind (bg-blue-600, rounded-lg, shadow-md, etc.)
- No importar framer-motion (el budget de motion es CSS + GSAP)
- No usar el caracter em-dash en texto visible
- Correr `./verify-design.sh` antes de cada commit

### SEO

- JSON-LD schemas en `src/lib/schemas.ts`
- Componente `JsonLd.tsx` para renderizar schemas
- Metadata definida en `src/app/layout.tsx` (global) y `src/app/page.tsx` (por pagina)
- robots.ts y sitemap.ts en `src/app/`

### Imagenes

- Todas en `/public/images/` en formato webp
- Manifiesto en `docs/image-manifest.md`
- Solo `hero-home.webp` lleva priority; resto lazy loading
- Logo del cliente original en `/public/images/cliente/`
