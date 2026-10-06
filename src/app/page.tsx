"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  EyeClosed,
  Heart,
  HeartPulse,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  type Variants,
} from "framer-motion";
import { useState, useEffect } from "react";
import { whatsappData } from "@/lib/whatsapp";

const services = [
  {
    number: "01",
    icon: Sparkles,
    title: "Ortodoncia",
    description:
      "Tratamientos personalizados para alinear tu sonrisa y acompañarte durante todo el proceso.",
  },
  {
    number: "02",
    icon: Stethoscope,
    title: "Implantes dentales",
    description:
      "Opciones integrales para recuperar funcionalidad, seguridad y naturalidad.",
  },
  {
    number: "03",
    icon: EyeClosed,
    title: "Sedación consciente",
    description:
      "Métodos seguros y efectivos para garantizar tu comodidad durante los tratamientos.",
  },
  {
    number: "04",
    icon: HeartPulse,
    title: "Estética dental",
    description:
      "Diseñamos tratamientos enfocados en la armonía y naturalidad de tu sonrisa.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Prevención y limpieza",
    description:
      "Cuida tu salud bucal con revisiones y limpieza profesional de forma periódica.",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Atención cercana",
    description: "Un trato personalizado desde tu primera visita.",
  },
  {
    icon: ShieldCheck,
    title: "Tu bienestar primero",
    description: "Cada tratamiento parte de tus necesidades.",
  },
  {
    icon: Sparkles,
    title: "Tecnología y precisión",
    description: "Herramientas modernas para una atención integral.",
  },
  {
    icon: CalendarDays,
    title: "Experiencia sencilla",
    description: "Queremos que cuidar tu sonrisa sea más fácil.",
  },
];

const steps = [
  {
    number: "01",
    title: "Agenda tu visita",
    text: "Elige el momento que mejor se adapte a ti y cuéntanos qué necesitas.",
  },
  {
    number: "02",
    title: "Conocemos tu sonrisa",
    text: "Escuchamos tus objetivos, revisamos tu salud bucal y resolvemos tus dudas.",
  },
  {
    number: "03",
    title: "Creamos tu plan",
    text: "Te explicamos las opciones disponibles para que puedas decidir con tranquilidad.",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

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

const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showWhatsappHint, setShowWhatsappHint] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowWhatsappHint(true);
    }, 1200);

    const hideTimer = setTimeout(() => {
      setShowWhatsappHint(false);
    }, 8500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

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
    <MotionConfig reducedMotion="user">
      <main className="overflow-x-hidden bg-[#F8F5F1] text-[#222222]">
        {/* =======================================================
            NAVBAR
        ======================================================= */}

        <header className="fixed inset-x-0 top-0 z-50">
          <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between rounded-full border border-black/[0.06] bg-white/80 px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl sm:px-6">
              <Link
                href="#inicio"
                className="flex items-center gap-3"
                aria-label="CODANTIS inicio"
              >
                <div className="relative h-9 w-9 shrink-0">
                  <Image
                    src="/img/logobgless.svg"
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

              {/* Desktop nav */}
              <div className="hidden items-center gap-8 md:flex">
                <a
                  href="#tratamientos"
                  className="text-sm text-[#5F5A5D] transition-colors hover:text-[#5B0AB3]"
                >
                  Tratamientos
                </a>

                <a
                  href="#experiencia"
                  className="text-sm text-[#5F5A5D] transition-colors hover:text-[#5B0AB3]"
                >
                  Nuestra experiencia
                </a>

                <a
                  href="#proceso"
                  className="text-sm text-[#5F5A5D] transition-colors hover:text-[#5B0AB3]"
                >
                  Tu visita
                </a>

                <a
                  href="#contacto"
                  className="text-sm text-[#5F5A5D] transition-colors hover:text-[#5B0AB3]"
                >
                  Contacto
                </a>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={whatsappData.citaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden rounded-full bg-[#5B0AB3] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#6D14C8] hover:shadow-lg md:inline-flex"
                >
                  Agendar cita
                </a>

                <button
                  type="button"
                  onClick={() => setMenuOpen((value) => !value)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0EBF7] text-[#5B0AB3] md:hidden"
                  aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                  aria-expanded={menuOpen}
                >
                  {menuOpen ? <X size={19} /> : <Menu size={19} />}
                </button>
              </div>
            </nav>

            <AnimatePresence>
              {menuOpen && (
                <>
                  {/* Backdrop */}
                  <motion.button
                    type="button"
                    aria-label="Cerrar menú"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => setMenuOpen(false)}
                    className="fixed inset-0 top-[88px] z-[-1] bg-black/10 backdrop-blur-[2px] md:hidden"
                  />

                  {/* Menu panel */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -18,
                      scale: 0.98,
                      transformOrigin: "top",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -12,
                      scale: 0.98,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: "easeOut",
                    }}
                    className="absolute left-0 right-0 top-[72px] px-4 md:hidden"
                  >
                    <nav className="overflow-hidden rounded-[2rem] border border-black/[0.05] bg-white/95 p-5 shadow-[0_20px_60px_rgba(35,20,45,0.12)] backdrop-blur-2xl">
                      {/* Menu heading */}
                      <div className="flex items-center justify-between px-2 pb-4">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7C6C87]">
                            Menú
                          </p>

                          <p className="mt-1 font-[var(--font-heading)] text-2xl text-[#272329]">
                            Descubre CODANTIS
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => setMenuOpen(false)}
                          aria-label="Cerrar menú"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F1EBF7] text-[#5B0AB3] transition-transform duration-200 hover:rotate-90"
                        >
                          <X size={17} />
                        </button>
                      </div>

                      {/* Links */}
                      <div className="mt-2">
                        {[
                          ["Tratamientos", "#tratamientos"],
                          ["Nuestra experiencia", "#experiencia"],
                          ["Tu visita", "#proceso"],
                          ["Contacto", "#contacto"],
                        ].map(([label, href], index) => (
                          <motion.a
                            key={href}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.35,
                              delay: 0.08 + index * 0.06,
                              ease: "easeOut",
                            }}
                            className="group flex items-center justify-between border-t border-[#EEE8EE] px-2 py-4"
                          >
                            <span className="text-[15px] font-medium text-[#3E3940] transition-colors duration-200 group-hover:text-[#5B0AB3]">
                              {label}
                            </span>

                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4EFF8] text-[#5B0AB3] transition-all duration-200 group-hover:translate-x-1 group-hover:bg-[#EDE6FA]">
                              <ArrowUpRight size={15} />
                            </span>
                          </motion.a>
                        ))}
                      </div>

                      {/* CTA */}
                      <motion.a
                        href={whatsappData.citaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.34,
                          ease: "easeOut",
                        }}
                        className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#5B0AB3] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(91,10,179,0.2)] transition-all duration-300 active:scale-[0.98]"
                      >
                        <MessageCircle size={17} />
                        Agendar cita por WhatsApp
                        <ArrowUpRight size={16} />
                      </motion.a>

                      {/* Small footer */}
                      <div className="mt-5 flex items-center justify-between px-2 text-[9px] font-medium uppercase tracking-[0.18em] text-[#AAA1AA]">
                        <span>Sonrisas saludables</span>
                        <span>CODANTIS</span>
                      </div>
                    </nav>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </header>

        {/* =======================================================
            HERO
        ======================================================= */}

        <section
          id="inicio"
          className="relative flex min-h-[100dvh] items-center pt-24 sm:pt-28 lg:min-h-screen"
        >
          <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-8 lg:py-20">
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="max-w-2xl"
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#EDE6FA] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#5B0AB3]">
                  Odontología integral
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-7 max-w-xl font-[var(--font-heading)] text-[clamp(3.25rem,16vw,7.1rem)] font-normal leading-[0.89] tracking-[-0.045em] text-[#202024]"
              >
                Tu sonrisa,
                <br />
                <span className="italic text-[#5B0AB3]">
                  nuestra prioridad.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-xl text-base leading-8 text-[#656168] sm:text-lg"
              >
                Atención dental moderna, cercana y personalizada para cuidar tu
                salud y acompañarte en cada etapa de tu sonrisa.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="w-full sm:w-auto mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href={whatsappData.citaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#5B0AB3] min-h-12 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6D14C8] hover:shadow-[0_20px_45px_rgba(91,10,179,0.22)] w-full sm:w-auto"
                >
                  Agendar cita
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="#tratamientos"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D0C5DA] bg-white/60 min-h-12 px-6 py-3.5 text-sm font-semibold text-[#5B0AB3] transition-all duration-300 hover:-translate-y-1 hover:border-[#5B0AB3]"
                >
                  Conoce nuestros tratamientos
                  <ChevronRight size={16} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] sm:aspect-[4/4.5] sm:rounded-[2.5rem]">
                <Image
                  src="/img/recepcion.png"
                  alt="Recepción de CODANTIS"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
                  <div className="rounded-2xl border border-white/20 bg-black/20 px-4 py-3 text-white backdrop-blur-md">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] opacity-70">
                      CODANTIS
                    </p>
                    <p className="mt-1 text-sm">Un espacio pensado para ti.</p>
                  </div>

                  <div className="hidden h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md sm:flex">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-xl sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE6FA] text-[#5B0AB3]">
                    <Heart size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-[#222222]">
                      Tu bienestar
                    </p>
                    <p className="mt-0.5 text-[11px] text-[#777777]">
                      siempre al centro
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =======================================================
            BENEFITS
        ======================================================= */}

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="border-y border-[#E8E0D8] bg-white/60"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-[#E8E0D8] px-6 sm:grid-cols-4 sm:divide-y-0 lg:px-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  variants={fadeUp}
                  className="px-5 py-7 sm:px-6 sm:py-9"
                >
                  <Icon
                    size={21}
                    strokeWidth={1.7}
                    className="text-[#6B1BC1]"
                  />

                  <h2 className="mt-4 text-sm font-semibold text-[#28262A]">
                    {benefit.title}
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-[#777279] sm:max-w-[220px]">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* =======================================================
    TREATMENTS
======================================================= */}

        <section
          id="tratamientos"
          className="scroll-mt-28 bg-[#F8F5F1] px-6 py-24 lg:px-8 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">
            {/* Section heading */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={container}
              className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
            >
              <div className="max-w-2xl">
                <motion.p
                  variants={fadeUp}
                  className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]"
                >
                  Tratamientos
                </motion.p>

                <motion.h2
                  variants={fadeUp}
                  className="mt-5 max-w-2xl font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl"
                >
                  Salud, estética y confianza
                  <span className="italic text-[#6D22C7]">
                    {" "}
                    en un solo lugar.
                  </span>
                </motion.h2>
              </div>

              <motion.p
                variants={fadeUp}
                className="max-w-sm text-sm leading-7 text-[#777279]"
              >
                Conoce algunas de las áreas en las que podemos acompañarte.
                Nuestro enfoque parte siempre de tus necesidades.
              </motion.p>
            </motion.div>

            {/* Treatment cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={container}
              className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <motion.article
                    key={service.title}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="group relative overflow-hidden rounded-[1.75rem] border border-[#E7DED5] bg-white p-6 shadow-[0_12px_35px_rgba(46,30,20,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(46,30,20,0.08)] sm:p-7"
                  >
                    {/* Icon + number */}
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EFE8F8] text-[#5B0AB3] transition-transform duration-300 group-hover:rotate-6">
                        <Icon size={20} strokeWidth={1.7} />
                      </div>

                      <span className="font-[var(--font-heading)] text-3xl text-[#E8E0EC]">
                        {service.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-8 text-lg font-semibold text-[#252328]">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-6 text-[#747078]">
                      {service.description}
                    </p>

                    {/* Link */}
                    <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#5B0AB3]">
                      <span>Conocer más</span>

                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>

                    {/* Hover glow */}
                    <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#F3EAFB] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* =======================================================
            EXPERIENCE
        ======================================================= */}

        <section
          id="experiencia"
          className="scroll-mt-28 bg-white px-6 py-24 lg:px-8 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] sm:aspect-[4/4.5] sm:rounded-[2.5rem]">
                <Image
                  src="/img/dentistas.jpeg"
                  alt="Espacio de recepción CODANTIS"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  style={{ objectPosition: "65% center" }}
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-[#321F18]/20 via-transparent to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.7 }}
                className="absolute -bottom-6 -right-4 max-w-[230px] rounded-3xl bg-[#EDE6FA] p-6 shadow-[0_20px_45px_rgba(75,32,103,0.12)] sm:-right-7"
              >
                <p className="font-[var(--font-heading)] text-2xl leading-tight text-[#43205F]">
                  “Queremos que venir al dentista se sienta diferente.”
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={container}
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]"
              >
                La experiencia CODANTIS
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-5 max-w-xl font-[var(--font-heading)] text-5xl font-normal leading-[0.98] tracking-[-0.035em] text-[#222126] sm:text-6xl"
              >
                Más que una sonrisa.
                <br />
                <span className="italic text-[#5B0AB3]">Una experiencia.</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-xl text-base leading-8 text-[#6E6870]"
              >
                Sabemos que una visita al dentista puede generar nervios o
                incertidumbre. Por eso queremos construir una experiencia mucho
                más humana: espacios agradables, comunicación clara y atención
                personalizada.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 grid gap-4 sm:grid-cols-2"
              >
                {[
                  "Atención personalizada",
                  "Comunicación clara",
                  "Espacio agradable",
                  "Plan pensado para ti",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F0E8F8] text-[#5B0AB3]">
                      <Check size={14} strokeWidth={2.5} />
                    </span>

                    <span className="text-sm font-medium text-[#454047]">
                      {item}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =======================================================
            PROCESS
        ======================================================= */}

        <section
          id="proceso"
          className="scroll-mt-28 bg-[#EFE7DE] px-6 py-24 lg:px-8 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={container}
              className="max-w-2xl"
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]"
              >
                Tu primera visita
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.98] tracking-[-0.035em] text-[#252127] sm:text-6xl"
              >
                Simple desde el
                <span className="italic text-[#5B0AB3]"> primer paso.</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl text-base leading-8 text-[#6F686F]"
              >
                Queremos que sepas qué esperar antes de llegar. Sin
                complicaciones y con toda la información que necesitas.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={container}
              className="mt-14 grid gap-5 lg:grid-cols-3"
            >
              {steps.map((step) => (
                <motion.article
                  key={step.number}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="rounded-[2rem] border border-black/[0.06] bg-[#F8F5F1]/75 p-7 backdrop-blur-sm"
                >
                  <span className="font-[var(--font-heading)] text-5xl text-[#D3C2DA]">
                    {step.number}
                  </span>

                  <h3 className="mt-9 text-xl font-semibold text-[#28242A]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#726B71]">
                    {step.text}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =======================================================
            CTA
        ======================================================= */}

        <section
          id="contacto"
          className="scroll-mt-28 bg-[#5B0AB3] px-6 py-20 lg:px-8 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={container}
              className="relative overflow-hidden rounded-[2.5rem] bg-[#6A1BC5] px-7 py-12 sm:px-12 lg:px-16 lg:py-16"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-[#C8A7FF]/20 blur-3xl" />

              <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
                <div className="max-w-2xl">
                  <motion.p
                    variants={fadeUp}
                    className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65"
                  >
                    Tu próxima visita
                  </motion.p>

                  <motion.h2
                    variants={fadeUp}
                    className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-white sm:text-6xl"
                  >
                    Tu mejor sonrisa
                    <br />
                    también cuenta
                    <span className="italic text-[#DCC9FA]"> historias.</span>
                  </motion.h2>

                  <motion.p
                    variants={fadeUp}
                    className="mt-6 max-w-lg text-base leading-7 text-white/75"
                  >
                    Estamos listos para acompañarte. Escríbenos y descubre qué
                    podemos hacer por tu sonrisa.
                  </motion.p>
                </div>

                <motion.a
                  variants={fadeUp}
                  href={whatsappData.contactoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#5B0AB3] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:w-auto"
                >
                  <MessageCircle size={18} />
                  Agenda por WhatsApp
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =======================================================
            FOOTER
        ======================================================= */}

        <footer className="bg-[#211D21] px-6 py-14 text-white lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr]">
              <div>
                <div className="text-lg font-semibold tracking-[0.13em]">
                  CODANTIS -<p>SONRISAS SALUDABLES</p>
                </div>

                <p className="mt-3 max-w-xs text-sm leading-6 text-white/55">
                  Odontología integral con un enfoque cercano, humano y
                  personalizado.
                  <br />
                  <br />
                  Dentistas con décadas de experiencia en Cumbres, Monterrey,
                  N.L. que te acompañan en cada etapa de tu sonrisa.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  Enlaces
                </p>

                <div className="mt-4 flex flex-col gap-3 text-sm text-white/65">
                  <a href="#tratamientos" className="hover:text-white">
                    Tratamientos
                  </a>

                  <a href="#experiencia" className="hover:text-white">
                    Nuestra experiencia
                  </a>

                  <a href="#proceso" className="hover:text-white">
                    Tu visita
                  </a>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  Contacto
                </p>

                <div className="mt-4 space-y-3 text-sm text-white/65">
                  <div className="flex items-start gap-3">
                    <MapPin size={17} className="mt-0.5 shrink-0" />
                    <span>
                      C. 15a Avenida 948-2 Sector, Colonial Cumbres, 64610
                      Monterrey, N.L.
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={17} className="mt-0.5 shrink-0" />
                    <span>
                      <a href="tel:+528183114358" className="hover:text-white">
                        81 83 11 43 58
                      </a>
                    </span>
                  </div>

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
                        <span className="underline-offset-4 hover:underline">
                          drrodolfo@codantis.com.mx
                        </span>
                      )}
                    </button>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock3 size={17} className="mt-0.5 shrink-0" />
                    <a
                      href={whatsappData.horariosUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 transition-colors hover:text-white"
                    >
                      <span>Consulta nuestros horarios</span>
                    </a>
                  </div>

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

            <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.16em] text-white/35 sm:flex-row">
              <span>
                © 2026 CODANTIS - Powered by:{" "}
                <a
                  href="https://www.instagram.com/devline.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Devl;ne México
                </a>
              </span>

              <span>Odontología integral</span>
            </div>
          </div>
        </footer>

        {/* =======================================================
    FLOATING WHATSAPP
======================================================= */}

        <div className="fixed bottom-5 right-5 z-[60] flex items-end gap-3 sm:bottom-6 sm:right-6">
          <AnimatePresence>
            {showWhatsappHint && (
              <motion.a
                href={whatsappData.contactoUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  x: 15,
                  scale: 0.92,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: 10,
                  scale: 0.94,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="mb-1 rounded-full border border-black/[0.05] bg-white/95 px-3.5 py-2.5 shadow-[0_12px_35px_rgba(0,0,0,0.10)] backdrop-blur-xl"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EDE6FA] text-[#5B0AB3]">
                    <MessageCircle size={14} strokeWidth={2} />
                  </div>

                  <div className="whitespace-nowrap">
                    <p className="text-[10px] font-semibold text-[#2A272B] sm:text-[11px]">
                      ¿Tienes dudas?
                    </p>

                    <p className="mt-0.5 text-[9px] text-[#777279] sm:text-[10px]">
                      Escríbenos
                    </p>
                  </div>
                </div>
              </motion.a>
            )}
          </AnimatePresence>

          <motion.a
            href={whatsappData.contactoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contáctanos por WhatsApp"
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.8,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#5B0AB3] text-white shadow-[0_12px_35px_rgba(91,10,179,0.28)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(91,10,179,0.38)] sm:h-15 sm:w-15"
          >
            <motion.span
              aria-hidden="true"
              className="absolute inset-0 rounded-full border border-[#5B0AB3]"
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.45, 0, 0.45],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />

            <MessageCircle
              size={24}
              strokeWidth={1.9}
              className="relative z-10"
            />
          </motion.a>
        </div>
      </main>
    </MotionConfig>
  );
}
