# JYC Studio — Landing

Landing del estudio **JYC Studio** — _Productos digitales para negocios reales._

Editorial, premium y cálido. Construida con Next.js (App Router) + TypeScript, Tailwind CSS v4 y Motion.

## Stack

- **Next.js 16** (App Router, React 19) — render estático, metadata/SEO, OG image y favicons generados.
- **Tailwind CSS v4** — tokens de marca definidos en `app/globals.css`.
- **Motion** (`motion/react`) — reveals discretos al entrar en viewport y micro-interacciones.
- **Fuentes** (`next/font`): Instrument Serif (serif editorial), DM Sans (UI/cuerpo), JetBrains Mono (overlines/datos).

## Scripts

```bash
npm run dev     # desarrollo (http://localhost:3000)
npm run build   # build de producción
npm start       # sirve el build
npm run lint    # eslint
```

## Estructura

- `app/` — layout, página principal, rutas de casos (`/casos/[slug]`), icon/OG/robots/sitemap.
- `components/site/` — secciones (Header, Hero, Casos, Cómo trabajamos, Estudio, Contacto, Footer).
- `components/mockups/` — panel operativo del hero y mockup operativo de Panacity (sin screenshot real aún).
- `public/case-studies/` — screenshots reales de cada caso (no recolorear).
- `components/ui/` — primitivos (Wordmark, Button, Reveal, Overline, ArrowLink, Container).
- `lib/site.ts` — configuración central: contacto, navegación y contenido de los casos.

## Marca

Identidad cerrada (no reinterpretar). Wordmark `JYC Studio` con `JYC` en sans-serif estructurado y `Studio` en serif itálica.
Paleta y tokens en `app/globals.css`. El número de WhatsApp y los datos de contacto viven en `lib/site.ts`.

> **Pendiente real:** reemplazar `whatsappNumber` en [`lib/site.ts`](lib/site.ts) por la línea real del estudio
> (hoy es un placeholder configurable). Las páginas de caso muestran el contenido del landing;
> ampliar con material real cuando esté disponible.
