"use client";

import {
  ArrowUpRight,
  Check,
  ChevronRight,
  CreditCard,
  Heart,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  WalletCards,
  Wifi,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TreatmentsSection from "@/components/common/TreatmentsSection";
import { whatsappData } from "@/lib/whatsapp";

const sections = [
  {
    number: "01",
    label: "Salud dental",
    href: "#salud-dental",
  },
  {
    number: "02",
    label: "Cómo elegir",
    href: "#como-elegir",
  },
  {
    number: "03",
    label: "Servicios",
    href: "#servicios",
  },
  {
    number: "04",
    label: "Tecnología",
    href: "#tecnologia",
  },
  {
    number: "05",
    label: "Equipo",
    href: "#equipo",
  },
  {
    number: "06",
    label: "Reseñas",
    href: "#resenas",
  },
  {
    number: "07",
    label: "Pagos",
    href: "#pagos",
  },
  {
    number: "08",
    label: "Comodidades",
    href: "#comodidades",
  },
];

const criteria = [
  {
    number: "01",
    title: "Experiencia y calificaciones",
    text:
      "Asegúrate de que la clínica cuente con un equipo de dentistas y especialistas altamente capacitados y con experiencia en diversas áreas de la odontología.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Servicios ofrecidos",
    text:
      "Verifica que la clínica dental ofrezca una amplia gama de servicios para cubrir tus necesidades dentales, desde limpiezas y extracciones hasta tratamientos como ortodoncia o implantes dentales.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Tecnología y equipamiento",
    text:
      "Investiga sobre la tecnología y el equipamiento utilizados en la clínica. La adopción de tecnologías modernas puede mejorar la precisión y eficiencia de los tratamientos dentales.",
    icon: Wifi,
  },
];

const practicalFactors = [
  {
    title: "Experiencia y calificaciones de los dentistas",
    text:
      "La experiencia y las calificaciones de los dentistas son fundamentales al elegir una clínica dental en Monterrey. También es recomendable buscar dentistas que participen en programas de educación continua.",
  },
  {
    title: "Opiniones y testimonios de pacientes anteriores",
    text:
      "Las opiniones y testimonios de pacientes anteriores pueden darte una idea de la calidad de los servicios y la experiencia que puedes esperar. Lee reseñas en línea y busca testimonios.",
  },
  {
    title: "Cobertura de seguro y opciones de pago",
    text:
      "Antes de elegir una clínica dental, verifica si aceptan tu seguro dental y qué opciones de pago o financiamiento están disponibles.",
  },
  {
    title: "Comodidades y servicios adicionales",
    text:
      "Algunas clínicas ofrecen comodidades adicionales para hacer que la visita sea más agradable, como estacionamiento, Wi-Fi o salas de espera cómodas.",
  },
];

const technology = [
  {
    number: "01",
    title: "Radiografías digitales",
    text:
      "Estas radiografías ofrecen imágenes detalladas de los dientes y estructuras orales y permiten a los dentistas analizar y diagnosticar con mayor precisión diferentes problemas dentales.",
  },
  {
    number: "02",
    title: "Cámaras intraorales",
    text:
      "Estas pequeñas cámaras de alta resolución permiten capturar imágenes detalladas de los dientes y encías, facilitando el diagnóstico y la comunicación con los pacientes.",
  },
  {
    number: "03",
    title: "Sistemas de impresión digital",
    text:
      "En lugar de utilizar moldes de alginato, algunas clínicas utilizan sistemas de impresión digital para obtener modelos precisos de los dientes y encías.",
  },
];

const professionalFactors = [
  "Licencias y certificaciones.",
  "Educación y formación.",
  "Experiencia y casos exitosos.",
];

export default function MejorClinicaDentalPage() {
  return (
    <main className="overflow-x-hidden bg-[#F8F5F1] text-[#222222]">
      <Navbar />

      {/* =======================================================
          HERO
      ======================================================= */}

      <section className="px-6 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Guía CODANTIS · Monterrey
            </p>

            <h1 className="mt-5 max-w-4xl font-[var(--font-heading)] text-[clamp(3.4rem,7vw,6.8rem)] font-normal leading-[0.91] tracking-[-0.045em] text-[#222126]">
              Encuentra la clínica
              <br />
              dental adecuada
              <br />
              <span className="italic text-[#5B0AB3]">
                para tu sonrisa.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#6F6870] sm:text-lg">
              Si estás buscando una clínica dental en Monterrey, hay más que
              una sonrisa bonita que considerar. Experiencia, servicios,
              tecnología y la forma en que te hacen sentir también importan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="rounded-[2.5rem] bg-[#EDE6FA] p-7 sm:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C6C87]">
              Una buena clínica debería ayudarte a sentirte
            </p>

            <div className="mt-6 space-y-4">
              {[
                "Cómodo",
                "Confiado",
                "Bien acompañado",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#5B0AB3]">
                    <span className="font-[var(--font-heading)] text-lg">
                      0{index + 1}
                    </span>
                  </span>

                  <span className="font-[var(--font-heading)] text-2xl text-[#3B3040]">
                    {item}.
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* =======================================================
          ARTICLE NAVIGATION
      ======================================================= */}

      <section className="border-y border-[#E7DED5] bg-white/60">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {sections.map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#DDD3E2] bg-white px-4 py-2.5 text-xs font-semibold text-[#665D68] transition-colors hover:border-[#5B0AB3] hover:text-[#5B0AB3]"
              >
                <span className="text-[#B7A6BD]">
                  {section.number}
                </span>

                {section.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =======================================================
          INTRO / HEALTH
      ======================================================= */}

      <section
        id="salud-dental"
        className="scroll-mt-28 bg-white px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              La importancia de la salud dental
            </p>

            <h2 className="mt-5 max-w-md font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Una sonrisa bonita
              <br />
              también habla de
              <span className="italic text-[#5B0AB3]">
                {" "}
                bienestar.
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
              Mantener una buena salud dental no solo se trata de tener una
              sonrisa bonita, sino también de cuidar de tu bienestar general.
              Una buena higiene oral y visitas regulares al dentista pueden
              prevenir problemas dentales graves y otras enfermedades
              relacionadas.
            </p>

            <p className="mt-7 text-base leading-8 text-[#716A73]">
              Un dentista de confianza no solo se encargará de mantener tus
              dientes limpios y sanos, sino que también te brindará consejos y
              recomendaciones para el cuidado dental diario. Además, una buena
              salud dental puede aumentar tu confianza y mejorar tu calidad de
              vida.
            </p>
          </motion.div>

        </div>
      </section>

      {/* =======================================================
          HOW TO CHOOSE
      ======================================================= */}

      <section
        id="como-elegir"
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
              Cómo elegir
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              No todas las clínicas
              <br />
              ofrecen la misma
              <span className="italic text-[#5B0AB3]">
                {" "}
                experiencia.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#716A73]">
              Al elegir una clínica dental en Monterrey, es importante
              considerar varios aspectos para garantizar que recibas el mejor
              cuidado posible.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {criteria.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -6 }}
                  className="group rounded-[2rem] border border-[#E4DBD4] bg-white p-7 shadow-[0_15px_40px_rgba(46,30,20,0.04)] sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EDE6FA] text-[#5B0AB3] transition-transform duration-300 group-hover:rotate-6">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <span className="font-[var(--font-heading)] text-4xl text-[#E6DCE9]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-10 font-[var(--font-heading)] text-2xl leading-tight text-[#2B272D]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#716A73]">
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =======================================================
          PRACTICAL FACTORS
      ======================================================= */}

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Factores prácticos
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Mira más allá
              <br />
              del consultorio.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#716A73]">
              La atención que recibes también está determinada por la
              experiencia, la comunicación y las condiciones que ofrece la
              clínica.
            </p>
          </motion.div>

          <div className="space-y-5">
            {practicalFactors.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                className="rounded-[2rem] border border-[#E4DBD4] bg-[#F8F5F1] p-7 sm:p-8"
              >
                <div className="flex gap-5">
                  <span className="font-[var(--font-heading)] text-3xl text-[#C9B7D1]">
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold text-[#2B272D]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#716A73]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =======================================================
          SERVICES
      ======================================================= */}

      <div id="servicios">
        <TreatmentsSection
          title="De la prevención a los tratamientos"
          subtitle="especializados."
          description="Una clínica dental integral puede reunir diferentes áreas para atender las necesidades de salud y estética de tu sonrisa."
        />
      </div>

      {/* =======================================================
          TECHNOLOGY
      ======================================================= */}

      <section
        id="tecnologia"
        className="scroll-mt-28 bg-[#EFE7DE] px-6 py-24 lg:px-8 lg:py-32"
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
              Tecnología y equipamiento
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#252127] sm:text-6xl">
              La tecnología también
              <br />
              forma parte de la
              <span className="italic text-[#5B0AB3]">
                {" "}
                experiencia.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#716A73]">
              Las clínicas dentales pueden utilizar distintas herramientas
              para mejorar la precisión, el diagnóstico y la comodidad del
              paciente.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {technology.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="rounded-[2rem] bg-[#F8F5F1]/80 p-7 sm:p-8"
              >
                <span className="font-[var(--font-heading)] text-4xl text-[#CBBAC7]">
                  {item.number}
                </span>

                <h3 className="mt-9 font-[var(--font-heading)] text-2xl text-[#302A31]">
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
          PROFESSIONALS
      ======================================================= */}

      <section
        id="equipo"
        className="scroll-mt-28 bg-white px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Cualificación y experiencia
            </p>

            <h2 className="mt-5 max-w-md font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Conoce quién estará
              <span className="italic text-[#5B0AB3]">
                {" "}
                cuidando tu sonrisa.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="rounded-[2.25rem] bg-[#F8F5F1] p-7 sm:p-10"
          >
            <div className="space-y-5">
              {professionalFactors.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EDE6FA] text-[#5B0AB3]">
                    <Check size={15} strokeWidth={2.5} />
                  </span>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#958895]">
                      0{index + 1}
                    </p>

                    <p className="mt-1 text-sm font-medium text-[#464049]">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 border-t border-[#E4DCD6] pt-7">
              <p className="text-sm leading-7 text-[#716A73]">
                La formación y experiencia de los dentistas juegan un papel
                crucial en la calidad de los tratamientos y la atención que
                recibirás.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =======================================================
          REVIEWS
      ======================================================= */}

      <section
        id="resenas"
        className="scroll-mt-28 bg-[#F3EDF7] px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Reseñas y testimonios
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#29242C] sm:text-6xl">
              Escucha a quienes
              <br />
              ya han estado
              <span className="italic text-[#5B0AB3]">
                {" "}
                ahí.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#716A73]">
              Las experiencias reales pueden ayudarte a tener una idea más
              clara de la atención que puedes esperar de una clínica.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="mt-12 rounded-[2.25rem] bg-white p-7 sm:p-10"
          >
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-1 text-[#5B0AB3]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={17}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                <p className="mt-5 max-w-2xl font-[var(--font-heading)] text-2xl leading-tight text-[#342D36] sm:text-3xl">
                  Busca patrones en las opiniones y considera tanto los
                  comentarios positivos como los negativos.
                </p>
              </div>

              <div className="shrink-0 rounded-full bg-[#EDE6FA] px-5 py-3 text-xs font-semibold text-[#5B0AB3]">
                Opiniones reales
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
          PAYMENT
      ======================================================= */}

      <section
        id="pagos"
        className="scroll-mt-28 bg-white px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1fr]">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Seguros y opciones de pago
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              La salud dental
              <br />
              también debe ser
              <span className="italic text-[#5B0AB3]">
                {" "}
                accesible.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#716A73]">
              Antes de elegir una clínica dental, verifica si aceptan tu
              seguro y cuáles son las opciones de pago disponibles.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: CreditCard,
                title: "Cobertura de seguros",
                text:
                  "Verifica si la clínica acepta tu seguro y si puede ayudarte con el proceso de reclamación.",
              },
              {
                icon: WalletCards,
                title: "Opciones de pago",
                text:
                  "Pregunta por financiamiento o planes de pago cuando estén disponibles.",
              },
              {
                icon: Heart,
                title: "Inversión a largo plazo",
                text:
                  "La salud dental puede ser una inversión importante en tu bienestar.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.07,
                    ease: "easeOut",
                  }}
                  className="rounded-[1.75rem] bg-[#F8F5F1] p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EDE6FA] text-[#5B0AB3]">
                    <Icon size={19} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-6 text-sm font-semibold text-[#2D2930]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#716A73]">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =======================================================
          AMENITIES
      ======================================================= */}

      <section
        id="comodidades"
        className="scroll-mt-28 bg-[#EFE7DE] px-6 py-24 lg:px-8 lg:py-32"
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
              Comodidades
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#252127] sm:text-6xl">
              Los pequeños detalles
              <br />
              también cambian la
              <span className="italic text-[#5B0AB3]">
                {" "}
                experiencia.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#716A73]">
              Algunas clínicas ofrecen servicios adicionales para hacer que la
              visita sea más agradable.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              "Estacionamiento",
              "Wi-Fi",
              "Sala de espera cómoda",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5 }}
                className="rounded-[2rem] bg-[#F8F5F1] p-7"
              >
                <span className="font-[var(--font-heading)] text-4xl text-[#CDBAC7]">
                  0{index + 1}
                </span>

                <h3 className="mt-8 text-lg font-semibold text-[#332D33]">
                  {item}
                </h3>

                <div className="mt-5 h-px w-12 bg-[#BCA1C7]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =======================================================
          CONCLUSION
      ======================================================= */}

      <section className="bg-[#F8F5F1] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              En conclusión
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#252127] sm:text-6xl">
              Encontrar una clínica
              <br />
              también es encontrar
              <span className="italic text-[#5B0AB3]">
                {" "}
                confianza.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#716A73]">
              Considera la experiencia del equipo dental, los servicios
              ofrecidos, las opiniones de pacientes anteriores y las opciones
              de pago antes de tomar una decisión informada.
            </p>
          </motion.div>

        </div>
      </section>

      {/* =======================================================
          EMERGENCY CTA
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

            <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                  ¿Necesitas atención?
                </p>

                <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-white sm:text-6xl">
                  Estamos aquí para
                  <span className="italic text-[#DCC9FA]">
                    {" "}
                    ayudarte.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-7 text-white/75">
                  Para información sobre una urgencia dental, tratamientos o
                  una cita, ponte en contacto directamente con CODANTIS.
                </p>
              </div>

              <a
                href={whatsappData.contactoUrl}
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