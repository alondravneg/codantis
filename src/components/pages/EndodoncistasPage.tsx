"use client";

import {
  ArrowUpRight,
  Check,
  ChevronDown,
  HeartPulse,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { whatsappData } from "@/lib/whatsapp";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Conservación del diente",
    text:
      "La endodoncia permite salvar dientes que de otra manera podrían requerir extracción. Al limpiar el conducto radicular y eliminar la infección, se preserva la estructura natural del diente y su función masticatoria.",
  },
  {
    icon: HeartPulse,
    title: "Alivio del dolor",
    text:
      "Uno de los síntomas más comunes de la infección dental es el dolor intenso. El tratamiento de endodoncia elimina la causa subyacente del dolor al tratar la infección y preservar el diente afectado.",
  },
  {
    icon: Sparkles,
    title: "Mejora de la salud oral general",
    text:
      "Al tratar la infección en la raíz del diente, se ayuda a prevenir su propagación a otras áreas de la boca y se contribuye a mantener una sonrisa saludable a largo plazo.",
  },
];

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    text:
      "El primer paso es identificar la causa del problema y valorar el estado del diente y de los tejidos que lo rodean.",
  },
  {
    number: "02",
    title: "Limpieza del conducto",
    text:
      "Se elimina la pulpa infectada o inflamada y se limpian y desinfectan los conductos radiculares.",
  },
  {
    number: "03",
    title: "Sellado",
    text:
      "Una vez limpios, los conductos se sellan con un material especial para ayudar a prevenir futuras infecciones.",
  },
  {
    number: "04",
    title: "Restauración",
    text:
      "Después de completar la endodoncia, el diente puede restaurarse con un empaste o una corona para fortalecerlo y protegerlo.",
  },
];

const signs = [
  "Dolor dental persistente.",
  "Sensibilidad extrema al calor o al frío.",
  "Hinchazón alrededor del diente.",
  "Cambio en el color del diente.",
];

const faqs = [
  {
    question:
      "¿Qué es un endodoncista y cuál es su función en la odontología?",
    answer:
      "Un endodoncista es un especialista en el tratamiento de enfermedades que afectan la pulpa dental y el tejido que rodea la raíz del diente. Su principal función es realizar tratamientos de conducto y procedimientos relacionados para salvar dientes que de otra manera necesitarían ser extraídos.",
  },
  {
    question: "¿Cuándo debo acudir a un endodoncista en Monterrey?",
    answer:
      "Deberías considerar visitar a un endodoncista en Monterrey si experimentas síntomas como dolor dental persistente, sensibilidad extrema al calor o al frío, hinchazón alrededor del diente, o si tu dentista general recomienda una evaluación más especializada.",
  },
  {
    question: "¿Qué tratamientos realiza un endodoncista en Monterrey?",
    answer:
      "Los endodoncistas en Monterrey realizan una variedad de tratamientos, incluyendo la terapia de conducto radicular o tratamiento de conducto, retratamientos de conducto, endodoncia microscópica, cirugía endodóntica y tratamiento de lesiones traumáticas dentales.",
  },
  {
    question:
      "¿Cuánto tiempo dura un tratamiento de conducto realizado por un endodoncista en Monterrey?",
    answer:
      "La duración de un tratamiento de conducto puede variar según la complejidad del caso y la cantidad de dientes afectados. En general, puede completarse en una o dos citas, aunque pueden requerirse citas adicionales para casos más complicados.",
  },
  {
    question:
      "¿Cómo puedo saber si necesito un tratamiento de conducto en Monterrey?",
    answer:
      "Si experimentas dolor dental persistente, sensibilidad extrema al calor o al frío, hinchazón alrededor del diente o notas un cambio en el color del diente, es importante que consultes a un endodoncista en Monterrey para una evaluación adecuada.",
  },
  {
    question:
      "¿Cuáles son los beneficios de ver a un endodoncista en Monterrey en lugar de un dentista general para un tratamiento de conducto?",
    answer:
      "Los endodoncistas son especialistas altamente capacitados y experimentados en el diagnóstico y tratamiento de problemas relacionados con la pulpa dental. Su experiencia y habilidades específicas pueden ayudar a garantizar resultados exitosos y minimizar el riesgo de complicaciones.",
  },
  {
    question:
      "¿Cuánto cuesta un tratamiento de conducto realizado por un endodoncista en Monterrey?",
    answer:
      "El costo de un tratamiento de conducto puede variar según diversos factores, como la complejidad del caso y la ubicación de la clínica. Es recomendable contactar directamente a la clínica para obtener una estimación precisa de los costos.",
  },
  {
    question:
      "¿Qué debo esperar durante un tratamiento de conducto con un endodoncista en Monterrey?",
    answer:
      "Durante un tratamiento de conducto puedes esperar un proceso cuidadosamente planificado que incluye la eliminación del tejido dañado, la limpieza y desinfección del conducto radicular y la posterior obturación del mismo con materiales de calidad para prevenir futuras infecciones.",
  },
  {
    question:
      "¿Qué tan exitosos suelen ser los tratamientos de conducto realizados por endodoncistas en Monterrey?",
    answer:
      "Los tratamientos de conducto realizados por endodoncistas suelen tener altas tasas de éxito, especialmente cuando se realizan en casos diagnosticados y tratados a tiempo. El resultado también depende de factores como la salud general del paciente y la calidad de la restauración dental posterior.",
  },
  {
    question:
      "¿Cómo puedo programar una cita con un endodoncista en Monterrey?",
    answer:
      "Puedes programar una cita contactando directamente a la clínica dental donde practica el especialista. Es recomendable verificar la disponibilidad de citas y proporcionar detalles sobre tu situación dental para una mejor atención.",
  },
];

export default function EndodoncistasPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="overflow-x-hidden bg-[#F8F5F1] text-[#222222]">
      <Navbar />

      {/* =======================================================
          HERO
      ======================================================= */}

      <section className="px-6 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Tratamiento · Endodoncia
            </p>

            <h1 className="mt-5 font-[var(--font-heading)] text-[clamp(3.5rem,7vw,6.8rem)] font-normal leading-[0.9] tracking-[-0.045em] text-[#222126]">
              Salvar tu diente
              <br />
              también es
              <br />
              <span className="italic text-[#5B0AB3]">
                cuidar tu sonrisa.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#6F6870] sm:text-lg">
              ¿Buscas endodoncistas en Monterrey? En CODANTIS encontrarás
              atención especializada para diagnosticar y tratar problemas que
              afectan el interior del diente y ayudarte a conservarlo.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappData.citaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#5B0AB3] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6D14C8] hover:shadow-[0_20px_45px_rgba(91,10,179,0.2)]"
              >
                Agenda tu valoración
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="#senales"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#D0C5DA] bg-white/70 px-7 py-4 text-sm font-semibold text-[#5B0AB3] transition-all duration-300 hover:-translate-y-1 hover:border-[#5B0AB3]"
              >
                ¿Cuándo acudir?
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 25,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative"
          >
            <div className="relative min-h-[470px] overflow-hidden rounded-[2.5rem] bg-[#EDE6FA] p-7 sm:min-h-[540px] sm:p-10">

              <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#DCC9ED]/60 blur-3xl" />

              <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#E8D9CC]/70 blur-3xl" />

              <div className="relative flex h-full min-h-[400px] flex-col justify-between">

                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-[#5B0AB3]">
                    <Stethoscope size={21} strokeWidth={1.8} />
                  </div>

                  <span className="font-[var(--font-heading)] text-5xl text-[#D5C5DD]">
                    01
                  </span>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7D6E82]">
                    Endodoncia
                  </p>

                  <p className="mt-4 max-w-sm font-[var(--font-heading)] text-4xl leading-[0.98] text-[#3B3040] sm:text-5xl">
                    Tratamos el
                    <br />
                    interior del
                    <br />
                    <span className="italic text-[#5B0AB3]">
                      diente.
                    </span>
                  </p>

                  <div className="mt-8 rounded-[1.75rem] bg-white/75 p-5 backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                      <ShieldCheck
                        size={19}
                        className="mt-0.5 shrink-0 text-[#5B0AB3]"
                      />

                      <p className="text-sm leading-6 text-[#665D68]">
                        El objetivo es tratar la infección y ayudar a conservar
                        el diente y su función.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
          WHAT IS IT
      ======================================================= */}

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Conoce la endodoncia
            </p>

            <h2 className="mt-5 max-w-md font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              ¿Qué es una
              <br />
              <span className="italic text-[#5B0AB3]">
                endodoncia?
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="text-lg leading-8 text-[#5E585F]">
              La endodoncia es un procedimiento dental que se realiza para
              tratar el interior de un diente, específicamente la pulpa dental
              y los conductos radiculares.
            </p>

            <p className="mt-6 text-base leading-8 text-[#716A73]">
              La pulpa contiene nervios, vasos sanguíneos y tejidos conectivos.
              Cuando se infecta o se inflama debido a una caries profunda, un
              traumatismo dental o una enfermedad de las encías, puede ser
              necesario realizar una endodoncia para salvar el diente.
            </p>

            <div className="mt-10 rounded-[2rem] bg-[#F3EDF7] p-7 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EDE6FA] text-[#5B0AB3]">
                  <HeartPulse size={19} strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#2C2830]">
                    También conocido como tratamiento de conducto
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#716A73]">
                    Durante el procedimiento se elimina la pulpa infectada o
                    inflamada, se limpian y desinfectan los conductos y después
                    se sellan con un material especial.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =======================================================
          SIGNS
      ======================================================= */}

      <section
        id="senales"
        className="scroll-mt-28 bg-[#EFE7DE] px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Señales de atención
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#252127] sm:text-6xl">
              Escucha lo que
              <br />
              tu diente
              <span className="italic text-[#5B0AB3]">
                {" "}
                te está diciendo.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#716A73]">
              Hay ciertos síntomas que pueden indicar que necesitas una
              evaluación más especializada.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="rounded-[2.25rem] bg-[#F8F5F1]/85 p-7 sm:p-10"
          >
            <div className="space-y-4">
              {signs.map((sign, index) => (
                <div
                  key={sign}
                  className="flex items-center gap-4 rounded-[1.5rem] bg-white p-4 sm:p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EDE6FA] text-[#5B0AB3]">
                    <Check size={15} strokeWidth={2.5} />
                  </span>

                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A096A2]">
                      0{index + 1}
                    </span>

                    <p className="mt-1 text-sm font-medium text-[#4D4650]">
                      {sign}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-7 text-xs leading-6 text-[#766E76]">
              También puede ser recomendable acudir cuando tu dentista general
              sugiera una evaluación más especializada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
          BENEFITS
      ======================================================= */}

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Beneficios
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Conservar lo natural
              <br />
              también es
              <span className="italic text-[#5B0AB3]">
                {" "}
                cuidarte.
              </span>
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.article
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -6 }}
                  className="group rounded-[2rem] border border-[#E7DED5] bg-[#F8F5F1] p-7 transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(46,30,20,0.07)] sm:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EDE6FA] text-[#5B0AB3] transition-transform duration-300 group-hover:rotate-6">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-10 font-[var(--font-heading)] text-2xl leading-tight text-[#29252B]">
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
          PROCESS
      ======================================================= */}

      <section className="bg-[#F8F5F1] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              El proceso
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Un tratamiento
              <br />
              pensado para
              <span className="italic text-[#5B0AB3]">
                {" "}
                conservar.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#716A73]">
              La endodoncia implica tratar el interior del diente y después
              fortalecerlo para ayudar a preservar su función.
            </p>
          </motion.div>

          <div className="mt-14">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                className="grid gap-5 border-t border-[#E4DBD3] py-7 md:grid-cols-[90px_260px_1fr] md:items-start md:gap-8"
              >
                <span className="font-[var(--font-heading)] text-4xl text-[#D0C0D5]">
                  {step.number}
                </span>

                <h3 className="text-xl font-semibold text-[#29262D]">
                  {step.title}
                </h3>

                <p className="max-w-3xl text-sm leading-7 text-[#706970]">
                  {step.text}
                </p>
              </motion.article>
            ))}

            <div className="border-t border-[#E4DBD3]" />
          </div>
        </div>
      </section>

      {/* =======================================================
          FAQ
      ======================================================= */}

      <section
        id="preguntas"
        className="scroll-mt-28 bg-white px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-5xl">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Preguntas frecuentes
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Resolvemos tus dudas
              <br />
              <span className="italic text-[#5B0AB3]">
                antes de tu cita.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#716A73]">
              Desde cuándo acudir hasta cómo es un tratamiento de conducto.
            </p>
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
                    duration: 0.5,
                    delay: Math.min(index * 0.03, 0.18),
                    ease: "easeOut",
                  }}
                  className="overflow-hidden rounded-[1.5rem] border border-[#E4DCE5] bg-[#FDFCFD]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
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
                        id={`faq-answer-${index}`}
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
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
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[2.5rem] bg-[#6A1BC5] px-7 py-12 sm:px-12 lg:px-16 lg:py-16"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-[#C8A7FF]/20 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                  ¿Necesitas una valoración?
                </p>

                <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-white sm:text-6xl">
                  No dejes que el dolor
                  <br />
                  se convierta en
                  <span className="italic text-[#DCC9FA]">
                    {" "}
                    espera.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-base leading-7 text-white/75">
                  Escríbenos para conocer disponibilidad y recibir orientación
                  sobre tu visita.
                </p>
              </div>

              <a
                href={whatsappData.citaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#5B0AB3] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:w-auto"
              >
                <MessageCircle size={18} />
                Agendar por WhatsApp
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}