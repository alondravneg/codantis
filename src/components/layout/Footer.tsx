"use client";

import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Rocket,
} from "lucide-react";
import { useState } from "react";
import { whatsappData } from "@/lib/whatsapp";

const address =
  "C. 15a Avenida 948-2 Sector, Colonial Cumbres, 64610 Monterrey, N.L.";

export default function Footer() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    const email = "drrodolfo@codantis.com.mx";

    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);

      setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    } catch (error) {
      console.error("No se pudo copiar el correo:", error);
    }
  };

  return (
    <footer className="bg-[#211D21] px-6 py-14 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main footer */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="text-lg font-semibold tracking-[0.13em]">
              CODANTIS
              <p className="mt-1 text-xs font-medium tracking-[0.16em] text-white/50">
                SONRISAS SALUDABLES
              </p>
            </div>

            <div className="mt-5 max-w-xs text-sm leading-6 text-white/55">
              <p>
                Odontología integral con un enfoque cercano, humano y
                personalizado.
              </p>

              <p className="mt-4">
                Dentistas con décadas de experiencia en Cumbres, Monterrey, N.L.
                que te acompañan en cada etapa de tu sonrisa.
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Enlaces
            </p>

            <div className="mt-4 flex flex-col gap-3 text-sm text-white/65">
              <a
                href="/#tratamientos"
                className="transition-colors hover:text-white"
              >
                Tratamientos
              </a>

              <a
                href="/#experiencia"
                className="transition-colors hover:text-white"
              >
                Nuestra experiencia
              </a>

              <a
                href="/#proceso"
                className="transition-colors hover:text-white"
              >
                Tu visita
              </a>

              <a
                href="/contacto"
                className="transition-colors hover:text-white"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Contacto
            </p>

            <div className="mt-4 space-y-4 text-sm text-white/65">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0" />

                <a
                  href="/contacto"
                  className="leading-6 transition-colors hover:text-white"
                >
                  {address}
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone size={17} className="mt-0.5 shrink-0" />

                <a
                  href="tel:+528183114358"
                  className="transition-colors hover:text-white"
                >
                  81 83 11 43 58
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail size={17} className="mt-0.5 shrink-0" />

                <button
                  type="button"
                  onClick={copyEmail}
                  className="text-left transition-colors hover:text-white"
                  aria-label="Copiar correo electrónico"
                >
                  {emailCopied ? (
                    <span className="text-[#C8A7FF]">¡Correo copiado!</span>
                  ) : (
                    <span>
                      drrodolfo@codantis.com.mx
                    </span>
                  )}
                </button>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock3 size={17} className="mt-0.5 shrink-0" />

                <a
                  href={whatsappData.horariosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Consulta nuestros horarios
                </a>
              </div>

              {/* WhatsApp */}
              <a
                href={whatsappData.contactoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.16em] text-white/35 sm:flex-row">
          <span className="flex items-center gap-1.5 whitespace-nowrap text-[9px] sm:text-[10px]">
            © 2026 CODANTIS · Powered by:
            <a
              href="https://www.instagram.com/devline.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 hover:text-white"
            >
              Devl;ne México
              <Rocket
                size={10}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </span>

          <span>Odontología integral</span>
        </div>
      </div>
    </footer>
  );
}
