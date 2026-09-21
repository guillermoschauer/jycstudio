"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
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

const fieldCls =
  // Placeholders sit at /75 (4.6:1 on carbon) so the hint stays legible, not
  // decorative — the label above already carries the field name.
  "w-full border-b border-[color:var(--color-hairline-dark)] bg-transparent py-3 text-[1rem] text-ivory placeholder:text-gris/75 transition-colors duration-200 focus:border-verde-on-dark focus:outline-none";

const labelCls = "eyebrow mb-1 block text-[0.6rem] tracking-[0.16em] text-gris";

export function ContactForm({ className }: { className?: string }) {
  const id = useId();
  const [values, setValues] = useState<Fields>(EMPTY);
  const [sent, setSent] = useState(false);

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.open(whatsappUrl(composeMessage(values)), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const mailtoFallback = `mailto:${SITE.email}?subject=${encodeURIComponent(
    `Consulta de ${values.nombre.trim() || "un negocio"}`,
  )}&body=${encodeURIComponent(composeMessage(values))}`;

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-7", className)} noValidate={false}>
      <div className="grid gap-7 sm:grid-cols-2">
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
            placeholder="Cómo te llamás"
          />
        </div>

        <div>
          <label htmlFor={`${id}-empresa`} className={labelCls}>
            Empresa <span className="normal-case tracking-normal">(opcional)</span>
          </label>
          <input
            id={`${id}-empresa`}
            name="empresa"
            autoComplete="organization"
            value={values.empresa}
            onChange={set("empresa")}
            className={fieldCls}
            placeholder="Dónde trabajás"
          />
        </div>
      </div>

      <div>
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
          placeholder="Por dónde te respondemos"
        />
      </div>

      <div>
        <label htmlFor={`${id}-mejorar`} className={labelCls}>
          ¿Qué te gustaría mejorar?
        </label>
        <textarea
          id={`${id}-mejorar`}
          name="mejorar"
          required
          rows={3}
          value={values.mejorar}
          onChange={set("mejorar")}
          className={cn(fieldCls, "resize-y leading-relaxed")}
          placeholder="Contanos qué parte del día a día te está costando"
        />
      </div>

      <div className="mt-2 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
        <Button type="submit" tone="dark" block>
          Contame cómo trabajan
        </Button>
        <a
          href={mailtoFallback}
          className="text-[0.92rem] text-gris underline-offset-4 transition-colors duration-200 hover:text-ivory hover:underline"
        >
          Prefiero mandarlo por mail
        </a>
      </div>

      <p aria-live="polite" className="min-h-[1.25rem] text-[0.88rem] text-gris">
        {sent
          ? "Abrimos WhatsApp con el mensaje listo. Si no se abrió, escribinos a " +
            SITE.email +
            "."
          : "El formulario no guarda nada: arma el mensaje y lo abre en WhatsApp para que lo revises antes de enviarlo."}
      </p>
    </form>
  );
}
