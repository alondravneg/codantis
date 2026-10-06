"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleCheck,
  HeartPulse,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { whatsappData } from "@/lib/whatsapp";

const treatments = [
  {
    number: "01",
    title: "Limpieza dental",
    description:
      "Elimina sarro y placa bacteriana para ayudar a mantener dientes y encías sanos.",
  },
  {
    number: "02",
    title: "Resinas",
    description:
      "Restauraciones del mismo color del diente para reparar daños causados por caries o fracturas.",
  },
  {
    number: "03",
    title: "Curetajes",
    description:
      "Procedimientos de raspado radicular para eliminar acumulaciones de sarro dentro de las encías.",
  },
];

const benefits = [
  {
    icon: HeartPulse,
    title: "Prevención",
    text: "Ayudamos a prevenir problemas como caries y enfermedad periodontal mediante cuidados y tratamientos oportunos.",
  },
  {
    icon: CircleCheck,
    title: "Restauración",
    text: "Tratamos dientes dañados o deteriorados para recuperar función y estética.",
  },
  {
    icon: Sparkles,
    title: "Cuidado integral",
    text: "La atención odontológica general busca mantener tu salud bucal y atender distintas necesidades en un mismo lugar.",
  },
];

const faqs = [
  {
    question: "¿Qué es la odontología en general?",
    answer:
      "La odontología general es una rama de la odontología que se centra en el diagnóstico, tratamiento y prevención de diversas condiciones dentales y bucales. Los odontólogos generales proporcionan una amplia gama de servicios para mantener la salud oral y prevenir problemas más graves.",
  },
  {
    question: "¿Desde qué edad debo acudir al dentista?",
    answer:
      "Se recomienda que los niños visiten al dentista por primera vez alrededor de los 6 meses de edad, o tan pronto como les salgan los primeros dientes. Esto permite monitorear su desarrollo dental y proporcionar orientación sobre el cuidado oral.",
  },
  {
    question: "¿Qué hace una limpieza dental?",
    answer:
      "Una limpieza dental profesional, también conocida como profilaxis, implica la eliminación de placa y sarro de la superficie de los dientes y debajo de la línea de las encías. También puede incluir pulido y la aplicación de fluoruro.",
  },
  {
    question: "¿Con qué frecuencia debo realizar mi limpieza dental?",
    answer:
      "En general, se recomienda que los adultos se sometan a una limpieza dental profesional cada seis meses. Sin embargo, la frecuencia puede variar según las necesidades individuales de cada paciente.",
  },
  {
    question: "¿Se utiliza anestesia para tratamientos de resinas y curetajes?",
    answer:
      "Sí, en la mayoría de los casos se utiliza anestesia local para procedimientos de resinas dentales y curetajes. Tu odontólogo te informará sobre el uso de anestesia y los aspectos relacionados con tu tratamiento antes de realizarlo.",
  },
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
};

export default function OdontologiaGeneralPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="overflow-x-hidden bg-[#F8F5F1] text-[#222222]">
      <Navbar />

      {/* =======================================================
          HERO
      ======================================================= */}

      <section className="relative overflow-hidden px-6 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
        <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#EDE6FA] blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#EFE7DE] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              CODANTIS · Odontología general
            </p>

            <h1 className="mt-5 font-[var(--font-heading)] text-[clamp(3.4rem,7vw,6.8rem)] font-normal leading-[0.9] tracking-[-0.045em] text-[#222126]">
              Odontología
              <br />
              <span className="italic text-[#5B0AB3]">
                general.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#6F6870] sm:text-lg">
              Atención para el diagnóstico, prevención, tratamiento y
              restauración de dientes, encías y otras necesidades relacionadas
              con la salud dental.
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
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
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
                alt="Odontología general en CODANTIS"
                width={1000}
                height={1100}
                priority
                className="aspect-[4/4.5] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#281C2B]/50 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-3xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-xl">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                    Atención dental
                  </p>

                  <p className="mt-2 font-[var(--font-heading)] text-2xl">
                    Lo esencial para mantener tu sonrisa saludable.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
          INTRO
      ======================================================= */}

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              ¿Qué es?
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Cuidado dental
              <br />
              <span className="italic text-[#5B0AB3]">
                desde lo esencial.
              </span>
            </h2>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="rounded-[2rem] bg-[#F8F5F1] p-7 sm:p-10"
          >
            <p className="text-base leading-8 text-[#6F6870] sm:text-lg">
              La odontología general y restauradora consiste en el diagnóstico
              de los problemas relacionados con la salud dental y la función
              de la sonrisa, incluidos el tratamiento y la reparación de
              dientes, encías y tejidos fracturados, infectados o dañados.
            </p>

            <p className="mt-6 text-base leading-8 text-[#6F6870] sm:text-lg">
              En CODANTIS se realizan servicios que van desde cuidados
              preventivos e higiene dental hasta tratamientos de endodoncia,
              periodoncia, ortodoncia, prótesis, implantes y estética dental.
              También se ofrece atención integral para niños y personas
              mayores.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
          TREATMENTS
      ======================================================= */}

      <section className="bg-[#F8F5F1] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Tratamientos principales
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Tres formas de cuidar
              <br />
              <span className="italic text-[#5B0AB3]">
                tu salud dental.
              </span>
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {treatments.map((treatment, index) => (
              <motion.article
                key={treatment.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -7 }}
                className="group relative overflow-hidden rounded-[2rem] border border-[#E5DCE7] bg-white p-7 shadow-[0_8px_25px_rgba(60,30,70,0.03)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(91,10,179,0.09)] sm:p-9"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#EDE6FA] blur-2xl transition-transform duration-500 group-hover:scale-150" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDE6FA] font-[var(--font-heading)] text-[#5B0AB3]">
                      {treatment.number}
                    </span>

                    <ArrowUpRight
                      size={20}
                      className="text-[#B5A8BB] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#5B0AB3]"
                    />
                  </div>

                  <h3 className="mt-10 font-[var(--font-heading)] text-3xl text-[#29242C]">
                    {treatment.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#716A73]">
                    {treatment.description}
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
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Beneficios
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Prevenir también es
              <br />
              <span className="italic text-[#5B0AB3]">
                cuidar.
              </span>
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =======================================================
          FIRST CONSULTATION
      ======================================================= */}

      <section className="bg-[#EFE7DE] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
            className="grid gap-8 rounded-[2.5rem] bg-[#F8F5F1] p-8 sm:p-12 lg:grid-cols-[0.8fr_1.2fr] lg:p-16"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
                Tu primera consulta
              </p>

              <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#29242C] sm:text-6xl">
                Empezamos
                <br />
                <span className="italic text-[#5B0AB3]">
                  contigo.
                </span>
              </h2>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-base leading-8 text-[#716A73] sm:text-lg">
                En tu primera consulta, nuestros especialistas trabajarán
                contigo para comprender tus necesidades y ofrecerte un plan de
                tratamiento personalizado.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Conocer tus necesidades",
                  "Evaluar tu salud dental",
                  "Orientar tu tratamiento",
                  "Definir los siguientes pasos",
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

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Preguntas frecuentes
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Lo que quieres saber
              <br />
              <span className="italic text-[#5B0AB3]">
                antes de tu cita.
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
                    delay: Math.min(index * 0.035, 0.18),
                  }}
                  className="overflow-hidden rounded-[1.5rem] border border-[#E4DCE5] bg-[#FDFCFD]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`odontologia-faq-${index}`}
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
                        id={`odontologia-faq-${index}`}
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
                  Cuida tu sonrisa
                </p>

                <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-white sm:text-6xl">
                  Empieza por lo
                  <br />
                  <span className="italic text-[#DCC9FA]">
                    esencial.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-base leading-7 text-white/75">
                  Agenda tu consulta y conoce las opciones de atención dental
                  para ti.
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