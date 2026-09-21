# Schauer Labs — sitio

Sitio de **Schauer Labs** — _Software e IA para resolver problemas reales._

Analizamos cómo funciona un negocio, detectamos dónde se pierde tiempo y diseñamos la tecnología para resolverlo.
Estética editorial, sobria y mobile first. Next.js (App Router) + TypeScript, Tailwind CSS v4 y Motion.

## Stack

- **Next.js 16** (App Router, React 19) — render estático, metadata/SEO, OG image y favicons generados.
- **Tailwind CSS v4** — tokens de marca en `app/globals.css`.
- **Motion** (`motion/react`) — reveals discretos al entrar en viewport. Todo respeta `prefers-reduced-motion`.
- **Archivo** (`next/font/google`) — única familia del sistema, variable (100–900).

## Scripts

```bash
npm run dev     # desarrollo (http://localhost:3000)
npm run build   # build de producción
npm start       # sirve el build
npm run lint    # eslint (Next 16 ya no lo corre dentro de `build`)
```

## Estructura

- `app/` — layout, home, rutas de casos (`/casos/[slug]`), icon/OG/robots/sitemap y JSON-LD.
- `components/site/` — secciones de la home en orden narrativo: Hero, Problema, QueHacemos, Metodo, Manifiesto, Casos, ParaQuien, Contacto, Footer.
- `components/ui/` — primitivos: Logo, Wordmark, Isotype, Button, Eyebrow, Container, Reveal.
- `components/mockups/` — esquema operativo de Panacity (el único caso sin producto que mostrar todavía).
- `public/case-studies/` — screenshots reales de cada caso (no recolorear).
- `public/brand/` — isotipo, avatar y lockups horizontales en SVG.
- `lib/site.ts` — configuración central: marca, contacto, navegación y todo el contenido de las secciones.
- `lib/brand-mark.ts` — geometría del isotipo para los contextos que no pueden importar el componente React (OG image, apple-icon).

## Marca

Identidad cerrada, definida en el brand board aprobado.

- **Wordmark** — `SCHAUER` en Archivo 800, `LABS` en Archivo 300. Nunca reinterpretarlo con otra tipografía.
- **Isotipo** — `/.` : una barra diagonal y un punto. Geometría pura, sin adornos tecnológicos.
- **Paleta** — ivory `#F7F5EE`, carbón `#16140F`, verde `#2E6F5E`, gris `#9AA69E`.
  `app/globals.css` documenta las dos variantes que existen solo por contraste (`--muted` y `--verde-on-dark`).

Los lockups horizontales de `public/brand/` usan texto vivo con Archivo cargada desde Google Fonts:
se ven bien en el navegador, pero para imprenta, cartelería o plataformas de terceros hace falta
una exportación con la tipografía convertida a curvas.

## Dominio

Dominio canónico: **https://schauerlabs.com**

`next.config.ts` redirige con 308 (permanente, preserva el método) cualquier host heredado de JYC Studio
y el `www` del dominio nuevo hacia el origen canónico, **conservando el path**: `/casos/sacaturno` cae en
`https://schauerlabs.com/casos/sacaturno`. Los hosts heredados están listados en `LEGACY.hosts` (`lib/site.ts`).
Las previews de Vercel y `localhost` no matchean ninguna regla y quedan intactas.

> **Pendiente real:** `SITE.email` (`hola@schauerlabs.com`) tiene que existir como casilla antes de publicar.
> El número de WhatsApp en `SITE.whatsappNumber` se migró tal cual desde la marca anterior.
