"use client";

import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Heart,
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
    icon: Sparkles,
    title: "Estética mejorada",
    text:
      "Los implantes dentales se integran de forma natural con el hueso maxilar, proporcionando una apariencia muy similar a la de los dientes naturales y ayudando a recuperar la sonrisa y la confianza.",
  },
  {
    icon: Heart,
    title: "Funcionalidad restaurada",
    text:
      "A diferencia de las dentaduras removibles, los implantes dentales ofrecen una solución permanente y estable para reemplazar dientes perdidos, permitiendo masticar con mayor comodidad y eficiencia.",
  },
  {
    icon: ShieldCheck,
    title: "Salud bucal a largo plazo",
    text:
      "Los implantes dentales ayudan a preservar la estructura ósea del maxilar y no requieren el desgaste de los dientes adyacentes como los puentes dentales tradicionales.",
  },
];

const process = [
  {
    number: "01",
    title: "Evaluación y planificación",
    text:
      "Primero se realiza una evaluación exhaustiva de la salud bucal del paciente y se planifica el tratamiento de acuerdo con sus necesidades.",
  },
  {
    number: "02",
    title: "Colocación del implante",
    text:
      "En una cirugía menor se inserta el implante, compuesto principalmente de titanio, en el hueso de la mandíbula.",
  },
  {
    number: "03",
    title: "Cicatrización",
    text:
      "El implante necesita un período de cicatrización para integrarse con el hueso mediante un proceso llamado osteointegración.",
  },
  {
    number: "04",
    title: "Restauración",
    text:
      "Una vez que el implante se ha integrado, se coloca un pilar o conector sobre el que se fija la prótesis dental.",
  },
];

const candidateSigns = [
  "Pérdida de uno o más dientes.",
  "Deseo de recuperar estabilidad y funcionalidad.",
  "Suficiente hueso para soportar el implante.",
  "Buena salud bucal general.",
];

const faqs = [
  {
    question: "¿Qué son los implantes dentales y cómo funcionan?",
    answer:
      "Los implantes dentales son dispositivos de titanio que se insertan quirúrgicamente en el hueso de la mandíbula para reemplazar las raíces de los dientes naturales perdidos. Funcionan como anclajes sólidos para las prótesis dentales, como coronas o puentes, restaurando la función y estética dental.",
  },
  {
    question: "¿Cuál es el proceso de colocación de un implante dental?",
    answer:
      "El proceso de colocación de un implante dental generalmente consta de varias etapas. Primero, se realiza una evaluación exhaustiva de la salud bucal del paciente y se planifica el tratamiento. Luego, en una cirugía menor, se inserta el implante en el hueso de la mandíbula. Después de un período de cicatrización de varios meses, se coloca un pilar o conector en el implante, sobre el cual se fija la prótesis dental.",
  },
  {
    question:
      "¿Cuánto tiempo lleva el proceso completo de colocación de un implante dental?",
    answer:
      "El tiempo total del proceso puede variar según las necesidades individuales del paciente y el tipo de implante dental utilizado. Por lo general, desde la colocación del implante hasta la finalización del tratamiento con la prótesis dental, puede tomar de tres a seis meses, incluyendo el tiempo de cicatrización.",
  },
  {
    question: "¿Los implantes dentales son dolorosos?",
    answer:
      "La colocación de los implantes dentales se realiza bajo anestesia local, por lo que el procedimiento en sí no debería ser doloroso. Es normal experimentar algo de molestia y sensibilidad después de la cirugía, pero esto puede controlarse con medicamentos recetados por el especialista.",
  },
  {
    question:
      "¿Cuáles son las ventajas de los implantes dentales en comparación con otras opciones de tratamiento, como las dentaduras postizas?",
    answer:
      "Los implantes dentales ofrecen varias ventajas sobre las dentaduras postizas, incluida una mayor estabilidad y funcionalidad, una apariencia más natural, una mejor salud bucal a largo plazo al prevenir la pérdida ósea y la preservación de la estructura facial.",
  },
  {
    question: "¿Quién es un buen candidato para implantes dentales?",
    answer:
      "Los buenos candidatos para implantes dentales son aquellos que tienen suficiente hueso en la mandíbula para soportar el implante y que gozan de buena salud bucal en general. Sin embargo, incluso aquellos con pérdida ósea pueden ser candidatos adecuados con técnicas como los injertos óseos.",
  },
  {
    question: "¿Cuánto tiempo duran los implantes dentales?",
    answer:
      "Los implantes dentales tienen el potencial de durar toda la vida con el cuidado adecuado y mantenimiento regular. Es crucial seguir una buena higiene oral, visitar regularmente al dentista y evitar hábitos perjudiciales, como fumar, que pueden comprometer la salud de los implantes.",
  },
  {
    question: "¿Cuánto cuestan los implantes dentales en Monterrey?",
    answer:
      "El costo de los implantes dentales puede variar según diversos factores, como la cantidad de implantes necesarios, el tipo de prótesis dental utilizada y cualquier procedimiento adicional requerido, como injertos óseos. Se recomienda una consulta inicial con un especialista en implantes dentales para obtener un presupuesto preciso.",
  },
  {
    question: "¿Los implantes dentales requieren cuidados especiales?",
    answer:
      "Si bien los implantes dentales no requieren cuidados especiales más allá de una buena higiene oral y visitas regulares al dentista, es importante tener en cuenta que pueden requerir un mantenimiento más cuidadoso que los dientes naturales. Esto incluye el uso de hilo dental y enjuague bucal diariamente, así como evitar masticar alimentos muy duros que puedan dañar las prótesis.",
  },
  {
    question:
      "¿Qué pasa si experimento algún problema con mis implantes dentales?",
    answer:
      "En caso de experimentar algún problema con los implantes dentales, como dolor, hinchazón o aflojamiento de la prótesis, es fundamental ponerse en contacto con su especialista en implantes dentales de inmediato. Ellos podrán evaluar la situación y recomendar el tratamiento adecuado.",
  },
];

export default function ImplantesDentalesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="overflow-x-hidden bg-[#F8F5F1] text-[#222222]">
      <Navbar />

      {/* =======================================================
          HERO
      ======================================================= */}

      <section className="px-6 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Tratamiento · Implantología
            </p>

            <h1 className="mt-5 font-[var(--font-heading)] text-[clamp(3.5rem,7vw,6.8rem)] font-normal leading-[0.9] tracking-[-0.045em] text-[#222126]">
              Recupera lo que
              <br />
              hace especial a
              <br />
              <span className="italic text-[#5B0AB3]">
                tu sonrisa.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#6F6870] sm:text-lg">
              Los implantes dentales ofrecen una solución estable para
              reemplazar dientes perdidos y recuperar función, estética y
              confianza.
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
                href="#proceso"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#D0C5DA] bg-white/70 px-7 py-4 text-sm font-semibold text-[#5B0AB3] transition-all duration-300 hover:-translate-y-1 hover:border-[#5B0AB3]"
              >
                Conoce el proceso
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Specialist highlight */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease: "easeOut",
              }}
              className="mt-9 max-w-xl rounded-[1.75rem] border border-[#DDD2E3] bg-white/70 p-5 backdrop-blur-sm sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EDE6FA] text-[#5B0AB3]">
                  <Stethoscope size={19} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#968A98]">
                    Atención especializada
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#302B32]">
                    Cirujano Dentista especialista en Periodoncia
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#716A73]">
                    Estudios en Cirugía Avanzada e Implantología.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero visual */}
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
            <div className="relative min-h-[500px] overflow-hidden rounded-[2.5rem] bg-[#EFE7DE] p-7 sm:min-h-[560px] sm:p-10">

              <div className="absolute -right-24 -top-20 h-80 w-80 rounded-full bg-[#D8C4E2]/60 blur-3xl" />
              <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#F1DCCC]/70 blur-3xl" />

              <div className="relative flex min-h-[430px] flex-col justify-between">

                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-[#5B0AB3]">
                    <Sparkles size={21} strokeWidth={1.8} />
                  </div>

                  <span className="font-[var(--font-heading)] text-5xl text-[#CFC0D1]">
                    01
                  </span>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7D6E82]">
                    Implantología
                  </p>

                  <p className="mt-4 max-w-sm font-[var(--font-heading)] text-4xl leading-[0.98] text-[#3B3040] sm:text-5xl">
                    Una base
                    <br />
                    estable para
                    <br />
                    <span className="italic text-[#5B0AB3]">
                      volver a sonreír.
                    </span>
                  </p>

                  <div className="mt-8 rounded-[1.75rem] bg-white/75 p-5 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#948895]">
                      Osteointegración
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#665D68]">
                      El implante puede integrarse con el hueso y servir como
                      base para una corona, puente o prótesis dental.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
          LOSS OF TEETH / INTRO
      ======================================================= */}

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Cuando falta un diente
            </p>

            <h2 className="mt-5 max-w-md font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Recuperar un diente
              <br />
              es recuperar
              <span className="italic text-[#5B0AB3]">
                {" "}
                mucho más.
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
              A lo largo del tiempo, la pérdida de dientes ha sido un problema
              causado principalmente por caries, enfermedades periodontales o
              lesiones.
            </p>

            <p className="mt-6 text-base leading-8 text-[#716A73]">
              Durante muchos años, las opciones principales fueron los puentes
              y las dentaduras postizas. Actualmente, los implantes dentales
              representan una alternativa para reemplazar dientes perdidos y
              recuperar su función y estética.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
          WHAT IS IMPLANTOLOGY
      ======================================================= */}

      <section className="bg-[#F8F5F1] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Implantología
            </p>

            <h2 className="mt-5 max-w-md font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              ¿Qué es la
              <br />
              <span className="italic text-[#5B0AB3]">
                implantología?
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <p className="text-lg leading-8 text-[#5E585F]">
              Los implantes dentales, compuestos principalmente de titanio, se
              integran con el hueso mandibular o maxilar mediante un proceso
              llamado osteointegración.
            </p>

            <p className="mt-6 text-base leading-8 text-[#716A73]">
              Una vez que el implante se ha fusionado con el hueso circundante,
              proporciona una base sólida y estable para colocar una corona,
              un puente o una prótesis dental.
            </p>

            <div className="mt-8 rounded-[2rem] border border-[#DFD3E4] bg-white p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EDE6FA] text-[#5B0AB3]">
                  <ShieldCheck size={19} strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#302C32]">
                    Una base para restaurar función y estética
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#716A73]">
                    La técnica busca proporcionar estabilidad para sustituir
                    dientes naturales ausentes.
                  </p>
                </div>
              </div>
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
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Ventajas
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              No se trata solo de
              <br />
              reemplazar un diente.
              <br />
              <span className="italic text-[#5B0AB3]">
                Se trata de recuperarlo.
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
          CANDIDATE
      ======================================================= */}

      <section className="bg-[#EFE7DE] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              ¿Es para ti?
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#252127] sm:text-6xl">
              Cada sonrisa
              <br />
              necesita una
              <span className="italic text-[#5B0AB3]">
                {" "}
                valoración.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#716A73]">
              La candidatura depende de la salud bucal y de las necesidades
              individuales de cada paciente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="rounded-[2.25rem] bg-[#F8F5F1]/85 p-7 sm:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8E828B]">
              Algunos factores
            </p>

            <div className="mt-7 space-y-4">
              {candidateSigns.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EDE6FA] text-[#5B0AB3]">
                    <Check size={14} strokeWidth={2.5} />
                  </span>

                  <p className="text-sm leading-6 text-[#5D565E]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] bg-white p-5">
              <p className="text-sm leading-6 text-[#6E6670]">
                Incluso las personas con pérdida ósea pueden ser candidatas
                adecuadas con técnicas como los injertos óseos.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =======================================================
          PROCESS
      ======================================================= */}

      <section
        id="proceso"
        className="scroll-mt-28 bg-[#F8F5F1] px-6 py-24 lg:px-8 lg:py-32"
      >
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
              Del diagnóstico
              <br />
              a una nueva
              <span className="italic text-[#5B0AB3]">
                {" "}
                estabilidad.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#716A73]">
              La colocación de un implante dental ocurre en varias etapas y el
              tiempo total depende de las necesidades de cada paciente.
            </p>
          </motion.div>

          <div className="mt-14">
            {process.map((step, index) => (
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
                className="grid gap-5 border-t border-[#E4DBD3] py-7 md:grid-cols-[90px_270px_1fr] md:items-start md:gap-8"
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-10 rounded-[2rem] border border-[#DDD2E3] bg-white p-6 sm:p-8"
          >
            <p className="text-sm leading-7 text-[#6F6871]">
              Por lo general, desde la colocación del implante hasta la
              finalización del tratamiento con la prótesis dental puede tomar
              de tres a seis meses, incluyendo el tiempo de cicatrización.
            </p>
          </motion.div>
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
              Todo lo que quieres
              <br />
              saber sobre
              <span className="italic text-[#5B0AB3]">
                {" "}
                implantes.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#716A73]">
              Resolvemos algunas de las preguntas más comunes antes de dar el
              siguiente paso.
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
                    aria-controls={`implant-faq-${index}`}
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
                        id={`implant-faq-${index}`}
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
                  Tu próxima consulta
                </p>

                <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-white sm:text-6xl">
                  Da el primer paso
                  <br />
                  hacia una sonrisa
                  <span className="italic text-[#DCC9FA]">
                    {" "}
                    completa.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-base leading-7 text-white/75">
                  Agenda una valoración para conocer las opciones disponibles
                  para tu caso.
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