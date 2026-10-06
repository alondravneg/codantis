"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleCheck,
  HeartPulse,
  ScanFace,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { whatsappData } from "@/lib/whatsapp";

const rehabilitation = [
  {
    number: "01",
    title: "Implantes dentales",
    text: "Una alternativa para rehabilitar dientes perdidos y recuperar función y apariencia.",
  },
  {
    number: "02",
    title: "Prótesis dentales",
    text: "Prótesis fijas o removibles para restaurar dientes perdidos y recuperar la función oral.",
  },
  {
    number: "03",
    title: "Tratamientos de endodoncia",
    text: "Procedimientos orientados a preservar la estructura dental cuando un diente necesita tratamiento de conductos.",
  },
];

const aesthetics = [
  {
    number: "01",
    title: "Blanqueamiento dental",
    text: "Tratamientos para eliminar manchas y decoloraciones y mejorar el tono de los dientes.",
  },
  {
    number: "02",
    title: "Carillas dentales",
    text: "Una opción para corregir determinadas imperfecciones del esmalte y mejorar la apariencia de la sonrisa.",
  },
  {
    number: "03",
    title: "Ortodoncia estética",
    text: "Tratamientos de alineación dental que buscan mejorar la posición de los dientes de manera estética.",
  },
];

const benefits = [
  {
    icon: CircleCheck,
    title: "Mejora de la función",
    text: "La rehabilitación oral busca recuperar funciones como la masticación, la fonética y la armonía de la oclusión.",
  },
  {
    icon: Sparkles,
    title: "Restauración de la sonrisa",
    text: "La estética dental puede mejorar la apariencia de los dientes y la sonrisa mediante diferentes tratamientos.",
  },
  {
    icon: HeartPulse,
    title: "Cuidado integral",
    text: "La rehabilitación combina distintas áreas de la odontología para abordar las necesidades de cada paciente.",
  },
];

const faqs = [
  {
    question:
      "¿Cuál es la diferencia entre rehabilitación dental y estética dental?",
    answer:
      "La rehabilitación dental se enfoca principalmente en restaurar la funcionalidad y la salud oral, abordando problemas como pérdida de dientes o alteraciones de la función. La estética dental se centra en mejorar la apariencia de la sonrisa mediante tratamientos como blanqueamiento, carillas y coronas estéticas.",
  },
  {
    question: "¿Cuáles son los beneficios de la rehabilitación oral?",
    answer:
      "La rehabilitación oral puede ayudar a mejorar la función masticatoria, restaurar la estética dental y contribuir a una mejor salud bucal general, dependiendo de las necesidades y condiciones de cada paciente.",
  },
  {
    question:
      "¿Qué opciones de tratamiento existen para la estética dental?",
    answer:
      "Entre las opciones mencionadas en el contenido de referencia se encuentran el blanqueamiento dental, carillas de porcelana, coronas estéticas, ortodoncia estética y tratamientos de alineación dental como Invisalign.",
  },
  {
    question: "¿Cuándo es necesario someterse a rehabilitación oral?",
    answer:
      "La rehabilitación oral puede recomendarse en casos de pérdida de dientes, desgaste dental severo, fracturas dentales u otros problemas que afecten la función masticatoria y la estética dental.",
  },
  {
    question:
      "¿Cuánto cuesta un tratamiento de rehabilitación dental en Monterrey?",
    answer:
      "El costo puede variar según la complejidad del caso, los procedimientos necesarios y el tratamiento indicado. La valoración inicial permite determinar las necesidades específicas y elaborar un presupuesto personalizado.",
  },
  {
    question:
      "¿Qué cuidados especiales requieren los dientes después de una rehabilitación dental?",
    answer:
      "Es importante mantener una buena higiene bucal, cepillarse dos veces al día, usar hilo dental y realizar revisiones regulares con el dentista. También se recomienda evitar alimentos duros o pegajosos que puedan dañar las restauraciones.",
  },
  {
    question:
      "¿Cómo puedo mantener mis dientes blancos después de un blanqueamiento dental?",
    answer:
      "Para mantener los resultados se recomienda prestar atención a alimentos y bebidas que pueden manchar los dientes, mantener una buena higiene oral y seguir las indicaciones proporcionadas por el profesional.",
  },
  {
    question: "¿La rehabilitación oral afecta la capacidad de hablar o comer?",
    answer:
      "La rehabilitación oral busca restaurar la función masticatoria y mejorar la calidad de vida. Puede existir un período inicial de adaptación a nuevas restauraciones o dispositivos, siguiendo las recomendaciones del dentista.",
  },
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
};

export default function RehabilitacionDentalPage() {
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
              CODANTIS · Rehabilitación dental
            </p>

            <h1 className="mt-5 font-[var(--font-heading)] text-[clamp(3.1rem,7vw,6.6rem)] font-normal leading-[0.9] tracking-[-0.045em] text-[#222126]">
              Rehabilitación
              <br />
              <span className="italic text-[#5B0AB3]">
                dental.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#6F6870] sm:text-lg">
              Restauramos la función y apariencia de la sonrisa mediante un
              enfoque que integra rehabilitación oral y estética dental.
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
                alt="Rehabilitación dental en CODANTIS Monterrey"
                width={1000}
                height={1100}
                priority
                className="aspect-[4/4.5] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#281C2B]/50 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-3xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-xl">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                    Rehabilitación oral + estética
                  </p>

                  <p className="mt-2 font-[var(--font-heading)] text-2xl leading-tight">
                    Recuperar una sonrisa también es recuperar su función.
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
              Función y estética
              <br />
              <span className="italic text-[#5B0AB3]">
                en un mismo enfoque.
              </span>
            </h2>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="rounded-[2rem] bg-[#F8F5F1] p-7 sm:p-10"
          >
            <p className="text-base leading-8 text-[#6F6870] sm:text-lg">
              La Rehabilitación Oral y Estética Dental busca restaurar la
              función y la apariencia de los dientes y las estructuras bucales,
              combinando diferentes áreas de la odontología.
            </p>

            <p className="mt-6 text-base leading-8 text-[#6F6870] sm:text-lg">
              Puede involucrar prótesis dental, periodoncia, endodoncia,
              ortodoncia, implantes y tratamientos estéticos para desarrollar
              soluciones personalizadas según las necesidades de cada
              paciente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
          REHABILITACIÓN ORAL
      ======================================================= */}

      <section className="bg-[#F8F5F1] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Rehabilitación oral
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Volver a hacer que
              <br />
              <span className="italic text-[#5B0AB3]">
                todo funcione.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#716A73]">
              La rehabilitación oral se centra en recuperar funciones como la
              masticación, la fonética y la armonía de la oclusión.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {rehabilitation.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -7 }}
                className="group relative overflow-hidden rounded-[2rem] border border-[#E3DBE5] bg-white p-7 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(91,10,179,0.08)] sm:p-9"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#EDE6FA] blur-3xl transition-transform duration-700 group-hover:scale-125" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDE6FA] font-[var(--font-heading)] text-[#5B0AB3]">
                      {item.number}
                    </span>

                    <ArrowUpRight
                      size={19}
                      className="text-[#B5A8BB] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#5B0AB3]"
                    />
                  </div>

                  <h3 className="mt-10 font-[var(--font-heading)] text-2xl text-[#29242C]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#716A73]">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =======================================================
          AESTHETICS
      ======================================================= */}

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Estética dental
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Y cuando la sonrisa
              <br />
              <span className="italic text-[#5B0AB3]">
                también quiere verse mejor.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#716A73]">
              La estética dental se enfoca en mejorar la apariencia de los
              dientes y la sonrisa mediante distintas alternativas.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {aesthetics.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -7 }}
                className="group rounded-[2rem] bg-[#F3EDF7] p-7 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(91,10,179,0.08)] sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white font-[var(--font-heading)] text-[#5B0AB3]">
                    {item.number}
                  </span>

                  <Sparkles
                    size={19}
                    className="text-[#B7A7BE] transition-transform duration-300 group-hover:rotate-12 group-hover:text-[#5B0AB3]"
                  />
                </div>

                <h3 className="mt-10 font-[var(--font-heading)] text-2xl text-[#29242C]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#716A73]">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =======================================================
          FUNCTION + AESTHETICS
      ======================================================= */}

      <section className="bg-[#EFE7DE] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
            className="rounded-[2.5rem] bg-[#5B0AB3] p-8 text-white sm:p-10 lg:p-14"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              Un enfoque integral
            </p>

            <h2 className="mt-5 max-w-2xl font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] sm:text-6xl">
              Una sonrisa
              <br />
              <span className="italic text-[#DCC9FA]">
                saludable y funcional.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              La Rehabilitación Oral y Estética Dental busca no solo restaurar
              la funcionalidad y la salud bucal, sino también mejorar la
              apariencia de la sonrisa.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                "Función masticatoria",
                "Fonética",
                "Armonía de la oclusión",
                "Apariencia de la sonrisa",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 p-4"
                >
                  <Check size={16} className="shrink-0 text-[#DCC9FA]" />
                  <span className="text-sm text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-[#EDE6FA] p-8 sm:p-10"
          >
            <motion.div
              animate={{ rotate: [0, 4, 0, -4, 0] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/40 blur-3xl"
            />

            <div className="relative flex h-full flex-col justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#5B0AB3] shadow-sm">
                <Sparkles size={24} />
              </div>

              <div className="mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
                  Resultado buscado
                </p>

                <p className="mt-5 font-[var(--font-heading)] text-4xl leading-[1.02] tracking-[-0.03em] text-[#29242C] sm:text-5xl">
                  Funcionalidad.
                  <br />
                  Estética.
                  <br />
                  <span className="italic text-[#5B0AB3]">
                    Bienestar.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
          BENEFITS
      ======================================================= */}

      <section className="bg-[#F8F5F1] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Beneficios
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Recuperar una sonrisa
              <br />
              <span className="italic text-[#5B0AB3]">
                es recuperar mucho más.
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
                  className="rounded-[2rem] bg-white p-7 shadow-[0_8px_25px_rgba(60,30,70,0.03)] sm:p-9"
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
          WHEN IT MAY BE NEEDED
      ======================================================= */}

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              ¿Cuándo puede ser necesaria?
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Cuando recuperar
              <br />
              <span className="italic text-[#5B0AB3]">
                vuelve a ser prioridad.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#716A73]">
              La rehabilitación oral puede indicarse cuando existen alteraciones
              que afectan la función masticatoria o la estética dental.
            </p>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="rounded-[2.5rem] bg-[#F3EDF7] p-7 sm:p-10"
          >
            <div className="grid gap-3">
              {[
                "Pérdida de dientes",
                "Desgaste dental severo",
                "Fracturas dentales",
                "Problemas que afectan la función masticatoria",
                "Necesidades estéticas de la sonrisa",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.07,
                  }}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EDE6FA] text-[#5B0AB3]">
                    <Check size={15} strokeWidth={2.5} />
                  </span>

                  <span className="text-sm font-medium leading-6 text-[#4F4852]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
          FIRST CONSULTATION
      ======================================================= */}

      <section className="bg-[#F8F5F1] px-6 py-24 lg:px-8 lg:py-32">
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
                  Todo empieza con
                  <br />
                  <span className="italic text-[#DCC9FA]">
                    entender tu caso.
                  </span>
                </h2>
              </div>

              <div>
                <p className="max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                  En tu primera consulta, nuestros especialistas trabajan
                  contigo para comprender tus necesidades y definir un plan de
                  tratamiento personalizado.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Conocer tus necesidades",
                    "Evaluar tu situación dental",
                    "Definir las alternativas",
                    "Crear un plan personalizado",
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
              Lo que necesitas saber
              <br />
              <span className="italic text-[#5B0AB3]">
                antes de empezar.
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
                  className="overflow-hidden rounded-[1.5rem] border border-[#E4DCE5] bg-[#FDFCFD]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`rehabilitacion-faq-${index}`}
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
                        id={`rehabilitacion-faq-${index}`}
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
                  Rehabilita tu sonrisa
                </p>

                <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-white sm:text-6xl">
                  Volvamos a darle
                  <br />
                  <span className="italic text-[#DCC9FA]">
                    armonía a tu sonrisa.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-base leading-7 text-white/75">
                  Agenda una valoración y conoce las alternativas para tu caso.
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