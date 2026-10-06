"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

import { whatsappData } from "@/lib/whatsapp";
import Footer from "@/components/layout/Footer";

const address =
  "C. 15a Avenida 948-2 Sector, Colonial Cumbres, 64610 Monterrey, N.L.";

const phone = "+528183114358";

const email = "drrodolfo@codantis.com.mx";

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(address);

const wazeUrl =
  "https://waze.com/ul?q=" + encodeURIComponent(address) + "&navigate=yes";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export default function ContactoPage() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
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
    <main className="min-h-screen overflow-x-hidden bg-[#F8F5F1] text-[#222222]">
      {/* =======================================================
          NAVBAR
      ======================================================= */}

      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between rounded-full border border-black/[0.06] bg-white/80 px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl sm:px-6">
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label="CODANTIS inicio"
            >
              <div className="relative h-9 w-9 shrink-0">
                <Image
                  src="/icon.svg"
                  alt="CODANTIS"
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </div>

              <div className="leading-none">
                <div className="text-sm font-semibold tracking-[0.12em]">
                  CODANTIS
                </div>

                <div className="mt-1 text-[7px] font-medium tracking-[0.28em] text-[#737373]">
                  ODONTOLOGÍA INTEGRAL
                </div>
              </div>
            </Link>

            <Link
              href={whatsappData.citaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#5B0AB3] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#6D14C8] hover:shadow-lg"
            >
              Agendar cita
              <ArrowUpRight size={16} />
            </Link>
          </nav>
        </div>
      </header>

      {/* =======================================================
          HERO
      ======================================================= */}

      <section className="px-6 pb-16 pt-36 lg:px-8 lg:pb-20 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-4xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Contacto
            </p>

            <h1 className="mt-5 font-[var(--font-heading)] text-[clamp(3.6rem,8vw,7rem)] font-normal leading-[0.92] tracking-[-0.045em] text-[#222126]">
              Estamos aquí
              <br />
              <span className="italic text-[#5B0AB3]">para ti.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#6F6870] sm:text-lg">
              Estamos en Cumbres, Monterrey. Escríbenos, llámanos o encuentra la
              ruta que te resulte más cómoda para llegar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
          CONTACT / MAP
      ======================================================= */}

      <section className="px-6 pb-24 lg:px-8 lg:pb-32">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="rounded-[2rem] bg-[#EFE7DE] p-7 sm:p-9 lg:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C6C87]">
              Nuestra sucursal
            </p>

            <h2 className="mt-5 max-w-md font-[var(--font-heading)] text-4xl font-normal leading-[0.98] tracking-[-0.035em] text-[#272329] sm:text-5xl">
              Tu próxima visita
              <br />
              <span className="italic text-[#5B0AB3]">comienza aquí.</span>
            </h2>

            <div className="mt-10 space-y-7">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EDE6FA] text-[#5B0AB3]">
                  <MapPin size={19} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8B8188]">
                    Dirección
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#464147]">
                    {address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EDE6FA] text-[#5B0AB3]">
                  <Phone size={18} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8B8188]">
                    Teléfono
                  </p>

                  <a
                    href={`tel:${phone}`}
                    className="mt-2 block text-sm text-[#464147] transition-colors hover:text-[#5B0AB3]"
                  >
                    81 83 11 43 58
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EDE6FA] text-[#5B0AB3]">
                  <Mail size={18} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8B8188]">
                    Correo
                  </p>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="mt-2 text-left text-sm text-[#464147] transition-colors hover:text-[#5B0AB3]"
                  >
                    {emailCopied ? "¡Correo copiado!" : email}
                  </button>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EDE6FA] text-[#5B0AB3]">
                  <Clock3 size={18} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8B8188]">
                    Horarios
                  </p>

                  <a
                    href={whatsappData.horariosUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-sm text-[#464147] transition-colors hover:text-[#5B0AB3]"
                  >
                    Consulta nuestros horarios
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href={whatsappData.contactoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#5B0AB3] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6D14C8] hover:shadow-[0_18px_40px_rgba(91,10,179,0.2)]"
            >
              <MessageCircle size={18} />
              Contáctanos por WhatsApp
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="overflow-hidden rounded-[2rem] border border-[#E7DED5] bg-white shadow-[0_20px_60px_rgba(46,30,20,0.06)]"
          >
            <div className="flex items-center justify-between border-b border-[#EEE7DF] px-5 py-4 sm:px-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B8188]">
                  Ubicación
                </p>

                <p className="mt-1 text-sm font-medium text-[#302C31]">
                  Colonial Cumbres, Monterrey
                </p>
              </div>

              <MapPin size={19} strokeWidth={1.8} className="text-[#5B0AB3]" />
            </div>

            {/* MAP FRAME */}
            <div className="relative min-h-[420px] bg-[#EDE8E1] sm:min-h-[520px]">
              <iframe
                title="Ubicación de CODANTIS"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  address,
                )}&output=embed`}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
          NAVIGATION BUTTONS
      ======================================================= */}

      <section className="px-6 pb-24 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="grid gap-4 sm:grid-cols-2"
          >
            {/* Google Maps */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[150px] flex-col justify-between rounded-[2rem] border border-[#DDD3E2] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9B4D8] hover:shadow-[0_20px_45px_rgba(46,30,20,0.07)] sm:p-8"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EFE8F8] text-[#5B0AB3]">
                  <MapPin size={19} />
                </div>

                <ArrowUpRight
                  size={19}
                  className="text-[#8A7E8E] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B8188]">
                  Cómo llegar
                </p>

                <h3 className="mt-2 text-lg font-semibold text-[#29262B]">
                  Abrir en Google Maps
                </h3>
              </div>
            </a>

            {/* Waze */}
            <a
              href={wazeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[150px] flex-col justify-between rounded-[2rem] border border-[#DDD3E2] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9B4D8] hover:shadow-[0_20px_45px_rgba(46,30,20,0.07)] sm:p-8"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EFE8F8] text-[#5B0AB3]">
                  <Navigation size={19} />
                </div>

                <ArrowUpRight
                  size={19}
                  className="text-[#8A7E8E] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B8188]">
                  Cómo llegar
                </p>

                <h3 className="mt-2 text-lg font-semibold text-[#29262B]">
                  Abrir en Waze
                </h3>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
          FINAL CTA
      ======================================================= */}

      <section className="bg-[#5B0AB3] px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end"
          >
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                ¿Listo para empezar?
              </p>

              <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-white sm:text-6xl">
                Tu mejor sonrisa
                <br />
                <span className="italic text-[#DCC9FA]">
                  también cuenta historias.
                </span>
              </h2>
            </div>

            <a
              href={whatsappData.citaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#5B0AB3] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:w-auto"
            >
              <MessageCircle size={18} />
              Agendar cita
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
