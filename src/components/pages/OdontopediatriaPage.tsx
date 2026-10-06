"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Smile,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { whatsappData } from "@/lib/whatsapp";

const services = [
  {
    number: "01",
    title: "Revisiones dentales",
    description:
      "Evaluaciones para acompañar la salud dental de los niños durante las diferentes etapas de su desarrollo.",
  },
  {
    number: "02",
    title: "Limpiezas",
    description:
      "Cuidados de higiene dental que ayudan a mantener una buena salud bucal desde la infancia.",
  },
  {
    number: "03",
    title: "Selladores dentales",
    description:
      "Una capa protectora aplicada en las superficies masticatorias de los dientes posteriores para ayudar a prevenir caries.",
  },
  {
    number: "04",
    title: "Tratamiento de caries",
    description:
      "Atención de problemas dentales como caries y otras necesidades que pueden aparecer durante el crecimiento.",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Prevención",
    text: "La odontopediatría busca prevenir problemas dentales futuros mediante higiene oral, selladores y aplicaciones de fluoruro.",
  },
  {
    icon: Smile,
    title: "Desarrollo saludable",
    text: "La atención se adapta al desarrollo dental de niños y adolescentes para acompañar cada etapa de crecimiento.",
  },
  {
    icon: HeartHandshake,
    title: "Una experiencia positiva",
    text: "El objetivo es crear una relación de confianza con el cuidado dental y ayudar a disminuir la ansiedad ante futuras visitas.",
  },
];

const faqs = [
  {
    question:
      "¿Qué es la odontopediatría y por qué es importante para la salud dental de mi hijo?",
    answer:
      "La odontopediatría es una rama especializada de la odontología que se enfoca en la atención dental de niños y adolescentes. Es importante porque aborda las necesidades específicas de los pacientes jóvenes, desde la prevención hasta el tratamiento de problemas dentales, creando una base para una salud dental óptima.",
  },
  {
    question:
      "¿A qué edad debería llevar a mi hijo a su primera cita con un dentista pediátrico?",
    answer:
      "Se recomienda que los niños tengan su primera cita con un dentista pediátrico alrededor de su primer año de vida, o tan pronto como les salgan los primeros dientes. Esta visita permite evaluar su salud dental y establecer una relación positiva con el cuidado dental desde una edad temprana.",
  },
  {
    question:
      "¿Cuáles son los servicios que ofrece una clínica de odontopediatría?",
    answer:
      "Las clínicas de odontopediatría ofrecen servicios como revisiones dentales regulares, limpiezas, selladores dentales, tratamientos de caries, atención de emergencia y asesoramiento sobre hábitos de higiene oral. También buscan ofrecer un entorno cálido y acogedor para los niños.",
  },
  {
    question:
      "¿Cómo puedo ayudar a preparar a mi hijo para su visita al dentista pediátrico?",
    answer:
      "Es importante hablar de manera positiva sobre la cita y explicar qué esperar de forma simple y tranquila. También puede ser útil leer libros o ver videos relacionados con visitas al dentista. Evita transmitir ansiedad o miedo, ya que esto puede influir en la actitud de tu hijo hacia el cuidado dental.",
  },
  {
    question:
      "¿Cuál es la importancia de los selladores dentales para los niños?",
    answer:
      "Los selladores dentales son una capa delgada de material plástico aplicada en las superficies masticatorias de los dientes posteriores para protegerlos de las caries. Ayudan a prevenir la formación de caries en las fisuras y surcos profundos de los dientes.",
  },
  {
    question:
      "¿Cuándo debo llevar a mi hijo al dentista pediátrico si experimenta dolor dental?",
    answer:
      "Si tu hijo experimenta dolor dental, es importante llevarlo al dentista pediátrico lo antes posible para evaluar la causa del dolor y proporcionar el tratamiento necesario. No se recomienda esperar a que el dolor empeore.",
  },
  {
    question:
      "¿Cuáles son los beneficios de elegir un dentista pediátrico en lugar de un dentista general para mi hijo?",
    answer:
      "Los dentistas pediátricos cuentan con experiencia y capacitación especializada en el cuidado dental de niños y adolescentes. Están familiarizados con sus necesidades particulares y con técnicas para hacer que las visitas sean menos estresantes.",
  },
  {
    question:
      "¿Qué puedo hacer en casa para promover la salud dental de mi hijo?",
    answer:
      "Es importante establecer hábitos de higiene oral desde una edad temprana, incluyendo cepillarse los dientes dos veces al día con pasta dental fluorada, usar hilo dental una vez al día, limitar el consumo de alimentos azucarados y acudir regularmente al dentista pediátrico.",
  },
  {
    question:
      "¿Qué debo hacer si mi hijo tiene miedo o ansiedad antes de su visita?",
    answer:
      "Puedes hablar con el equipo dental sobre las preocupaciones de tu hijo para que puedan tomar medidas adicionales para ayudarlo a sentirse cómodo, como explicar cada paso del procedimiento de manera simple y utilizar técnicas de distracción.",
  },
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
};

export default function OdontopediatriaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="overflow-x-hidden bg-[#F8F5F1] text-[#222222]">
      <Navbar />

      {/* =======================================================
          HERO
      ======================================================= */}

      <section className="relative overflow-hidden px-6 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.45, 0.7, 0.45],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-32 top-16 h-80 w-80 rounded-full bg-[#EDE6FA] blur-3xl"
        />

        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#EFE7DE] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              CODANTIS · Odontopediatría
            </p>

            <h1 className="mt-5 font-[var(--font-heading)] text-[clamp(3.3rem,7vw,6.7rem)] font-normal leading-[0.9] tracking-[-0.045em] text-[#222126]">
              Dentista para
              <br />
              <span className="italic text-[#5B0AB3]">
                niños.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#6F6870] sm:text-lg">
              Acompañamos la salud bucal de niños y adolescentes con atención
              especializada, prevención y un enfoque pensado para que la visita
              al dentista sea una experiencia positiva.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappData.citaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#5B0AB3] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6D14C8] hover:shadow-[0_20px_45px_rgba(91,10,179,0.2)]"
              >
                Agendar cita
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <Link
                href="/contacto"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#D0C5DA] bg-white/70 px-7 py-4 text-sm font-semibold text-[#5B0AB3] transition-all duration-300 hover:-translate-y-1 hover:border-[#5B0AB3]"
              >
                Conoce la clínica
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: "easeOut",
            }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-[2.5rem] bg-[#EDE6FA]"
            >
              <Image
                src="/img/imagen.png"
                alt="Odontopediatría en CODANTIS"
                width={1000}
                height={1100}
                priority
                className="aspect-[4/4.5] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#281C2B]/50 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-3xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-xl">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                    Para ellos
                  </p>

                  <p className="mt-2 font-[var(--font-heading)] text-2xl leading-tight">
                    Construir confianza también forma parte de cuidar.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
          WHAT IS ODONTOPEDIATRIA
      ======================================================= */}

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              ¿Qué es la odontopediatría?
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Cuidar desde
              <br />
              <span className="italic text-[#5B0AB3]">
                pequeños.
              </span>
            </h2>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="rounded-[2rem] bg-[#F8F5F1] p-7 sm:p-10"
          >
            <p className="text-base leading-8 text-[#6F6870] sm:text-lg">
              La odontopediatría es la especialidad de la odontología enfocada
              en el cuidado dental de niños y adolescentes. Su objetivo es
              prevenir, diagnosticar y tratar enfermedades dentales desde la
              infancia hasta la adolescencia.
            </p>

            <p className="mt-6 text-base leading-8 text-[#6F6870] sm:text-lg">
              También contempla las necesidades específicas de los pacientes
              jóvenes, desde selladores dentales y fluoruros hasta problemas
              como caries, maloclusiones y traumatismos dentales.
            </p>

            <div className="mt-8 rounded-2xl bg-white p-5">
              <p className="text-sm font-semibold text-[#302C32]">
                También acompañamos a los padres.
              </p>

              <p className="mt-2 text-sm leading-7 text-[#716A73]">
                Parte del trabajo del odontopediatra es orientar sobre higiene
                bucal y hábitos dietéticos adecuados para cuidar la salud
                dental de los niños.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
          SERVICES
      ======================================================= */}

      <section className="bg-[#F8F5F1] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Atención especializada
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Cuidamos cada etapa
              <br />
              <span className="italic text-[#5B0AB3]">
                de su sonrisa.
              </span>
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -7 }}
                className="group relative overflow-hidden rounded-[2rem] border border-[#E5DCE7] bg-white p-7 shadow-[0_8px_25px_rgba(60,30,70,0.03)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(91,10,179,0.09)]"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[#EDE6FA] blur-2xl transition-transform duration-500 group-hover:scale-150" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDE6FA] font-[var(--font-heading)] text-[#5B0AB3]">
                      {service.number}
                    </span>

                    <ArrowUpRight
                      size={19}
                      className="text-[#B5A8BB] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#5B0AB3]"
                    />
                  </div>

                  <h3 className="mt-10 font-[var(--font-heading)] text-2xl text-[#29242C]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#716A73]">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =======================================================
          BENEFITS
      ======================================================= */}

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              ¿Por qué es importante?
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              No se trata solo de
              <br />
              <span className="italic text-[#5B0AB3]">
                los dientes.
              </span>
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.article
                  key={benefit.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -5 }}
                  className="rounded-[2rem] bg-[#F3EDF7] p-7 sm:p-9"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#5B0AB3]">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-8 font-[var(--font-heading)] text-2xl text-[#29242C]">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#716A73]">
                    {benefit.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =======================================================
          POSITIVE EXPERIENCE
      ======================================================= */}

      <section className="bg-[#EFE7DE] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-[#EDE6FA] p-8 sm:p-10 lg:min-h-[520px]"
          >
            <motion.div
              animate={{ rotate: [0, 4, 0, -4, 0] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/40 blur-3xl"
            />

            <div className="relative flex h-full flex-col justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#5B0AB3] shadow-sm">
                <Smile size={25} />
              </div>

              <div className="mt-20 lg:mt-32">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
                  Una experiencia positiva
                </p>

                <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#29242C] sm:text-6xl">
                  Que ir al dentista
                  <br />
                  <span className="italic text-[#5B0AB3]">
                    no sea motivo de miedo.
                  </span>
                </h2>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="rounded-[2.5rem] bg-[#F8F5F1] p-8 sm:p-10 lg:p-14"
          >
            <p className="text-base leading-8 text-[#6F6870] sm:text-lg">
              Los odontopediatras están entrenados para trabajar con niños y
              crear experiencias dentales positivas y sin estrés.
            </p>

            <p className="mt-6 text-base leading-8 text-[#6F6870] sm:text-lg">
              Construir una relación de confianza desde una edad temprana puede
              ayudar a disminuir la ansiedad dental en el futuro y fomentar
              hábitos de cuidado bucal adecuados a lo largo de la vida.
            </p>

            <div className="mt-8 border-t border-[#E4D9E3] pt-8">
              <p className="text-sm font-semibold text-[#302C32]">
                Para mamá y papá
              </p>

              <p className="mt-2 text-sm leading-7 text-[#716A73]">
                También puedes hablar con nuestro equipo sobre los miedos o
                preocupaciones de tu hijo antes de la cita para ayudar a crear
                un entorno más cómodo para él o ella.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
          FIRST VISIT
      ======================================================= */}

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
            className="grid gap-8 rounded-[2.5rem] bg-[#F8F5F1] p-8 sm:p-12 lg:grid-cols-[0.8fr_1.2fr] lg:p-16"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
                Primera visita
              </p>

              <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#29242C] sm:text-6xl">
                Empezar temprano
                <br />
                <span className="italic text-[#5B0AB3]">
                  hace la diferencia.
                </span>
              </h2>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-base leading-8 text-[#716A73] sm:text-lg">
                La primera cita con un dentista pediátrico se recomienda
                alrededor del primer año de vida o cuando aparecen los primeros
                dientes. Esta visita permite evaluar la salud dental y empezar
                a construir una relación positiva con el cuidado dental.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Evaluar la salud dental",
                  "Acompañar el desarrollo",
                  "Orientar a los padres",
                  "Crear confianza desde temprano",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EDE6FA] text-[#5B0AB3]">
                      <Check size={14} strokeWidth={2.5} />
                    </span>

                    <span className="text-sm font-medium text-[#4F4852]">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
          FAQ
      ======================================================= */}

      <section className="bg-[#F8F5F1] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Preguntas frecuentes
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Todo empieza con
              <br />
              <span className="italic text-[#5B0AB3]">
                sentirse en confianza.
              </span>
            </h2>
          </motion.div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.08 }}
                  transition={{
                    duration: 0.45,
                    delay: Math.min(index * 0.03, 0.18),
                  }}
                  className="overflow-hidden rounded-[1.5rem] border border-[#E4DCE5] bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`odontopediatria-faq-${index}`}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition-colors duration-300 hover:bg-[#FBF9FC] sm:px-7 sm:py-6"
                  >
                    <span className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EDE6FA] font-[var(--font-heading)] text-sm text-[#5B0AB3]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm font-semibold leading-6 text-[#302C32] sm:text-[15px]">
                        {faq.question}
                      </span>
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F4EFF8] text-[#5B0AB3]"
                    >
                      <ChevronDown size={17} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`odontopediatria-faq-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                      >
                        <div className="border-t border-[#EEE8EE] px-5 pb-6 pt-5 sm:px-7 sm:pb-7">
                          <p className="pl-12 text-sm leading-7 text-[#6F6871]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =======================================================
          CTA
      ======================================================= */}

      <section className="bg-[#5B0AB3] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-[#6A1BC5] px-7 py-12 sm:px-12 lg:px-16 lg:py-16"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            />

            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                  Cuidado desde pequeños
                </p>

                <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-white sm:text-6xl">
                  Una sonrisa que
                  <br />
                  <span className="italic text-[#DCC9FA]">
                    crece con ellos.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-base leading-7 text-white/75">
                  Agenda una cita de odontopediatría en CODANTIS y conozcamos
                  sus necesidades dentales.
                </p>
              </div>

              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappData.citaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#5B0AB3] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:w-auto"
              >
                Agendar por WhatsApp
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}