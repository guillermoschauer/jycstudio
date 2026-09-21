// ---------------------------------------------------------------------------
// Schauer Labs — central site configuration.
// Brand, contact and page content live here so they change in one place.
// ---------------------------------------------------------------------------

export const SITE = {
  name: "Schauer Labs",
  /** Descriptor under the wordmark. Also the page's conceptual spine. */
  tagline: "Procesos · Tecnología · Resultados",
  /** Short positioning line (footer, OG, JSON-LD). */
  claim: "Software e IA para resolver problemas reales.",
  /** Long positioning line — the main proposition of the whole site. */
  proposition:
    "Analizamos cómo funciona tu negocio, detectamos dónde se pierde tiempo y diseñamos la tecnología para resolverlo.",
  description:
    "Analizamos cómo funciona tu negocio, detectamos dónde se pierde tiempo y diseñamos software, automatizaciones e IA para resolverlo.",
  url: "https://schauerlabs.com",
  email: "hola@schauerlabs.com",
  locale: "es_AR",

  // WhatsApp link is built from this number (international format, no symbols).
  whatsappNumber: "5492235216745",
  whatsappMessage:
    "Hola Schauer Labs, quiero contarles cómo trabajamos hoy y ver qué se puede mejorar.",
} as const;

/**
 * Previous brand and domains. Kept only as documentation for the migration
 * (redirects live in `next.config.ts`). Nothing here is rendered.
 */
export const LEGACY = {
  brand: "JYC Studio",
  hosts: ["jycstudio.com.ar", "www.jycstudio.com.ar", "jycstudio.com", "www.jycstudio.com"],
} as const;

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  SITE.whatsappMessage,
)}`;

export const MAILTO_URL = `mailto:${SITE.email}`;

/** Builds a WhatsApp link with a custom prefilled message. */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Qué hacemos", href: "#que-hacemos" },
  { label: "Cómo trabajamos", href: "#metodo" },
  { label: "Casos", href: "#casos" },
  { label: "Contacto", href: "#contacto" },
] as const;

// ---------------------------------------------------------------------------
// 01 — El punto de partida (problema)
// ---------------------------------------------------------------------------

/** Three frictions, not six: the list is a mirror, and three is enough to
 * recognise yourself in it. More rows read as an inventory. */
export const FRICTIONS = [
  "La información vive repartida entre WhatsApp, mails y planillas.",
  "Los mismos datos se cargan dos o tres veces, en lugares distintos.",
  "El seguimiento depende de que alguien se acuerde.",
] as const;

/**
 * Who this is for, as a line of recognition rather than a description of a
 * segment: the reader should finish the section having identified themselves.
 * Closes the section — see components/site/QueHacemos.tsx for the treatment.
 */
export const AUDIENCE_LINE =
  "Si tu negocio depende de WhatsApp, planillas y memoria, hay mucho para mejorar.";

// ---------------------------------------------------------------------------
// 02 — Qué hacemos
// ---------------------------------------------------------------------------

export type Capability = {
  number: string;
  title: string;
  text: string;
};

export const CAPABILITIES: Capability[] = [
  {
    number: "01",
    title: "Entendemos y rediseñamos procesos",
    text: "Miramos cómo funciona hoy la operación antes de proponer cualquier tecnología.",
  },
  {
    number: "02",
    title: "Automatizamos e integramos",
    text: "Sacamos los pasos manuales del medio y conectamos las herramientas que hoy no se hablan.",
  },
  {
    number: "03",
    title: "Construimos software e IA",
    text: "Solo cuando lo que existe no alcanza, y donde la inteligencia artificial mejora la tarea de verdad.",
  },
];

// ---------------------------------------------------------------------------
// 03 — Método
// ---------------------------------------------------------------------------

export type MethodStep = {
  number: string;
  title: string;
  text: string;
};

export const METHOD_STEPS: MethodStep[] = [
  { number: "01", title: "Entender", text: "Cómo funciona hoy la operación." },
  { number: "02", title: "Detectar", text: "Dónde se pierde el tiempo." },
  { number: "03", title: "Diseñar", text: "Qué conviene automatizar y qué no." },
  { number: "04", title: "Implementar", text: "Integrar, automatizar y construir lo que falte." },
  { number: "05", title: "Medir", text: "Volver a mirar con la solución andando." },
];

// ---------------------------------------------------------------------------
// Quién está detrás.
// Reassurance, not a bio: enough to show there is a real person with both
// business and technical judgement, and nothing more. Deliberately not a
// numbered chapter of the argument — se renderiza dentro de Manifiesto.tsx,
// junto a la frase que esta persona sostiene.
// ---------------------------------------------------------------------------

export const FOUNDER = {
  name: "Guillermo Schauer",
  role: "Fundador · Schauer Labs",
  lead: "Soy Guillermo Schauer, fundador de Schauer Labs.",
  body: [
    "Mi recorrido combina derecho, desarrollo de software y creación de productos digitales. Hoy uso esa experiencia para entender procesos, detectar problemas reales y diseñar tecnología que ayude a resolverlos.",
  ],
  photo: {
    src: "/team/guillermo-schauer.png",
    alt: "Retrato de Guillermo Schauer, fundador de Schauer Labs.",
    width: 1254,
    height: 1254,
    /** Portrait crop from the square original — see the Screenshot rationale. */
    focus: "50% 35%",
  },
} as const;

// ---------------------------------------------------------------------------
// 04 — Casos.
// Real projects only. No invented clients, metrics or results.
// Every case is told as PROBLEMA → PROCESO → SOLUCIÓN.
// `visual` is either a real screenshot or the in-house Panacity schematic.
// Screenshots keep each project's own identity (never recolored).
// ---------------------------------------------------------------------------

/**
 * A real screenshot, plus how to frame it.
 *
 * Cropping is done here, not in the file: `focus` and `zoom` reframe the shot
 * inside a fixed 16/10 window so every case reads at the same proportion,
 * while the asset on disk stays the untouched original. Re-cropping a case is
 * changing two numbers; replacing a screenshot is changing `src` and the
 * intrinsic size. Nothing else in the site needs to know.
 */
export type CaseImage = {
  src: string;
  alt: string;
  /** Intrinsic size of the file — used for the aspect math, not for layout. */
  width: number;
  height: number;
  /**
   * Which part of the shot survives the crop (CSS `object-position`).
   * Wide dashboards usually want "left top"; centred app views want "center".
   */
  focus?: string;
  /** >1 crops further into the shot. 1 = the whole width fits. */
  zoom?: number;
  /**
   * The frame's window bar. A string prints that address — only ever the real
   * one, never a made-up domain. `true` draws the bar with no address, for
   * products that have no public URL yet; it keeps every frame the same height
   * without claiming a URL that does not exist. Omit for no bar at all.
   */
  chrome?: string | true;
  /** Screenshot's own background, so the frame picks a hairline that shows. */
  shotTone?: "light" | "dark";
};

export type CaseItem = {
  id: string;
  /** Small label: rubro · sector. */
  eyebrow: string;
  title: string;
  /** Optional second line under the title on the detail page. */
  titleTail?: string;
  /** How the operation worked before. */
  problem: string;
  /** What the work consisted of — the process, not the feature list. */
  process: string;
  /** The operational outcome, described qualitatively. */
  solution: string;
  /** What changed day to day. Qualitative — never invented figures. */
  changes: string[];
  /**
   * Heading for `changes`. The default is past tense, which only holds for
   * products actually in use; anything in development or beta overrides it so
   * the page never implies results it has not produced.
   */
  changesLabel?: string;
  /** Small factual note under the visual. */
  microcopy: string;
  href: string;
  /** "shot" uses an image; "schematic" renders the in-house Panacity diagram. */
  visual: "shot" | "schematic";
  /**
   * Omit until a real screenshot exists. The frame then falls back to a
   * typographic panel — sober and finished-looking, never a broken image or an
   * invented mockup. Adding the file later is this one field.
   */
  image?: CaseImage;
  /** Extra screenshots, shown only on the case's own page, after the main one. */
  moreImages?: CaseImage[];
  /**
   * Featured cases get the large treatment at the top of the section, with the
   * screenshot. Every case, featured or not, is listed underneath.
   */
  featured?: boolean;
  /** One line for the featured block's fallback panel: what the product is. */
  summary?: string;
  /** Status shown in listings. Drives the colour. */
  status: "live" | "soon" | "dev";
  /**
   * Overrides the label derived from `status` when the project needs a more
   * precise word than the three defaults — "BETA", "EARLY STAGE".
   */
  statusLabel?: string;
  /** Live, operational product URL (external). */
  liveUrl?: string;
};

export const CASES: CaseItem[] = [
  {
    id: "flowstock",
    eyebrow: "Sistema interno · Gestión comercial",
    title: "FlowStock",
    problem:
      "Compras, recepción, stock, costos y ventas eran procesos que necesitaban convivir sin perder trazabilidad ni control.",
    process:
      "Comprar, pagar, recibir e ingresar mercadería son momentos distintos, y el sistema tenía que reflejarlos como tales. Diseñamos un flujo interno único —con recepciones parciales, ingresos a stock, notas de crédito, cuentas por cobrar y por pagar— donde la información económica se calcula a partir de la operación.",
    solution:
      "FlowStock convierte esos movimientos en un único sistema operativo: compras, ingresos, stock, ventas y cuentas conectados entre sí.",
    changesLabel: "En concreto",
    changes: [
      "Cada movimiento queda trazado, de la compra al ingreso a stock",
      "Las cuentas por cobrar y por pagar salen de la misma operación",
      "El stock bajo mínimo y la mercadería en revisión aparecen solos",
    ],
    summary:
      "Compras, ingresos, stock, ventas y cuentas conectados en un mismo sistema interno.",
    microcopy: "Sistema en desarrollo · en testing real",
    href: "/casos/flowstock",
    visual: "shot",
    featured: true,
    status: "dev",
    image: {
      src: "/case-studies/flowstock.png",
      alt: "Panel de FlowStock: resultado del mes, cuentas por cobrar y por pagar, stock disponible y alertas de reposición.",
      width: 1586,
      height: 992,
      focus: "left top",
      // Corre en local: barra sin dirección, para no inventar una URL.
      chrome: true,
      shotTone: "dark",
    },
  },
  {
    id: "kidu",
    eyebrow: "Producto propio · Familias y salas",
    title: "KIDU",
    problem:
      "Cumpleaños, regalos y colectas terminaban repartidos entre mensajes, transferencias y comprobantes de WhatsApp.",
    process:
      "Diseñamos un espacio permanente por sala en vez de un hilo que se pierde: las familias se suman con un link, registran a sus hijos y sus cumpleaños, y la colecta se abre solo cuando alguien del grupo decide organizar el regalo. No aparece automáticamente.",
    solution:
      "KIDU convierte la sala en un espacio permanente: familias, cumpleaños y colectas organizados desde un único lugar.",
    changesLabel: "En concreto",
    changes: [
      "Quién organiza y quién aportó deja de estar en un chat",
      "El próximo cumpleaños está siempre a la vista",
      "La colecta la abre alguien de la sala, cuando corresponde",
    ],
    summary:
      "Una sala, un link: familias, cumpleaños y colectas en un espacio que no se pierde.",
    microcopy: "Versión web pública · early stage",
    href: "/casos/kidu",
    visual: "shot",
    featured: true,
    status: "dev",
    statusLabel: "EARLY STAGE",
    liveUrl: "https://somoskidu.com",
    image: {
      src: "/case-studies/kidu.png",
      alt: "Landing de KIDU: una sala con la colecta abierta para el regalo de un cumpleaños.",
      width: 1448,
      height: 1086,
      // 4:3 recortado a 16/10: centrado deja entrar el logo arriba y el CTA abajo.
      focus: "center",
      chrome: "somoskidu.com",
      shotTone: "light",
    },
  },
  {
    id: "tdu",
    eyebrow: "Marketplace · Regalos y experiencias",
    title: "Te Debo Una",
    problem:
      'Un "te debo una" muchas veces quedaba en palabras porque regalar implicaba elegir, coordinar y resolver la entrega.',
    process:
      "Separamos el momento de regalar del momento de disfrutar. Una persona elige un comercio y un producto, lo compra como regalo y lo envía; quien lo recibe lo canjea después, en el comercio, cuando le queda cómodo.",
    solution:
      "TDU convierte ese agradecimiento en un regalo concreto: elegís, pagás, lo enviás y la otra persona lo disfruta cuando quiere.",
    changesLabel: "En concreto",
    changes: [
      "Regalar deja de depender de coordinar una entrega",
      "La distancia deja de ser un impedimento",
      "Gastronomía, experiencias, bienestar, entretenimiento y retail en un mismo lugar",
    ],
    summary:
      "Elegís un regalo en un comercio, lo enviás, y la otra persona lo canjea cuando quiere.",
    microcopy: "MVP en beta funcional",
    href: "/casos/tdu",
    visual: "shot",
    featured: true,
    status: "soon",
    statusLabel: "BETA",
    liveUrl: "https://beta.tedebouna.app",
    image: {
      src: "/case-studies/TDU1.png",
      alt: "Home de Te Debo Una: categorías de regalo y productos de un comercio en Mar del Plata.",
      width: 1448,
      height: 1086,
      focus: "50% 35%",
      chrome: "beta.tedebouna.app",
      shotTone: "light",
    },
    moreImages: [
      {
        src: "/case-studies/TDU2.png",
        alt: "Checkout de Te Debo Una: a quién va el regalo, el mensaje y el pago por Mercado Pago.",
        width: 1448,
        height: 1086,
        focus: "50% 35%",
        chrome: "beta.tedebouna.app",
        shotTone: "light",
      },
    ],
  },
  {
    id: "agendallena",
    eyebrow: "Turnos · Salud",
    title: "agendallena",
    problem:
      "Los turnos entraban por WhatsApp, por teléfono y por mostrador, y terminaban anotados en tres lugares distintos. Reconstruir la agenda del día era un trabajo en sí mismo.",
    process:
      "Unificamos los canales de entrada en una sola agenda y automatizamos lo que hasta entonces se hacía mensaje por mensaje: confirmar, cobrar la seña y recordar.",
    solution:
      "Una agenda única por profesional, con reserva directa del paciente, seña por Mercado Pago y recordatorios automáticos. El mismo motor, adaptado a otro rubro, es sacaturno.app.",
    changes: [
      "La agenda del día deja de reconstruirse a mano",
      "Menos ausencias, sin perseguir confirmaciones",
      "Vista por profesional, sin planillas paralelas",
    ],
    summary:
      "Una agenda por profesional donde el paciente reserva, seña y recibe el recordatorio solo.",
    microcopy: "Producto en uso · agenda de turnos",
    href: "/casos/agendallena",
    visual: "shot",
    status: "live",
    liveUrl: "https://agendallena.com.ar",
    image: {
      src: "/case-studies/agendallena.png",
      alt: "Pantalla de agendallena: agenda semanal de turnos para profesionales de la salud.",
      width: 1202,
      height: 750,
      focus: "left top",
      chrome: "agendallena.com.ar",
      shotTone: "dark",
    },
  },
  {
    id: "sacaturno",
    eyebrow: "Turnos · Estética y belleza",
    title: "sacaturno.app",
    problem:
      "Los turnos se coordinaban por WhatsApp: mensajes fuera de hora, señas que había que perseguir y huecos que quedaban sin cubrir porque nadie los veía a tiempo.",
    process:
      "Mapeamos el recorrido completo de un turno —desde la primera consulta hasta el cobro— y separamos lo que necesitaba una persona de lo que podía resolverse solo.",
    solution:
      "Convertimos reservas, señas, confirmaciones y recordatorios en un único flujo operativo que corre sin que nadie tenga que empujarlo.",
    changes: [
      "El cliente reserva solo, a cualquier hora",
      "La seña y la confirmación dejaron de ser una conversación",
      "Una agenda por salón, con la disponibilidad real siempre a la vista",
    ],
    summary:
      "El mismo motor de agendallena, adaptado a salones de estética y belleza.",
    microcopy: "Producto en uso · agenda de turnos",
    href: "/casos/sacaturno",
    visual: "shot",
    status: "live",
    liveUrl: "https://sacaturno.app",
    image: {
      src: "/case-studies/sacaturno.png",
      alt: "Pantalla de sacaturno.app: agenda semanal de turnos para un salón de estética.",
      width: 1167,
      height: 781,
      focus: "left top",
      chrome: "sacaturno.app",
      shotTone: "light",
    },
  },
  {
    id: "coparentar",
    eyebrow: "Producto propio · Coordinación familiar",
    title: "Coparentar",
    problem:
      "Agenda, gastos y acuerdos de crianza dispersos en chats interminables, sin una versión de los hechos que las dos partes reconocieran como válida.",
    process:
      "Diseñamos el producto alrededor de un requisito difícil: que la misma información resulte confiable y neutral para dos personas que no siempre coinciden.",
    solution:
      "Calendario, gastos y documentos en un espacio compartido y neutral: una sola fuente de verdad para ambas partes.",
    changes: [
      "Los acuerdos quedan registrados y a la vista",
      "La coordinación deja de depender del historial de un chat",
      "Menos fricción y menos malentendidos",
    ],
    summary:
      "Calendario, gastos y documentos de crianza compartida en un espacio neutral para ambas partes.",
    microcopy: "Producto propio · agenda, gastos y documentos",
    href: "/casos/coparentar",
    visual: "shot",
    status: "live",
    liveUrl: "https://coparentar.com",
    image: {
      src: "/case-studies/coparentar.png",
      alt: "Pantalla de Coparentar: app de crianza compartida con agenda, gastos y movimientos.",
      width: 1893,
      height: 818,
      focus: "left top",
      chrome: "coparentar.com",
      shotTone: "dark",
    },
  },
  {
    id: "reservacancha",
    eyebrow: "Reservas · Clubes y complejos",
    title: "ReservaCancha.app",
    problem:
      "Los turnos de cancha se coordinaban por teléfono, cuaderno y grupos de WhatsApp. La disponibilidad real solo la sabía quien estaba atendiendo en ese momento.",
    process:
      "Sacamos la disponibilidad de la cabeza de una persona y la pusimos en un lugar donde el jugador y el complejo miran exactamente lo mismo.",
    solution:
      "Disponibilidad en tiempo real, reserva y pago online, y un panel desde donde el complejo gestiona sus canchas sin atender el teléfono.",
    changesLabel: "En concreto",
    changes: [
      "El jugador ve la disponibilidad real y reserva solo",
      "El complejo administra sus horarios desde un panel",
      "Menos llamadas y menos turnos superpuestos",
    ],
    summary:
      "Disponibilidad de canchas en tiempo real, con reserva y pago online.",
    microcopy: "Demo funcional · a semanas de lanzar",
    href: "/casos/reservacancha",
    visual: "shot",
    status: "soon",
    image: {
      src: "/case-studies/reservacancha.png",
      alt: "Landing de ReservaCancha.app: búsqueda de canchas deportivas en tiempo real.",
      width: 1903,
      height: 827,
      focus: "left top",
      // Todavía sin URL pública: barra sin dirección.
      chrome: true,
      shotTone: "dark",
    },
  },
  {
    id: "panacity",
    eyebrow: "Ventas y reposición · Equipo de campo",
    title: "Panacity",
    problem:
      "Los vendedores registran pedidos, cambios de mercadería y reposiciones entre papel, WhatsApp y controles sueltos. El dato llega tarde a la oficina y ya editado.",
    process:
      "Seguimos el recorrido de un vendedor durante su ruta y diseñamos la carga para el momento y el lugar donde el dato realmente se genera: en el comercio.",
    solution:
      "El diseño propone un sistema de campo donde pedidos, devoluciones, stock y seguimiento de comercios se cargan una sola vez, en el momento. El proyecto está en esa etapa: la operación diseñada, todavía sin implementación.",
    changesLabel: "Qué busca resolver",
    changes: [
      "Que el dato se cargue donde ocurre, no al final del día",
      "Trazabilidad por vendedor y por punto de venta",
      "Menos papel y menos reconstrucción posterior",
    ],
    summary:
      "Pedidos, devoluciones y reposición pensados para cargarse en el comercio, no al final del día.",
    microcopy: "Proyecto en diseño · esquema operativo",
    href: "/casos/panacity",
    visual: "schematic",
    status: "dev",
    statusLabel: "EN DISEÑO",
  },
  {
    id: "bicitando",
    eyebrow: "Comunicación · Marca y experiencia",
    title: "Bicitando Mardel",
    titleTail: "Escapadas de bienestar activo",
    problem:
      "Una propuesta de escapadas y actividades al aire libre que se explicaba distinto en cada conversación, y que por eso costaba entender de una sola vez.",
    process:
      "Ordenamos primero el mensaje —qué se ofrece, a quién y por qué importa— y recién después construimos el recorrido digital que lo cuenta.",
    solution:
      "Una identidad y una experiencia web que explican la propuesta una sola vez y bien, y que llevan a la consulta sin vueltas.",
    changes: [
      "La propuesta se entiende sin tener que explicarla",
      "Identidad y tono propios, reconocibles",
      "Un recorrido claro hasta la consulta",
    ],
    summary:
      "Identidad y recorrido digital para una propuesta de escapadas al aire libre.",
    microcopy: "Sitio en vivo · marca y experiencia",
    href: "/casos/bicitando",
    visual: "shot",
    status: "live",
    liveUrl: "https://bicitandomardel.com",
    image: {
      src: "/case-studies/bicitando.png",
      alt: "Landing de Bicitando Mardel: escapada a Sierra de los Padres al atardecer.",
      width: 1710,
      height: 832,
      focus: "left top",
      chrome: "bicitandomardel.com",
      shotTone: "dark",
    },
  },
];

/** The cases that get the large treatment, in order. */
export const FEATURED_CASES = CASES.filter((c) => c.featured);

/** Short status label + tone for listings (derived from real data). */
export function caseStatus(item: CaseItem): {
  label: string;
  tone: CaseItem["status"];
} {
  const label =
    item.statusLabel ??
    { live: "EN USO", soon: "POR LANZAR", dev: "EN DESARROLLO" }[item.status];
  return { label, tone: item.status };
}

/** Human-readable URL (no protocol) for chrome bars / previews. */
export function caseDisplayUrl(item: CaseItem): string | undefined {
  return item.liveUrl?.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export function getCaseSlugs(): string[] {
  return CASES.map((c) => c.id);
}

export function getCaseBySlug(slug: string): CaseItem | undefined {
  return CASES.find((c) => c.id === slug);
}
