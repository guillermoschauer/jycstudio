// Central site configuration for JYC Studio.
// Keep brand/contact constants here so they are easy to update in one place.

export const SITE = {
  name: "JYC Studio",
  // Hero claim.
  claim: "Productos digitales para negocios reales.",
  // Footer / meta long claim.
  longClaim:
    "Productos digitales, sistemas y experiencias web para problemas reales.",
  description:
    "Sistemas, SaaS y experiencias web para ordenar operaciones, comunicar mejor y crecer.",
  url: "https://www.jycstudio.com.ar",
  email: "hola@jycstudio.com.ar",

  // WhatsApp link is built from this number (international format, no symbols).
  whatsappNumber: "5492235216745",
  whatsappMessage:
    "Hola JYC Studio, tengo un problema que debería funcionar mejor.",
} as const;

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  SITE.whatsappMessage,
)}`;

export const MAILTO_URL = `mailto:${SITE.email}`;

export const NAV_LINKS = [
  { label: "Casos", href: "#casos" },
  { label: "Cómo trabajamos", href: "#como-trabajamos" },
  { label: "Estudio", href: "#estudio" },
] as const;

// Hero capability chips.
export const HERO_CHIPS = [
  "Sistemas internos",
  "SaaS",
  "Reservas y operación",
  "Landings",
  "Sitios de marca",
  "Experiencias de conversión",
] as const;

// Hero three pillars.
export const HERO_PILLARS = [
  {
    title: "Operación",
    text: "Herramientas y sistemas que ordenan reservas, turnos, ventas y stock. Menos planillas y WhatsApp suelto; más control en tiempo real.",
  },
  {
    title: "Producto",
    text: "Productos digitales propios y para terceros, diseñados y construidos de punta a punta — desde el problema hasta el producto en uso.",
  },
  {
    title: "Marca y experiencia",
    text: "Landings, sitios y experiencias digitales que ayudan a una marca a comunicar su propuesta y convertir interés en consultas y ventas.",
  },
] as const;

// ---------------------------------------------------------------------------
// Cases — the curated gallery. Order is intentional.
// `visual` is either a real screenshot or the in-house Panacity mockup.
// Screenshots keep each project's own identity (never recolored).
// ---------------------------------------------------------------------------

export type CaseImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CaseItem = {
  id: string;
  eyebrow: string; // mono label, e.g. "GESTIÓN DE TURNOS · ESTÉTICA Y BELLEZA"
  title: string;
  /** Optional second line styled as the editorial heading continuation. */
  titleTail?: string;
  problemLabel: string; // "Problema" | "Propuesta"
  problem: string;
  solutionLabel: string; // "Solución" | "Beneficio"
  solution: string;
  benefitsLabel: string; // "Beneficios" | "Qué aporta"
  benefits: string[];
  microcopy: string; // small italic-ish note under the visual
  cta: string;
  href: string;
  /** "shot" uses an image; "mockup" renders the Panacity operative mockup. */
  visual: "shot" | "mockup";
  image?: CaseImage;
  /** Visual surface tone for framing (affects border/shadow). */
  tone: "light" | "dark";
  badge?: string; // optional status pill, e.g. "PROYECTO EN DESARROLLO"
  /** Status tone driving badge color: live = green, soon/dev = muted. */
  badgeTone?: "live" | "soon" | "dev";
  /** Live, operational product URL (external). */
  liveUrl?: string;
};

export const CASES: CaseItem[] = [
  {
    id: "sacaturno",
    eyebrow: "Gestión de turnos · Estética y belleza",
    title: "sacaturno.app",
    problemLabel: "Problema",
    problem:
      "En estética y belleza, coordinar turnos por WhatsApp comía horas y dejaba huecos sin cubrir.",
    solutionLabel: "Solución",
    solution:
      "La misma base de reservas, con identidad propia del rubro: agenda 24hs, recordatorios y confirmación automática.",
    benefitsLabel: "Beneficios",
    benefits: [
      "El cliente reserva solo, las 24 horas",
      "Señas y confirmaciones sin perseguir a nadie",
      "Una agenda por salón, lista en minutos",
    ],
    microcopy: "Mismo motor · adaptado a otro rubro",
    cta: "Ver caso",
    href: "/casos/sacaturno",
    visual: "shot",
    tone: "light",
    badge: "Producto en uso",
    badgeTone: "live",
    liveUrl: "https://sacaturno.app",
    image: {
      src: "/case-studies/sacaturno.png",
      alt: "Pantalla de sacaturno.app: agenda semanal de turnos para un salón de estética.",
      width: 1167,
      height: 781,
    },
  },
  {
    id: "agendallena",
    eyebrow: "Gestión de turnos · Salud",
    title: "agendallena",
    problemLabel: "Problema",
    problem:
      "Consultorios y clínicas perdían turnos entre WhatsApp, llamados y planillas sin control.",
    solutionLabel: "Solución",
    solution:
      "Agenda online donde el paciente reserva solo, con recordatorios automáticos y señas por Mercado Pago.",
    benefitsLabel: "Beneficios",
    benefits: [
      "Menos mensajes, llamadas y ausencias",
      "Vista semanal de turnos por profesional",
      "Operación centralizada, sin planillas sueltas",
    ],
    microcopy: "Producto en uso · agenda de turnos",
    cta: "Ver caso completo",
    href: "/casos/agendallena",
    visual: "shot",
    tone: "dark",
    badge: "Producto en uso",
    badgeTone: "live",
    liveUrl: "https://agendallena.com.ar",
    image: {
      src: "/case-studies/agendallena.png",
      alt: "Pantalla de agendallena: agenda semanal de turnos para profesionales de la salud.",
      width: 1202,
      height: 750,
    },
  },
  {
    id: "coparentar",
    eyebrow: "Producto digital · Familias",
    title: "Coparentar",
    problemLabel: "Problema",
    problem:
      "Padres y madres que coparentan coordinaban agenda, gastos y acuerdos en chats dispersos.",
    solutionLabel: "Solución",
    solution:
      "Un producto que ordena calendario compartido, gastos y comunicación en un lugar claro y neutral.",
    benefitsLabel: "Beneficios",
    benefits: [
      "Menos fricción y malentendidos en la coordinación",
      "Acuerdos y gastos registrados y a la vista",
      "Una sola fuente de verdad para ambas partes",
    ],
    microcopy: "Producto propio · agenda, gastos y documentos",
    cta: "Ver caso completo",
    href: "/casos/coparentar",
    visual: "shot",
    tone: "dark",
    badge: "Producto en uso",
    badgeTone: "live",
    liveUrl: "https://coparentar.com",
    image: {
      src: "/case-studies/coparentar.png",
      alt: "Pantalla de Coparentar: app de crianza compartida con agenda, gastos y movimientos.",
      width: 1893,
      height: 818,
    },
  },
  {
    id: "bicitando",
    eyebrow: "Marca y experiencia",
    title: "Bicitando Mardel",
    titleTail: "Escapadas de Bienestar Activo",
    problemLabel: "Propuesta",
    problem:
      "Experiencia digital y landing de conversión para una propuesta de escapadas, comunidad y actividades al aire libre.",
    solutionLabel: "Beneficio",
    solution:
      "Una propuesta más clara, una identidad más memorable y un recorrido digital pensado para transformar interés en consultas.",
    benefitsLabel: "Qué aporta",
    benefits: [
      "Mensaje y propuesta de valor ordenados",
      "Identidad y tono propios, memorables",
      "Recorrido orientado a la consulta",
    ],
    microcopy: "Landing de conversión · marca y experiencia",
    cta: "Ver experiencia",
    href: "/casos/bicitando",
    visual: "shot",
    tone: "dark",
    badge: "Sitio en vivo",
    badgeTone: "live",
    liveUrl: "https://bicitandomardel.com",
    image: {
      src: "/case-studies/bicitando.png",
      alt: "Landing de Bicitando Mardel: escapada a Sierra de los Padres al atardecer.",
      width: 1710,
      height: 832,
    },
  },
  {
    id: "reservacancha",
    eyebrow: "Reservas deportivas · Clubes y complejos",
    title: "ReservaCancha.app",
    problemLabel: "Problema",
    problem:
      "Clubes y complejos deportivos coordinaban turnos de cancha por teléfono, cuaderno y grupos de WhatsApp.",
    solutionLabel: "Solución",
    solution:
      "Plataforma de reservas online con disponibilidad en tiempo real, pagos y avisos automáticos para jugadores y complejos.",
    benefitsLabel: "Beneficios",
    benefits: [
      "El jugador encuentra cancha libre y reserva en segundos",
      "El complejo gestiona su disponibilidad desde un panel",
      "Menos llamadas, menos errores, más canchas ocupadas",
    ],
    microcopy: "Demo funcional · a semanas de lanzar",
    cta: "Ver caso",
    href: "/casos/reservacancha",
    visual: "shot",
    tone: "dark",
    badge: "A semanas de lanzar",
    badgeTone: "soon",
    image: {
      src: "/case-studies/reservacancha.png",
      alt: "Landing de ReservaCancha.app: búsqueda de canchas deportivas en tiempo real.",
      width: 1903,
      height: 827,
    },
  },
  {
    id: "panacity",
    eyebrow: "Ventas · Reposición · Equipo de campo",
    title: "Panacity",
    problemLabel: "Problema",
    problem:
      "Vendedores de campo registraban pedidos, cambios de mercadería y reposiciones entre papel, WhatsApp y controles dispersos.",
    solutionLabel: "Solución",
    solution:
      "Sistema operativo para ventas, reposición, devoluciones, stock y seguimiento de comercios desde una misma herramienta.",
    benefitsLabel: "Beneficios",
    benefits: [
      "Pedidos y reposiciones registrados en tiempo real",
      "Mejor trazabilidad por vendedor y punto de venta",
      "Menos papel, menos errores y mejor control operativo",
    ],
    microcopy: "Sistema en desarrollo · mockup operativo",
    cta: "Ver caso",
    href: "/casos/panacity",
    visual: "mockup",
    tone: "dark",
    badge: "Proyecto en desarrollo",
    badgeTone: "dev",
  },
];

// ---------------------------------------------------------------------------
// How we work.
// ---------------------------------------------------------------------------

export type ApproachStep = {
  number: string;
  title: string;
  text: string;
  tag: string;
};

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: "01",
    title: "Entender el problema",
    text: "Escuchamos el negocio antes de abrir un archivo de diseño.",
    tag: "Kickoff · Mapeo",
  },
  {
    number: "02",
    title: "Diseñar la herramienta",
    text: "Interfaces claras, pensadas para quien las usa todos los días.",
    tag: "Flujos · Prototipo",
  },
  {
    number: "03",
    title: "Construir y probar",
    text: "Desarrollo real, validado con usuarios reales en contexto real.",
    tag: "Build · QA en campo",
  },
  {
    number: "04",
    title: "Lanzar y mejorar",
    text: "El producto evoluciona con el negocio. No entregamos y nos vamos.",
    tag: "Deploy · Iteración",
  },
];

// Studio / social proof chips.
export const STUDIO_CHIPS = [
  "sacaturno.app",
  "agendallena",
  "Coparentar",
  "Bicitando",
  "ReservaCancha",
  "Panacity",
] as const;

// ---------------------------------------------------------------------------
// Studio team.
// Editá nombres/roles. Para fotos: dejá los archivos en /public/team/ y
// completá `photo` (ej. "/team/guillermo.jpg"). Si `photo` queda vacío, se
// muestran las iniciales en un círculo.
// ---------------------------------------------------------------------------
export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  photo?: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Guillermo Schauer",
    role: "Producto, diseño y desarrollo",
    initials: "GS",
    photo: "",
  },
  // Sumá acá a quien más forme parte del estudio.
];

// ---------------------------------------------------------------------------
// Case detail lookup.
// ---------------------------------------------------------------------------

export function getCaseSlugs(): string[] {
  return CASES.map((c) => c.id);
}

export function getCaseBySlug(slug: string): CaseItem | undefined {
  return CASES.find((c) => c.id === slug);
}
