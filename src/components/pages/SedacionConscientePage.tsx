"use client";

import Image from "next/image";
import Link from "next/link";
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
  UserRoundCheck,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { whatsappData } from "@/lib/whatsapp";

const sedationTypes = [
  {
    id: "minima",
    label: "Mínima",
    eyebrow: "Sedación mínima",
    description:
      "El paciente está despierto, responde a órdenes verbales, se altera muy ligeramente la función cognitiva y la coordinación.",
  },
  {
    id: "moderada",
    label: "Moderada",
    eyebrow: "Sedación moderada",
    description:
      "En esta modalidad la conciencia está más deprimida que en la forma anterior. En ella el paciente sigue conservando la capacidad de respirar espontáneamente y mantiene los reflejos de protección de la vía aérea. Existe una menor respuesta a estímulos físicos y órdenes verbales. Aquí el paciente está calmado y tranquilo y mantiene un cierto grado de amnesia.",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Reducción de la ansiedad y el miedo",
    description:
      "La sedación consciente ayuda a calmar a los pacientes ansiosos o temerosos, permitiéndoles recibir el tratamiento necesario de manera más relajada y cómoda.",
  },
  {
    icon: Sparkles,
    title: "Mejora de la experiencia del paciente",
    description:
      "Al estar en un estado de relajación controlada, los pacientes pueden percibir el tratamiento como más rápido y menos molesto.",
  },
  {
    icon: ShieldCheck,
    title: "Facilitación del tratamiento dental complejo",
    description:
      "La sedación consciente permite realizar procedimientos más extensos o complejos de manera más eficiente, ya que el paciente está cómodamente sedado.",
  },
];

const stats = [
  {
    value: "+15",
    label: "Años de experiencia",
  },
  {
    value: "+1",
    label: "Clínica de especialidades",
  },
  {
    value: "+2",
    label: "Odontólogos generales y especialistas",
  },
  {
    value: "+90",
    label: "Clientes empresariales",
  },
];

const faqs = [
  {
    question:
      "¿Qué es la sedación consciente y cómo se aplica en Monterrey, Nuevo León?",
    answer:
      "La sedación consciente es un procedimiento utilizado en odontología para ayudar a los pacientes a sentirse relajados y cómodos durante los tratamientos. En Monterrey, Nuevo León, se administra a través de la inhalación de óxido nitroso, también conocido como gas hilarante, y en algunos casos, mediante medicamentos administrados por vía intravenosa. Esto permite que los pacientes permanezcan conscientes y capaces de responder a las indicaciones del dentista, pero con una sensación de relajación profunda.",
  },
  {
    question:
      "¿Cuáles son los beneficios de la sedación consciente en odontología en Monterrey, México?",
    answer:
      "Los beneficios de la sedación consciente en odontología incluyen la reducción de la ansiedad y el miedo asociados con los tratamientos dentales, lo que permite a los pacientes recibir el cuidado que necesitan sin experimentar malestar emocional. También ayuda a los pacientes con sensibilidad dental, reflejos fuertes o dificultad para controlar el movimiento a permanecer tranquilos durante los procedimientos.",
  },
  {
    question:
      "¿Qué tipos de tratamientos dentales pueden realizarse con sedación consciente en Monterrey?",
    answer:
      "La sedación consciente se puede utilizar para una variedad de tratamientos dentales, desde limpiezas y exámenes de rutina hasta procedimientos más complejos como extracciones de muelas del juicio o colocación de implantes dentales. También es útil para pacientes con necesidades especiales o fobias dentales.",
  },
  {
    question:
      "¿Cómo afecta la sedación consciente en Monterrey al proceso de recuperación del paciente?",
    answer:
      "La sedación consciente tiene efectos mínimos en el proceso de recuperación del paciente. Después del tratamiento, los pacientes suelen recuperarse rápidamente y pueden volver a sus actividades diarias normales con poco o ningún tiempo de inactividad. Es importante que los pacientes eviten conducir o realizar actividades que requieran coordinación hasta que los efectos de la sedación hayan desaparecido por completo.",
  },
  {
    question:
      "¿Quién puede beneficiarse más de la sedación consciente en odontología en Monterrey?",
    answer:
      "La sedación consciente es ideal para pacientes que experimentan ansiedad extrema o miedo al visitar al dentista, así como para aquellos con sensibilidad dental, reflejos fuertes o dificultades para controlar el movimiento. También es útil para pacientes con necesidades especiales que pueden tener dificultades para cooperar durante los procedimientos.",
  },
  {
    question:
      "¿Cuáles son los riesgos asociados con la sedación consciente en Monterrey?",
    answer:
      "Aunque la sedación consciente es generalmente segura, como cualquier procedimiento médico, existen riesgos potenciales. Estos incluyen reacciones alérgicas al medicamento, problemas respiratorios y efectos secundarios como náuseas o mareos. Sin embargo, estos riesgos son raros y suelen ser mínimos cuando el procedimiento se realiza por profesionales capacitados y en un entorno controlado.",
  },
  {
    question:
      "¿Cómo se determina si soy un buen candidato para la sedación consciente en odontología en Monterrey?",
    answer:
      "Su dentista evaluará su historial médico y dental, así como cualquier preocupación específica que pueda tener, para determinar si la sedación consciente es adecuada para usted. Es importante informar a su dentista sobre cualquier condición médica preexistente, alergias o medicamentos que esté tomando.",
  },
  {
    question:
      "¿Cuánto tiempo dura el efecto de la sedación consciente en Monterrey?",
    answer:
      "La duración del efecto de la sedación consciente puede variar según el tipo y la cantidad de medicamento administrado, así como la respuesta individual del paciente. En general, los efectos suelen durar entre 30 minutos y una hora después de que se suspende la administración del medicamento.",
  },
  {
    question:
      "¿Cómo se controla la seguridad del paciente durante la sedación consciente en Monterrey?",
    answer:
      "Durante el procedimiento de sedación consciente, el equipo médico monitorea de cerca la frecuencia cardíaca, la presión arterial, la saturación de oxígeno y otros signos vitales del paciente para garantizar su seguridad. Además, se siguen estrictos protocolos de seguridad y se cuenta con equipos de emergencia en caso de que surjan complicaciones.",
  },
  {
    question:
      "¿Cuál es el costo de la sedación consciente en odontología en Monterrey y cómo se factura?",
    answer:
      "El costo de la sedación consciente en odontología puede variar según el tipo de tratamiento, la duración del procedimiento y otros factores. Es importante hablar con su dentista para obtener una estimación precisa de los costos y discutir las opciones de pago disponibles. En algunos casos, la sedación consciente puede estar cubierta por el seguro dental, por lo que es recomendable verificar la cobertura antes del tratamiento.",
  },
];

export default function SedacionConscientePage() {
  const [activeSedation, setActiveSedation] = useState("minima");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const activeType =
    sedationTypes.find((type) => type.id === activeSedation) ??
    sedationTypes[0];

  return (
    <main className="overflow-x-hidden bg-[#F8F5F1] text-[#222222]">

      <Navbar />

      {/* =======================================================
          HERO
      ======================================================= */}

      <section className="relative px-6 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <Link
              href="/"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A7D89] transition-colors hover:text-[#5B0AB3]"
            >
              CODANTIS / Tratamientos
            </Link>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Sedación consciente en Monterrey
            </p>

            <h1 className="mt-5 font-[var(--font-heading)] text-[clamp(3.7rem,8vw,7rem)] font-normal leading-[0.91] tracking-[-0.045em] text-[#222126]">
              Una experiencia
              <br />
              <span className="italic text-[#5B0AB3]">
                más tranquila.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#6F6870] sm:text-lg">
              ¿Buscas sedación consciente en Monterrey, Nuevo León? En
              CODANTIS encontrarás atención con especialistas altamente
              capacitados y tratamientos personalizados para cuidar tu
              sonrisa.
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
                href="#preguntas"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#D0C5DA] bg-white/70 px-7 py-4 text-sm font-semibold text-[#5B0AB3] transition-all duration-300 hover:-translate-y-1 hover:border-[#5B0AB3]"
              >
                Resolver mis dudas
                <ChevronDown size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#DED2E3]">
              <Image
                src="/img/dentistas.jpeg"
                alt="Equipo CODANTIS"
                width={900}
                height={1100}
                priority
                className="aspect-[4/4.5] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#241B27]/55 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                <div className="rounded-3xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
                      <UserRoundCheck size={20} strokeWidth={1.8} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                        Atención especializada
                      </p>

                      <p className="mt-1 max-w-xs text-sm leading-6">
                        La sedación está a cargo de un anestesiólogo certificado
                        y especializado en su área.
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
              Conoce el tratamiento
            </p>

            <h2 className="mt-5 max-w-md font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              ¿Qué es la
              <br />
              <span className="italic text-[#5B0AB3]">
                sedación consciente?
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
              La sedación es un estado de disminución de la conciencia,
              conservando la capacidad del paciente de respirar espontáneamente.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">

              <div className="rounded-[1.75rem] bg-[#F3EDF7] p-6">
                <Stethoscope
                  size={21}
                  strokeWidth={1.7}
                  className="text-[#5B0AB3]"
                />

                <h3 className="mt-5 text-sm font-semibold text-[#29262C]">
                  Tratamiento dental
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#726A73]">
                  El odontólogo realiza el tratamiento dental.
                </p>
              </div>

              <div className="rounded-[1.75rem] bg-[#EFE7DE] p-6">
                <ShieldCheck
                  size={21}
                  strokeWidth={1.7}
                  className="text-[#5B0AB3]"
                />

                <h3 className="mt-5 text-sm font-semibold text-[#29262C]">
                  Sedación especializada
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#726A73]">
                  La sedación está a cargo de un anestesiólogo certificado y
                  especializado en su área.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* =======================================================
          TYPES OF SEDATION
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
              Tipos de sedación
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Encuentra la modalidad
              <br />
              <span className="italic text-[#5B0AB3]">
                adecuada para ti.
              </span>
            </h2>
          </motion.div>

          {/* Clickable pills */}
          <div className="mt-10 inline-flex rounded-full border border-[#DDD3E2] bg-white p-1.5 shadow-[0_10px_30px_rgba(46,30,20,0.04)]">
            {sedationTypes.map((type) => {
              const active = activeSedation === type.id;

              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setActiveSedation(type.id)}
                  className="relative rounded-full px-5 py-3 text-sm font-semibold"
                >
                  {active && (
                    <motion.span
                      layoutId="activeSedation"
                      className="absolute inset-0 rounded-full bg-[#5B0AB3]"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}

                  <span
                    className={`relative z-10 ${
                      active ? "text-white" : "text-[#665D68]"
                    }`}
                  >
                    {type.label}
                  </span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeType.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-6 max-w-4xl rounded-[2.25rem] border border-[#E5DCE7] bg-white p-7 shadow-[0_18px_45px_rgba(46,30,20,0.05)] sm:p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7C6C87]">
                {activeType.eyebrow}
              </p>

              <p className="mt-5 max-w-3xl text-base leading-8 text-[#68616A]">
                {activeType.description}
              </p>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* =======================================================
          STATS
      ======================================================= */}

      <section className="border-y border-[#E8E0D8] bg-white/70">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-[#E8E0D8] px-6 sm:grid-cols-4 sm:divide-y-0 lg:px-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="px-5 py-8 sm:px-6 sm:py-10"
            >
              <div className="font-[var(--font-heading)] text-4xl text-[#5B0AB3] sm:text-5xl">
                {stat.value}
              </div>

              <p className="mt-3 max-w-[170px] text-xs leading-5 text-[#777279]">
                {stat.label}
              </p>
            </motion.div>
          ))}
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
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Beneficios
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Menos miedo.
              <br />
              <span className="italic text-[#5B0AB3]">
                Más tranquilidad.
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

                  <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-[#B0A5AF]">
                    0{index + 1}
                  </p>

                  <h3 className="mt-3 font-[var(--font-heading)] text-2xl font-normal leading-tight text-[#29252B]">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#716A73]">
                    {benefit.description}
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

      <section className="bg-[#EFE7DE] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Tu primera consulta
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#252127] sm:text-6xl">
              Todo comienza con
              <br />
              <span className="italic text-[#5B0AB3]">
                conocer tus necesidades.
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
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#5B0AB3] text-white">
                <Clock3 size={21} strokeWidth={1.8} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#29262D]">
                  Un plan pensado para ti
                </h3>

                <p className="mt-4 text-base leading-8 text-[#706971]">
                  En tu primera consulta, te guiarán una serie de pasos
                  cuidadosamente diseñados para ayudarte a alcanzar la sonrisa
                  de tus sueños. Nuestros especialistas en CODANTIS trabajarán
                  contigo para comprender tus necesidades únicas y ofrecerte
                  un plan de tratamiento personalizado.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              {[
                "Comprender tus necesidades únicas",
                "Escuchar tus preocupaciones",
                "Ofrecerte un plan de tratamiento personalizado",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-[#514A52]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EDE6FA] text-[#5B0AB3]">
                    <Check size={14} strokeWidth={2.5} />
                  </span>

                  {item}
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

            <h2 className="mt-5 max-w-3xl font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Lo que necesitas saber
              <br />
              <span className="italic text-[#5B0AB3]">
                antes de tu visita.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#716A73]">
              Hemos reunido las preguntas más comunes sobre la sedación
              consciente para que tengas la información a tu alcance.
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
                    duration: 0.55,
                    delay: Math.min(index * 0.03, 0.2),
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
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-7 sm:py-6"
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
                          <p className="max-w-4xl pl-12 text-sm leading-7 text-[#6F6871]">
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
                  ¿Tienes más preguntas?
                </p>

                <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-white sm:text-6xl">
                  Hablemos antes de
                  <span className="italic text-[#DCC9FA]">
                    {" "}
                    tu cita.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-base leading-7 text-white/75">
                  Escríbenos y conoce más sobre la sedación consciente y
                  nuestros tratamientos.
                </p>
              </div>

              <a
                href={whatsappData.sedacionUrl}
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

      {/* =======================================================
          FLOATING WHATSAPP
      ======================================================= */}

      <motion.a
        href={whatsappData.contactoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contáctanos por WhatsApp"
        initial={{
          opacity: 0,
          scale: 0.7,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.8,
          ease: "easeOut",
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#5B0AB3] text-white shadow-[0_12px_35px_rgba(91,10,179,0.28)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(91,10,179,0.38)] sm:bottom-6 sm:right-6"
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
    </main>
  );
}