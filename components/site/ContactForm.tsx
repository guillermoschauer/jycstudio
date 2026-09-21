"use client";

import { useId, useState } from "react";
import { SITE, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Four fields, no backend, no third-party form service: submitting composes the
 * message and hands it to WhatsApp (or to the mail client), which is where the
 * conversation would end up anyway. Nothing is stored and nothing is sent to a
 * server, so there is no data to protect and no integration to keep alive.
 *
 * The button is a real submit, so browser validation and Enter-to-send work;
 * the window opens inside the user gesture, so pop-up blockers allow it.
 *
 * On styling: the fields used to be underlines, which read as decorated text
 * rather than as inputs — nothing said "click here". They are boxes now, each
 * with its own surface and border, because that is the only shape people
 * recognise as a field. The restraint is in the contrast (4% and 6% lifts off
 * carbon) and the spacing, not in removing the affordance.
 */

type Fields = {
  nombre: string;
  empresa: string;
  contacto: string;
  mejorar: string;
};

const EMPTY: Fields = { nombre: "", empresa: "", contacto: "", mejorar: "" };

function composeMessage(f: Fields) {
  return [
    `Hola ${SITE.name}, soy ${f.nombre.trim()}.`,
    f.empresa.trim() && `Trabajo en ${f.empresa.trim()}.`,
    `Me pueden contactar en: ${f.contacto.trim()}.`,
    "",
    "Lo que me gustaría mejorar:",
    f.mejorar.trim(),
  ]
    .filter(Boolean)
    .join("\n");
}

const fieldCls = cn(
  "w-full rounded-[10px] border bg-white/[0.04] px-4 py-3.5 text-[1rem] text-ivory",
  "border-[color:var(--color-hairline-dark)] placeholder:text-gris/75",
  "transition-colors duration-200",
  "hover:border-ivory/25",
  // The border carries the focus state; the global :focus-visible ring still
  // fires for keyboard users on top of it (see globals.css).
  "focus:border-verde-on-dark focus:bg-white/[0.06] focus:outline-none",
);

const labelCls = "mb-2 block text-[0.82rem] font-medium text-ivory/75";

function Optional() {
  return <span className="font-normal text-gris">(opcional)</span>;
}

export function ContactForm({ className }: { className?: string }) {
  const id = useId();
  const [values, setValues] = useState<Fields>(EMPTY);
  const [sent, setSent] = useState(false);

  const set =
    (key: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [key]: e.target.value }));
      // Editing after sending means a new message is being composed; the old
      // confirmation would otherwise describe a WhatsApp window that no longer
      // matches what the fields say.
      setSent(false);
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.open(whatsappUrl(composeMessage(values)), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const mailtoFallback = `mailto:${SITE.email}?subject=${encodeURIComponent(
    `Consulta de ${values.nombre.trim() || "un negocio"}`,
  )}&body=${encodeURIComponent(composeMessage(values))}`;

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        // A container, not a card: no shadow, no elevation, a 2% lift and a
        // hairline. It groups the fields without announcing itself.
        "rounded-2xl border border-[color:var(--color-hairline-dark)] bg-white/[0.02] p-6 sm:p-8 lg:p-10",
        className,
      )}
    >
      <p className="mb-8 max-w-[46ch] text-pretty text-[0.95rem] leading-relaxed text-gris">
        Contanos qué está pasando. No hace falta que tengas definida la solución.
      </p>

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-x-5">
        <div>
          <label htmlFor={`${id}-nombre`} className={labelCls}>
            Nombre
          </label>
          <input
            id={`${id}-nombre`}
            name="nombre"
            required
            autoComplete="name"
            value={values.nombre}
            onChange={set("nombre")}
            className={fieldCls}
            placeholder="Guillermo"
          />
        </div>

        <div>
          <label htmlFor={`${id}-empresa`} className={labelCls}>
            Empresa <Optional />
          </label>
          <input
            id={`${id}-empresa`}
            name="empresa"
            autoComplete="organization"
            value={values.empresa}
            onChange={set("empresa")}
            className={fieldCls}
            placeholder="Nombre de tu empresa"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${id}-contacto`} className={labelCls}>
            Email o WhatsApp
          </label>
          <input
            id={`${id}-contacto`}
            name="contacto"
            required
            value={values.contacto}
            onChange={set("contacto")}
            className={fieldCls}
            placeholder="tu@email.com o +54 9 ..."
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${id}-mejorar`} className={labelCls}>
            ¿Qué te gustaría mejorar?
          </label>
          <textarea
            id={`${id}-mejorar`}
            name="mejorar"
            required
            rows={5}
            value={values.mejorar}
            onChange={set("mejorar")}
            className={cn(fieldCls, "resize-y leading-relaxed")}
            placeholder="Contanos qué parte de tu operación hoy te está haciendo perder tiempo."
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <button
          type="submit"
          className="group inline-flex min-h-[3.25rem] w-full items-center justify-center gap-3 rounded-[10px] bg-ivory px-7 text-[0.95rem] font-semibold tracking-[-0.01em] text-carbon transition-colors duration-200 hover:bg-white sm:w-auto"
        >
          {/* El botón nombra lo que realmente pasa al apretarlo. */}
          Abrir consulta en WhatsApp
          <span
            aria-hidden
            className="transition-transform duration-300 ease-out group-hover:translate-x-0.5"
          >
            →
          </span>
        </button>

        <a
          href={mailtoFallback}
          className="text-center text-[0.92rem] text-gris underline-offset-4 transition-colors duration-200 hover:text-ivory hover:underline sm:text-left"
        >
          Prefiero escribir por mail
        </a>
      </div>

      <p aria-live="polite" className="mt-6 text-[0.85rem] leading-relaxed text-gris">
        {sent
          ? `Abrimos WhatsApp con el mensaje listo. Si no se abrió, escribinos a ${SITE.email}.`
          : "El formulario no guarda nada: arma el mensaje y lo abre en WhatsApp para que lo revises antes de enviarlo."}
      </p>
    </form>
  );
}
