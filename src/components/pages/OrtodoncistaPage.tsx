"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleCheck,
  ScanFace,
  Sparkles,
  Smile,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { whatsappData } from "@/lib/whatsapp";

const treatmentTypes = [
  {
    number: "01",
    title: "Ortodoncia interceptiva",
    text: "Ayuda a favorecer durante el crecimiento un correcto desarrollo del hueso maxilar y de la mandíbula, corrigiendo problemas funcionales, esqueléticos o determinados hábitos del desarrollo.",
    tag: "Durante el crecimiento",
  },
  {
    number: "02",
    title: "Ortodoncia correctiva",
    text: "Se enfoca en corregir la posición de los dientes mediante diferentes alternativas de tratamiento para mejorar la alineación y la función.",
    tag: "Niños, adolescentes y adultos",
  },
];

const orthodonticOptions = [
  {
    number: "01",
    title: "Brackets metálicos",
    text: "La alternativa convencional para realizar tratamientos de ortodoncia.",
  },
  {
    number: "02",
    title: "Brackets cerámicos o de zafiro",
    text: "Una opción más estética frente a los brackets tradicionales.",
  },
  {
    number: "03",
    title: "Brackets autoligables",
    text: "Un sistema que utiliza brackets sin ligaduras elásticas convencionales.",
  },
  {
    number: "04",
    title: "Alineadores invisibles",
    text: "Alternativas removibles como Invisalign y Aliwell para realizar el tratamiento de manera más discreta.",
  },
];

const problems = [
  "Apiñamiento de los dientes",
  "Espacios entre los dientes",
  "Mordida abierta",
  "Mordida cruzada posterior",
  "Sobrecrecimiento de la mandíbula",
  "Dolor o sonidos de la mandíbula",
];

const benefits = [
  {
    icon: Smile,
    title: "Mejora estética",
    text: "La corrección de la alineación de los dientes y la mandíbula puede mejorar la apariencia de la sonrisa y la estética facial.",
  },
  {
    icon: CircleCheck,
    title: "Salud bucal",
    text: "Corregir problemas de maloclusión puede ayudar a prevenir determinados problemas de salud bucal a largo plazo.",
  },
  {
    icon: ScanFace,
    title: "Funcionalidad",
    text: "Una mordida adecuada facilita funciones como la masticación y el habla.",
  },
];

const faqs = [
  {
    question: "¿Qué es la ortodoncia y por qué es importante?",
    answer:
      "La ortodoncia es una rama de la odontología que se enfoca en corregir la posición de los dientes y la mandíbula para mejorar la estética facial, la función masticatoria y la salud bucal en general.",
  },
  {
    question: "¿Qué tipos de ortodoncia ofrecen?",
    answer:
      "Contamos con diferentes alternativas, entre ellas brackets metálicos convencionales, brackets cerámicos o de zafiro, brackets autoligables y alineadores invisibles.",
  },
  {
    question: "¿Qué son los alineadores invisibles?",
    answer:
      "Son dispositivos de plástico transparente que se utilizan para corregir gradualmente la alineación de los dientes. Son removibles y permiten realizar la higiene dental con mayor facilidad durante el tratamiento.",
  },
  {
    question: "¿Qué son los brackets autoligables?",
    answer:
      "Son una alternativa a los brackets tradicionales que no requieren ligaduras elásticas para mantener el arco en su lugar.",
  },
  {
    question: "¿Cuáles son las opciones de ortodoncia para adultos?",
    answer:
      "Los adultos pueden contar con diferentes alternativas de tratamiento, como brackets convencionales, alineadores invisibles y otros sistemas de ortodoncia. La opción adecuada depende de las necesidades de cada caso.",
  },
  {
    question: "¿Qué problemas puede tratar la ortodoncia?",
    answer:
      "La ortodoncia puede abordar problemas como apiñamiento dental, espacios entre los dientes, mordida abierta, mordida cruzada posterior y determinados problemas relacionados con la posición de los dientes y la mandíbula.",
  },
  {
    question: "¿Cuándo se recomienda la ortodoncia interceptiva?",
    answer:
      "Durante el crecimiento, puede ayudar a favorecer el correcto desarrollo del maxilar y la mandíbula y a corregir determinados problemas funcionales, esqueléticos o hábitos del desarrollo.",
  },
  {
    question: "¿A qué edad se puede revisar a un niño para ortodoncia?",
    answer:
      "El contenido de referencia recomienda revisar a los niños desde edades tempranas, incluso antes de los 6 años, para identificar oportunamente posibles anomalías de crecimiento.",
  },
  {
    question: "¿Cómo es la primera consulta?",
    answer:
      "En la primera consulta nuestros especialistas trabajan contigo para comprender tus necesidades, realizar una valoración y recomendar un plan de tratamiento personalizado.",
  },
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
};

export default function OrtodoncistaPage() {
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
          className="pointer-events-none absolute -right-32 top-14 h-80 w-80 rounded-full bg-[#EDE6FA] blur-3xl"
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
              CODANTIS · Ortodoncia
            </p>

            <h1 className="mt-5 font-[var(--font-heading)] text-[clamp(3.4rem,7vw,6.8rem)] font-normal leading-[0.9] tracking-[-0.045em] text-[#222126]">
              Ortodoncista en
              <br />
              <span className="italic text-[#5B0AB3]">
                Monterrey.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#6F6870] sm:text-lg">
              Tratamientos de ortodoncia para mejorar la posición de los
              dientes, la mordida y la armonía de la sonrisa, desde niños hasta
              adultos.
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
                alt="Ortodoncia en CODANTIS Monterrey"
                width={1000}
                height={1100}
                priority
                className="aspect-[4/4.5] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#281C2B]/50 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-3xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-xl">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                    Ortodoncia
                  </p>

                  <p className="mt-2 font-[var(--font-heading)] text-2xl leading-tight">
                    Alinear también es cuidar la función de tu sonrisa.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
          WHAT IS ORTHODONTICS
      ======================================================= */}

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              ¿Qué es la ortodoncia?
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Mucho más que
              <br />
              <span className="italic text-[#5B0AB3]">
                dientes alineados.
              </span>
            </h2>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="rounded-[2rem] bg-[#F8F5F1] p-7 sm:p-10"
          >
            <p className="text-base leading-8 text-[#6F6870] sm:text-lg">
              La ortodoncia es una especialidad dentro de la odontología que se
              concentra en corregir la posición de los dientes y la mandíbula.
            </p>

            <p className="mt-6 text-base leading-8 text-[#6F6870] sm:text-lg">
              A través de diferentes tratamientos, como brackets y alineadores
              invisibles, busca mejorar tanto la estética como la funcionalidad
              de la boca.
            </p>

            <div className="mt-8 rounded-2xl bg-white p-5">
              <p className="text-sm font-semibold text-[#302C32]">
                Una sonrisa bien alineada también facilita la higiene bucal.
              </p>

              <p className="mt-2 text-sm leading-7 text-[#716A73]">
                El contenido de referencia señala que una mejor alineación
                puede facilitar la higiene y contribuir al cuidado de las
                encías.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
          TYPES
      ======================================================= */}

      <section className="bg-[#F8F5F1] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Tipos de tratamiento
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Cada sonrisa tiene
              <br />
              <span className="italic text-[#5B0AB3]">
                su propio camino.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#716A73]">
              La ortodoncia puede abordarse de diferentes maneras dependiendo
              de la etapa de desarrollo y de las necesidades de cada paciente.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {treatmentTypes.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -7 }}
                className="group relative overflow-hidden rounded-[2.5rem] border border-[#E3DAE7] bg-white p-8 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(91,10,179,0.08)] sm:p-10"
              >
                <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#EDE6FA] blur-3xl transition-transform duration-700 group-hover:scale-125" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDE6FA] font-[var(--font-heading)] text-[#5B0AB3]">
                      {item.number}
                    </span>

                    <span className="rounded-full bg-[#F8F5F1] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7C6C87]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="mt-12 font-[var(--font-heading)] text-3xl leading-tight text-[#29242C]">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-[#716A73]">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =======================================================
          ORTHODONTIC OPTIONS
      ======================================================= */}

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Opciones de ortodoncia
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Tradicional o discreta,
              <br />
              <span className="italic text-[#5B0AB3]">
                tú eliges el estilo.
              </span>
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {orthodonticOptions.map((option, index) => (
              <motion.article
                key={option.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
                className="group rounded-[2rem] bg-[#F3EDF7] p-7 transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(91,10,179,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-[var(--font-heading)] text-[#5B0AB3]">
                    {option.number}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-[#B7A8BD] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#5B0AB3]"
                  />
                </div>

                <h3 className="mt-9 font-[var(--font-heading)] text-2xl leading-tight text-[#29242C]">
                  {option.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#716A73]">
                  {option.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =======================================================
          PROBLEMS
      ======================================================= */}

      <section className="bg-[#EFE7DE] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              ¿Qué puede corregir?
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#29242C] sm:text-6xl">
              Identificarlo a tiempo
              <br />
              <span className="italic text-[#5B0AB3]">
                importa.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#716A73]">
              Existen diferentes problemas dentales y faciales que pueden
              abordarse mediante ortodoncia dependiendo de cada caso.
            </p>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="rounded-[2.5rem] bg-[#F8F5F1] p-7 sm:p-10"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EDE6FA] text-[#5B0AB3]">
                    <Check size={15} strokeWidth={2.5} />
                  </span>

                  <span className="text-sm font-medium leading-6 text-[#4F4852]">
                    {problem}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Beneficios
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Una sonrisa alineada
              <br />
              <span className="italic text-[#5B0AB3]">
                también funciona mejor.
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
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.65, 0.35],
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
                  Empezamos con
                  <br />
                  <span className="italic text-[#DCC9FA]">
                    tu sonrisa.
                  </span>
                </h2>
              </div>

              <div>
                <p className="max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                  En tu primera consulta, nuestros especialistas trabajan
                  contigo para comprender tus necesidades, realizar una
                  valoración y recomendar un plan de tratamiento personalizado.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {[
                    "Conocer tus necesidades",
                    "Realizar una valoración",
                    "Explicar las alternativas",
                    "Definir los siguientes pasos",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-white/85"
                    >
                      <Check size={15} className="text-[#DCC9FA]" />
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
              Todo lo que necesitas
              <br />
              <span className="italic text-[#5B0AB3]">
                saber antes de empezar.
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
                    aria-controls={`orthodontics-faq-${index}`}
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
                        id={`orthodontics-faq-${index}`}
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

      <section className="bg-[#EFE7DE] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="grid gap-8 rounded-[2.5rem] bg-[#F8F5F1] p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-end lg:p-14"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C6C87]">
                Da el siguiente paso
              </p>

              <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#29242C] sm:text-6xl">
                Tu sonrisa puede
                <br />
                <span className="italic text-[#5B0AB3]">
                  empezar aquí.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#706971]">
                Agenda una valoración con nuestro equipo de ortodoncia en
                Monterrey.
              </p>
            </div>

            <motion.a
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappData.citaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#5B0AB3] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#6D14C8] hover:shadow-[0_20px_50px_rgba(91,10,179,0.18)] sm:w-auto"
            >
              Agendar por WhatsApp
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}