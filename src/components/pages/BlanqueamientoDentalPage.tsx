"use client";

import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
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

const steps = [
  {
    number: "01",
    title: "Evaluación inicial",
    text: "Antes de comenzar el tratamiento, un dentista realizará una evaluación para determinar la idoneidad del paciente para el blanqueamiento dental e identificar cualquier problema dental que requiera atención previa.",
  },
  {
    number: "02",
    title: "Preparación",
    text: "En algunos casos, puede ser necesario limpiar los dientes para eliminar placa o sarro. Además, se puede aplicar un protector de goma en las encías para protegerlas del agente blanqueador.",
  },
  {
    number: "03",
    title: "Aplicación del agente blanqueador",
    text: "El agente blanqueador, generalmente un gel con peróxido de hidrógeno o peróxido de carbamida, se aplica sobre la superficie de los dientes y se activa con luz LED, láser u otras fuentes de energía, según el método utilizado.",
  },
  {
    number: "04",
    title: "Activación y tiempo de espera",
    text: "La luz o energía aplicada activa el agente blanqueador y se deja en su lugar durante un tiempo específico, generalmente entre 30 minutos y una hora, dependiendo del tipo de tratamiento y de la intensidad del blanqueamiento deseado.",
  },
  {
    number: "05",
    title: "Enjuague y evaluación final",
    text: "Una vez transcurrido el tiempo de espera, se enjuagan los dientes para eliminar el agente blanqueador. El dentista evaluará el resultado y puede repetir el proceso varias veces para lograr el nivel deseado de blancura.",
  },
];

const benefits = [
  {
    icon: Sparkles,
    title: "Mejora de la apariencia",
    text: "Puede eliminar manchas causadas por café, té, vino tinto, tabaco y otros alimentos o bebidas pigmentadas, además de la decoloración natural que ocurre con el tiempo.",
  },
  {
    icon: Clock3,
    title: "Resultados rápidos y efectivos",
    text: "A menudo ofrece resultados visibles después de una sola sesión, aunque se pueden requerir múltiples sesiones para alcanzar el nivel de blancura deseado.",
  },
  {
    icon: ShieldCheck,
    title: "Procedimiento no invasivo y seguro",
    text: "Es un procedimiento no invasivo que generalmente se realiza en consulta y puede presentar sensibilidad temporal en algunos casos.",
  },
];

const considerations = [
  "La evaluación inicial ayuda a determinar si el tratamiento es adecuado para ti.",
  "Puede existir sensibilidad dental durante o después del tratamiento.",
  "Las restauraciones dentales no cambian de color con el blanqueamiento.",
  "Los hábitos de cuidado bucal y alimentación influyen en la duración de los resultados.",
];

const faqs = [
  {
    question: "¿Qué es el blanqueamiento dental y cómo funciona?",
    answer:
      "El blanqueamiento dental es un procedimiento cosmético que utiliza agentes blanqueadores para aclarar el color de los dientes. Generalmente, se aplica un gel blanqueador que contiene peróxido de hidrógeno o peróxido de carbamida sobre la superficie dental. Estos agentes químicos penetran el esmalte y oxidan las manchas y decoloraciones, dejando los dientes más blancos.",
  },
  {
    question: "¿Es seguro el blanqueamiento dental?",
    answer:
      "Sí, cuando se realiza bajo la supervisión de un dentista calificado, el blanqueamiento dental es un procedimiento seguro y efectivo. Los productos utilizados están formulados para minimizar el riesgo de sensibilidad dental y otros efectos secundarios.",
  },
  {
    question: "¿Cuánto tiempo dura el efecto del blanqueamiento dental?",
    answer:
      "La duración de los resultados del blanqueamiento dental puede variar según los hábitos de cuidado bucal y alimenticios del paciente. En general, los efectos pueden durar de seis meses a dos años. Mantener una buena higiene oral y evitar alimentos y bebidas que manchen los dientes puede ayudar a prolongar los resultados.",
  },
  {
    question: "¿Cuánto tiempo lleva el proceso de blanqueamiento dental en Monterrey?",
    answer:
      "El tiempo necesario para completar un tratamiento de blanqueamiento dental varía según el método utilizado. Los procedimientos en la oficina pueden durar entre una y dos horas, mientras que los kits de blanqueamiento casero pueden requerir varias semanas para obtener resultados óptimos.",
  },
  {
    question: "¿El blanqueamiento dental causa sensibilidad?",
    answer:
      "Es posible experimentar sensibilidad dental durante o después del blanqueamiento dental, especialmente en casos de tratamientos intensivos o si el paciente tiene una sensibilidad previa. Sin embargo, los dentistas pueden ofrecer productos y técnicas para minimizar este efecto secundario.",
  },
  {
    question: "¿Qué opciones de blanqueamiento dental están disponibles en Monterrey?",
    answer:
      "En Monterrey, los pacientes tienen acceso a una variedad de opciones de blanqueamiento dental, que incluyen tratamientos en la oficina realizados por profesionales dentales y kits de blanqueamiento para uso en el hogar. La elección depende de las necesidades y preferencias del paciente, así como de la evaluación del dentista.",
  },
  {
    question: "¿El blanqueamiento dental es adecuado para todos?",
    answer:
      "No todos los pacientes son candidatos ideales para el blanqueamiento dental. Por ejemplo, las mujeres embarazadas o lactantes, los niños y los adolescentes, y las personas con ciertas condiciones dentales pueden no ser aptos para este procedimiento. Es importante consultar a un dentista para determinar la idoneidad del paciente antes de realizar el tratamiento.",
  },
  {
    question: "¿Cómo puedo mantener mis dientes blancos después del blanqueamiento?",
    answer:
      "Para mantener los resultados del blanqueamiento dental, es crucial mantener una buena higiene oral, cepillarse los dientes al menos dos veces al día, usar hilo dental regularmente y visitar al dentista para limpiezas profesionales periódicas. Además, evitar el consumo excesivo de alimentos y bebidas que puedan manchar los dientes, como café, té, vino tinto y tabaco.",
  },
  {
    question: "¿Puedo hacerme un blanqueamiento dental si tengo restauraciones dentales?",
    answer:
      "El blanqueamiento dental solo afecta el color de los dientes naturales y no cambiará el color de las restauraciones dentales, como empastes, coronas o carillas. Si el paciente tiene restauraciones visibles en los dientes frontales, es posible que sea necesario ajustarlas después del blanqueamiento para que coincidan con el nuevo color de los dientes naturales.",
  },
  {
    question: "¿Cuál es el costo del blanqueamiento dental en Monterrey?",
    answer:
      "El costo del blanqueamiento dental puede variar según el método utilizado, la experiencia del dentista y otros factores. En general, los tratamientos en la oficina tienden a ser más costosos que los kits de blanqueamiento casero. Es importante programar una consulta con un dentista para obtener un presupuesto preciso según las necesidades individuales del paciente.",
  },
];

export default function BlanqueamientoDentalPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="overflow-x-hidden bg-[#F8F5F1] text-[#222222]">
      <Navbar />

      {/* =======================================================
          HERO
      ======================================================= */}

      <section className="relative px-6 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.82fr] lg:items-center">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Tratamiento · Estética dental
            </p>

            <h1 className="mt-5 font-[var(--font-heading)] text-[clamp(3.5rem,7vw,6.8rem)] font-normal leading-[0.9] tracking-[-0.045em] text-[#222126]">
              Una sonrisa más
              <br />
              <span className="italic text-[#5B0AB3]">
                luminosa.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#6F6870] sm:text-lg">
              El blanqueamiento dental es un procedimiento estético diseñado
              para iluminar y embellecer la sonrisa, ayudando a eliminar
              manchas y decoloraciones para devolver a los dientes su brillo
              natural.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappData.citaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#5B0AB3] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6D14C8] hover:shadow-[0_20px_45px_rgba(91,10,179,0.2)]"
              >
                Agenda tu cita
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="#procedimiento"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#D0C5DA] bg-white/70 px-7 py-4 text-sm font-semibold text-[#5B0AB3] transition-all duration-300 hover:-translate-y-1 hover:border-[#5B0AB3]"
              >
                Conoce el procedimiento
                <ChevronDown size={16} />
              </a>
            </div>
          </motion.div>

          {/* Decorative visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative"
          >
            <div className="relative min-h-[430px] overflow-hidden rounded-[2.5rem] bg-[#EDE6FA] p-7 sm:min-h-[520px] sm:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#CDB2ED] opacity-70 blur-2xl" />
              <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#E7D7C9] opacity-80 blur-3xl" />

              <div className="relative flex h-full min-h-[370px] flex-col justify-between sm:min-h-[440px]">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/75 text-[#5B0AB3] backdrop-blur-sm">
                    <Sparkles size={21} strokeWidth={1.8} />
                  </div>

                  <span className="font-[var(--font-heading)] text-5xl text-[#D9C9E4]">
                    01
                  </span>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7D6E82]">
                    Blanqueamiento dental
                  </p>

                  <p className="mt-4 max-w-sm font-[var(--font-heading)] text-4xl leading-[0.98] text-[#3B3040] sm:text-5xl">
                    Más brillo.
                    <br />
                    <span className="italic text-[#5B0AB3]">
                      Más confianza.
                    </span>
                  </p>

                  <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white/75 px-4 py-3 text-xs font-medium text-[#625967] backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-[#5B0AB3]" />
                    Tratamiento estético
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
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.78fr_1.22fr]">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Conoce el tratamiento
            </p>

            <h2 className="mt-5 max-w-md font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              ¿Qué es el
              <br />
              <span className="italic text-[#5B0AB3]">
                blanqueamiento dental?
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
              El blanqueamiento dental láser es un procedimiento cosmético
              utilizado para aclarar el color de los dientes y eliminar
              manchas y decoloraciones.
            </p>

            <p className="mt-6 text-base leading-8 text-[#716A73]">
              Este método utiliza agentes blanqueadores como peróxido de
              hidrógeno o peróxido de carbamida, que se aplican sobre los
              dientes y pueden activarse mediante luz LED o láser. El
              procedimiento generalmente se realiza en el consultorio dental
              bajo supervisión profesional.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] bg-[#F3EDF7] p-6">
                <Sparkles
                  size={21}
                  strokeWidth={1.7}
                  className="text-[#5B0AB3]"
                />

                <h3 className="mt-5 text-sm font-semibold text-[#29262C]">
                  Enfoque estético
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#726A73]">
                  Diseñado para aclarar el tono de los dientes y mejorar la
                  apariencia de la sonrisa.
                </p>
              </div>

              <div className="rounded-[1.75rem] bg-[#EFE7DE] p-6">
                <Stethoscope
                  size={21}
                  strokeWidth={1.7}
                  className="text-[#5B0AB3]"
                />

                <h3 className="mt-5 text-sm font-semibold text-[#29262C]">
                  Supervisión profesional
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#726A73]">
                  El tratamiento se realiza bajo la supervisión de un
                  profesional dental.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =======================================================
          PROCEDURE
      ======================================================= */}

      <section
        id="procedimiento"
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
              El procedimiento
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Paso a paso,
              <br />
              <span className="italic text-[#5B0AB3]">
                con claridad.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#716A73]">
              Conoce las etapas que forman parte del proceso de
              blanqueamiento dental.
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
                className="group grid gap-6 border-t border-[#E4DBD3] py-7 md:grid-cols-[90px_260px_1fr] md:items-start md:gap-8"
              >
                <span className="font-[var(--font-heading)] text-4xl text-[#D5C7D9]">
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
              ¿Por qué elegir un
              <br />
              <span className="italic text-[#5B0AB3]">
                blanqueamiento dental?
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

                  <h3 className="mt-10 font-[var(--font-heading)] text-2xl font-normal leading-tight text-[#29252B]">
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
          CONSIDERATIONS
      ======================================================= */}

      <section className="bg-[#EFE7DE] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Antes de tu tratamiento
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#252127] sm:text-6xl">
              Lo importante
              <br />
              <span className="italic text-[#5B0AB3]">
                antes de empezar.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="rounded-[2.25rem] bg-[#F8F5F1]/80 p-7 sm:p-10"
          >
            <div className="space-y-5">
              {considerations.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EDE6FA] text-[#5B0AB3]">
                    <Check size={15} strokeWidth={2.5} />
                  </span>

                  <p className="text-sm leading-7 text-[#5B545C]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 rounded-[1.75rem] bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EDE6FA] text-[#5B0AB3]">
                  <Heart size={18} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#2C282E]">
                    Una sonrisa que se sienta como tú.
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#726A73]">
                    La elección del tratamiento depende de tus necesidades,
                    preferencias y de la evaluación realizada por tu
                    dentista.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =======================================================
          CARE
      ======================================================= */}

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Después del tratamiento
            </p>

            <h2 className="mt-5 max-w-xl font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Haz que los resultados
              <span className="italic text-[#5B0AB3]">
                {" "}
                duren más.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#706971]">
              Mantener una buena higiene oral, realizar limpiezas profesionales
              periódicas y cuidar el consumo de alimentos y bebidas que puedan
              manchar los dientes puede ayudar a prolongar los resultados.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="rounded-[2.25rem] bg-[#F3EDF7] p-7 sm:p-10"
          >
            <ShieldCheck
              size={24}
              strokeWidth={1.7}
              className="text-[#5B0AB3]"
            />

            <h3 className="mt-7 font-[var(--font-heading)] text-3xl text-[#302934]">
              Cuidados sencillos
            </h3>

            <div className="mt-7 space-y-4">
              {[
                "Cepillarte los dientes al menos dos veces al día.",
                "Usar hilo dental regularmente.",
                "Realizar limpiezas profesionales periódicas.",
                "Evitar el consumo excesivo de alimentos y bebidas que puedan manchar los dientes.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#5B0AB3]">
                    <Check size={13} strokeWidth={2.5} />
                  </span>

                  <p className="text-sm leading-6 text-[#645C66]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* =======================================================
          FAQ
      ======================================================= */}

      <section
        id="preguntas"
        className="scroll-mt-28 bg-[#F8F5F1] px-6 py-24 lg:px-8 lg:py-32"
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
              <span className="italic text-[#5B0AB3]">
                saber antes de tu cita.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#716A73]">
              Resolvemos algunas de las preguntas más comunes sobre el
              blanqueamiento dental.
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
                  className="overflow-hidden rounded-[1.5rem] border border-[#E4DCE5] bg-white"
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
                  Sonrisas saludables
                </p>

                <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-white sm:text-6xl">
                  Más luz,
                  <br />
                  <span className="italic text-[#DCC9FA]">
                    más confianza.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-base leading-7 text-white/75">
                  Escríbenos para conocer las opciones disponibles.
                </p>
              </div>

              <a
                href={whatsappData.blanqueamientoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#5B0AB3] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:w-auto"
              >
                <MessageCircle size={18} />
                Contáctanos por WhatsApp
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