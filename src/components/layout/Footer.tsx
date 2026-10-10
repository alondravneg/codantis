"use client";

import Image from "next/image";
import {
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
            {/* Social media */}
            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                Sigamos en contacto
              </p>
              <div>
                <p className="max-w-xs text-sm leading-6 text-white/55">
                  Conoce más sobre nuestra clínica, tratamientos y consejos para
                  cuidar tu sonrisa.
                </p>
              </div>

              <div className="mt-4 flex items-center gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/codantis_"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de CODANTIS"
                  title="Instagram"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white/75 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A7FF]/50 hover:bg-[#5B0AB3]/40 hover:text-[#C8A7FF]"
                >
                  <span
                    aria-hidden="true"
                    className="h-5 w-5 bg-current transition-transform duration-300 group-hover:scale-110"
                    style={{
                      maskImage: "url('/img/icons/instagram.svg')",
                      WebkitMaskImage: "url('/img/icons/instagram.svg')",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                    }}
                  />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1F7BbZFzQ6/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook de CODANTIS"
                  title="Facebook"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/65 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A7FF]/40 hover:bg-[#5B0AB3]/30 hover:text-white"
                >
                  <span
                    aria-hidden="true"
                    className="h-5 w-5 bg-current transition-transform duration-300 group-hover:scale-110"
                    style={{
                      maskImage: "url('/img/icons/facebook.svg')",
                      WebkitMaskImage: "url('/img/icons/facebook.svg')",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                    }}
                  />
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappData.contactoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp de CODANTIS"
                  title="WhatsApp"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A7FF]/40 hover:bg-[#5B0AB3]/30"
                >
                  <Image
                    src="/img/icons/whatsapp.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              </div>
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
                    <span>drrodolfo@codantis.com.mx</span>
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
