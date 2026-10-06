"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Droplets,
  HeartPulse,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { whatsappData } from "@/lib/whatsapp";

const prevention = [
  {
    number: "01",
    title: "Higiene bucal",
    description:
      "Mantener una buena higiene bucal ayuda a prevenir la acumulación de placa y bacterias alrededor de los dientes y encías.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Limpiezas regulares",
    description:
      "Las limpiezas dentales profesionales ayudan a eliminar placa y sarro acumulados en los dientes y debajo de la línea de las encías.",
    icon: Droplets,
  },
  {
    number: "03",
    title: "Educación y prevención",
    description:
      "Conocer los signos de las enfermedades periodontales permite identificar posibles problemas y atenderlos oportunamente.",
    icon: HeartPulse,
  },
];

const signs = [
  "Encías inflamadas",
  "Encías enrojecidas o sensibles",
  "Sangrado de encías",
  "Mal aliento persistente",
  "Retracción de las encías",
  "Sensibilidad dental",
  "Movilidad dental",
  "Bolsas periodontales",
];

const treatments = [
  {
    number: "01",
    title: "Limpieza profunda",
    description:
      "Raspado y alisado radicular para eliminar acumulaciones de placa y sarro.",
  },
  {
    number: "02",
    title: "Cirugía periodontal",
    description:
      "Procedimientos para tratar determinadas condiciones de las encías y los tejidos de soporte.",
  },
  {
    number: "03",
    title: "Regeneración",
    description:
      "Tratamientos orientados a la regeneración de tejidos blandos y duros.",
  },
  {
    number: "04",
    title: "Injertos",
    description:
      "Procedimientos de injerto de tejido gingival y óseo según las necesidades de cada caso.",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Prevenir la pérdida dental",
    text: "La atención periodontal busca controlar las enfermedades que afectan los tejidos que rodean y soportan los dientes.",
  },
  {
    icon: HeartPulse,
    title: "Cuidar tus encías",
    text: "El diagnóstico y tratamiento oportunos ayudan a restaurar y mantener la salud de los tejidos periodontales.",
  },
  {
    icon: Sparkles,
    title: "Atención especializada",
    text: "El periodoncista cuenta con formación específica para diagnosticar y tratar problemas de las encías y sus tejidos de soporte.",
  },
];

const faqs = [
  {
    question:
      "¿Qué es un periodoncista y cuál es su papel en la salud bucal?",
    answer:
      "Un periodoncista es un dentista especializado en el diagnóstico, tratamiento y prevención de enfermedades periodontales que afectan las encías y las estructuras de soporte de los dientes. Su trabajo incluye el tratamiento de condiciones como la gingivitis y la periodontitis, así como determinados procedimientos de cirugía periodontal.",
  },
  {
    question:
      "¿Cuáles son los signos de enfermedad periodontal y cuándo debo consultar a un periodoncista?",
    answer:
      "Algunos signos incluyen encías inflamadas, enrojecidas, sensibles o que sangran fácilmente, mal aliento persistente, retracción de las encías, sensibilidad dental, movilidad dental y presencia de bolsas periodontales. Ante estos signos, el contenido de referencia recomienda consultar a un periodoncista para una evaluación.",
  },
  {
    question:
      "¿Qué tipos de tratamientos ofrece un periodoncista para enfermedades periodontales?",
    answer:
      "Los tratamientos pueden incluir limpiezas profundas mediante raspado y alisado radicular, cirugía periodontal, regeneración de tejidos blandos y duros, injertos de tejido gingival y óseo, así como terapia con láser.",
  },
  {
    question:
      "¿Cómo puedo prevenir la enfermedad periodontal y mantener una buena salud bucal?",
    answer:
      "Es importante mantener una buena higiene oral, cepillarse los dientes al menos dos veces al día con pasta dental fluorada, usar hilo dental diariamente, limitar alimentos y bebidas azucaradas, evitar fumar y realizar limpiezas dentales y revisiones periodontales de manera regular.",
  },
  {
    question:
      "¿Qué puedo esperar durante la primera consulta con un periodoncista?",
    answer:
      "Durante la consulta inicial se realiza una evaluación del historial médico y dental, un examen clínico de las encías y los dientes y, cuando es necesario, pueden tomarse radiografías para evaluar la salud de los tejidos de soporte. Posteriormente se puede discutir un plan de tratamiento personalizado.",
  },
  {
    question:
      "¿Cuánto tiempo lleva el tratamiento periodontal y cuándo puedo esperar ver resultados?",
    answer:
      "La duración puede variar según la gravedad de la enfermedad y los procedimientos necesarios. Algunos tratamientos pueden completarse en una o dos visitas, mientras que otros requieren múltiples citas a lo largo de varios meses.",
  },
  {
    question:
      "¿Mi seguro dental cubre los tratamientos periodontales?",
    answer:
      "La cobertura puede variar según el plan de seguro y la gravedad de la enfermedad periodontal. Algunos planes pueden cubrir parcial o totalmente determinados procedimientos, mientras que otros pueden tener limitaciones o exclusiones.",
  },
  {
    question:
      "¿Por qué elegir un periodoncista en lugar de un dentista general?",
    answer:
      "El periodoncista tiene un enfoque especializado en el diagnóstico y tratamiento de problemas de las encías y los tejidos de soporte dental, además de capacitación específica en procedimientos periodontales avanzados.",
  },
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
};

export default function PeriodoncistaPage() {
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
              CODANTIS · Periodoncia
            </p>

            <h1 className="mt-5 font-[var(--font-heading)] text-[clamp(3.3rem,7vw,6.7rem)] font-normal leading-[0.9] tracking-[-0.045em] text-[#222126]">
              Periodoncista en
              <br />
              <span className="italic text-[#5B0AB3]">
                Monterrey.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#6F6870] sm:text-lg">
              Cuidamos las encías y los tejidos que sostienen tus dientes
              mediante diagnóstico, prevención y tratamientos periodontales
              especializados.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappData.citaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#5B0AB3] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6D14C8] hover:shadow-[0_20px_45px_rgba(91,10,179,0.2)]"
              >
                Agendar valoración
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
                alt="Periodoncia en CODANTIS Monterrey"
                width={1000}
                height={1100}
                priority
                className="aspect-[4/4.5] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#281C2B]/50 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-3xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-xl">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                    Salud periodontal
                  </p>

                  <p className="mt-2 font-[var(--font-heading)] text-2xl leading-tight">
                    Tus encías también necesitan atención.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
          WHAT IS PERIODONTICS
      ======================================================= */}

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              ¿Qué es la periodoncia?
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              La sonrisa también
              <br />
              <span className="italic text-[#5B0AB3]">
                empieza en las encías.
              </span>
            </h2>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="rounded-[2rem] bg-[#F8F5F1] p-7 sm:p-10"
          >
            <p className="text-base leading-8 text-[#6F6870] sm:text-lg">
              La periodoncia es la rama de la odontología especializada en el
              estudio, prevención, diagnóstico y tratamiento de las enfermedades
              que afectan los tejidos que rodean y soportan los dientes.
            </p>

            <p className="mt-6 text-base leading-8 text-[#6F6870] sm:text-lg">
              Entre las enfermedades periodontales más comunes se encuentran la
              gingivitis y la periodontitis, relacionadas principalmente con la
              acumulación de placa bacteriana y sarro.
            </p>

            <div className="mt-8 rounded-2xl bg-white p-5">
              <p className="text-sm font-semibold text-[#302C32]">
                ¿Qué busca un periodoncista?
              </p>

              <p className="mt-2 text-sm leading-7 text-[#716A73]">
                Restaurar la salud de los tejidos periodontales y ayudar a
                prevenir la pérdida dental mediante el tratamiento adecuado.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
          SIGNS
      ======================================================= */}

      <section className="bg-[#EFE7DE] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Señales de alerta
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#29242C] sm:text-6xl">
              Tus encías
              <br />
              <span className="italic text-[#5B0AB3]">
                hablan contigo.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#716A73]">
              Algunos cambios en las encías pueden ser señales de enfermedad
              periodontal y vale la pena prestarles atención.
            </p>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="rounded-[2.5rem] bg-[#F8F5F1] p-7 sm:p-10"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {signs.map((sign, index) => (
                <motion.div
                  key={sign}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EDE6FA] text-[#5B0AB3]">
                    <Check size={15} strokeWidth={2.5} />
                  </span>

                  <span className="text-sm font-medium leading-6 text-[#4F4852]">
                    {sign}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
          PREVENTION
      ======================================================= */}

      <section className="bg-[#F8F5F1] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Prevención
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Cuidar hoy puede
              <br />
              <span className="italic text-[#5B0AB3]">
                evitar problemas después.
              </span>
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {prevention.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -6 }}
                  className="group rounded-[2rem] bg-white p-7 shadow-[0_8px_25px_rgba(60,30,70,0.03)] transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(91,10,179,0.08)] sm:p-9"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDE6FA] text-[#5B0AB3]">
                      <Icon size={21} />
                    </div>

                    <span className="font-[var(--font-heading)] text-4xl text-[#5B0AB3]/10">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-8 font-[var(--font-heading)] text-2xl text-[#29242C]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#716A73]">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =======================================================
          TREATMENTS
      ======================================================= */}

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Tratamientos periodontales
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Tratamientos para
              <br />
              <span className="italic text-[#5B0AB3]">
                cuidar tus tejidos.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#716A73]">
              El tratamiento depende de la condición periodontal y de las
              necesidades de cada paciente.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[2rem] border border-[#E5DCE7] bg-[#FDFCFD] p-7 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(91,10,179,0.08)]"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[#EDE6FA] blur-2xl transition-transform duration-500 group-hover:scale-150" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDE6FA] font-[var(--font-heading)] text-[#5B0AB3]">
                      {item.number}
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="text-[#B5A8BB] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#5B0AB3]"
                    />
                  </div>

                  <h3 className="mt-9 font-[var(--font-heading)] text-2xl leading-tight text-[#29242C]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#716A73]">
                    {item.description}
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

      <section className="bg-[#F3EDF7] px-6 py-24 lg:px-8 lg:py-32">
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
              El cuidado periodontal
              <br />
              <span className="italic text-[#5B0AB3]">
                va más allá de las encías.
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
                  className="rounded-[2rem] bg-white p-7 sm:p-9"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDE6FA] text-[#5B0AB3]">
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
          FIRST CONSULTATION
      ======================================================= */}

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-[#5B0AB3] px-8 py-10 text-white sm:px-12 sm:py-14 lg:px-16 lg:py-16"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            />

            <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                  Primera consulta
                </p>

                <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] sm:text-6xl">
                  Empezamos por
                  <br />
                  <span className="italic text-[#DCC9FA]">
                    conocerte.
                  </span>
                </h2>
              </div>

              <div>
                <p className="max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                  En la consulta inicial se revisa tu historial médico y
                  dental, se evalúan tus encías y dientes y, cuando es
                  necesario, pueden realizarse estudios complementarios para
                  valorar los tejidos de soporte.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Historia médica y dental",
                    "Evaluación de encías y dientes",
                    "Estudios cuando sean necesarios",
                    "Plan de tratamiento personalizado",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-white/85"
                    >
                      <Check size={15} className="shrink-0 text-[#DCC9FA]" />
                      {item}
                    </div>
                  ))}
                </div>
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
              Lo que necesitas saber
              <br />
              <span className="italic text-[#5B0AB3]">
                sobre tus encías.
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
                    aria-controls={`periodoncia-faq-${index}`}
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
                        id={`periodoncia-faq-${index}`}
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
                opacity: [0.35, 0.65, 0.35],
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
                  Cuida tus encías
                </p>

                <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-white sm:text-6xl">
                  Una boca saludable
                  <br />
                  <span className="italic text-[#DCC9FA]">
                    empieza por cuidarla.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-base leading-7 text-white/75">
                  Agenda una valoración con nuestro equipo de periodoncia en
                  Monterrey.
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