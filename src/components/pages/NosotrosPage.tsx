"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Eye,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Target,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TreatmentsSection from "@/components/common/TreatmentsSection";
import TrustStats from "@/components/common/TrustStats";
import DoctorProfiles from "../common/DoctorProfiles";
import { whatsappData } from "@/lib/whatsapp";

const faqs = [
  {
    question: "¿Cómo reservo cita en la clínica dental de Monterrey?",
    answer:
      "Para reservar una cita en nuestra clínica dental en Monterrey, puedes hacerlo a través del sitio web o llamarnos directamente a la clínica para que nuestro equipo pueda programar tu cita según tus necesidades y preferencias.",
  },
  {
    question:
      "¿A qué beneficios puedo acceder al reservar cita en una clínica dental en Monterrey?",
    answer:
      "Al reservar cita puedes acceder a atención personalizada por parte de profesionales calificados, acceso a tecnología dental avanzada, tratamiento oportuno de problemas dentales, prevención de enfermedades bucodentales y la posibilidad de establecer un plan de tratamiento integral para mantener tu salud bucal a largo plazo.",
  },
  {
    question: "¿Qué especialidades tienen los dentistas de Monterrey?",
    answer:
      "Los dentistas en Monterrey pueden tener una amplia gama de especialidades, que incluyen ortodoncia, endodoncia, periodoncia, odontopediatría, cirugía oral y maxilofacial, implantología dental y odontología estética, entre otras. Cada especialidad se enfoca en diferentes aspectos de la salud bucal y puede ofrecer tratamientos específicos para las necesidades de cada paciente.",
  },
  {
    question:
      "¿A qué edad es recomendable empezar a visitar a un dentista en Monterrey?",
    answer:
      "Se recomienda que los niños visiten al dentista por primera vez alrededor de los 6 meses de edad, o cuando les salgan los primeros dientes. A partir de entonces, se debe realizar una visita dental regularmente para monitorear el desarrollo dental y prevenir problemas futuros.",
  },
  {
    question:
      "¿Con qué frecuencia debería hacerme una revisión dental en una clínica dental en Monterrey?",
    answer:
      "Se recomienda que los adultos y niños visiten una clínica dental para una revisión al menos una vez al año. Sin embargo, algunas personas pueden necesitar visitas más frecuentes según su historial dental y sus necesidades de tratamiento específicas.",
  },
  {
    question:
      "Si tengo un dolor dental y desaparece al poco tiempo, ¿debería acudir al dentista en Monterrey?",
    answer:
      "Aunque el dolor dental puede desaparecer temporalmente, es importante acudir al dentista tan pronto como sea posible para evaluar la causa subyacente del dolor. El dolor dental puede ser indicativo de problemas dentales que requieren tratamiento profesional para prevenir complicaciones futuras.",
  },
  {
    question: "¿Cuánto cuesta una consulta con el dentista en Monterrey?",
    answer:
      "El costo de una consulta puede variar según la clínica dental, el tipo de consulta y los servicios adicionales que se requieran. El precio debe confirmarse directamente con la clínica.",
  },
  {
    question: "¿Dónde puedo encontrar dentistas recomendados en Monterrey?",
    answer:
      "Puedes buscar recomendaciones preguntando a amigos, familiares o colegas por sus experiencias personales y revisar opiniones y testimonios de pacientes en línea.",
  },
  {
    question:
      "¿Qué tipos de tratamientos de periodoncia se ofrecen en Monterrey?",
    answer:
      "Los tratamientos de periodoncia pueden incluir limpiezas dentales profundas, raspado y alisado radicular, cirugía de colgajo, injertos de tejido blando y terapia con láser, entre otros. Es importante consultar con un periodoncista para determinar el tratamiento más adecuado según cada caso.",
  },
];

const clinicFeatures = [
  "Atención personalizada",
  "Tecnología dental avanzada",
  "Tratamientos integrales",
  "Equipo de profesionales",
];

const values = [
  {
    number: "01",
    title: "Trabajo en equipo",
    icon: HeartHandshake,
  },
  {
    number: "02",
    title: "Confianza y experiencia",
    icon: Eye,
  },
  {
    number: "03",
    title: "Profesionalismo",
    icon: Target,
  },
  {
    number: "04",
    title: "Fortaleza",
    icon: Check,
  },
];

const sectionReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
};

export default function NosotrosPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="overflow-x-hidden bg-[#F8F5F1] text-[#222222]">
      <Navbar />

      {/* =======================================================
          HERO
      ======================================================= */}

      <section className="relative px-6 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#EDE6FA] blur-3xl" />
        <div className="pointer-events-none absolute left-[-180px] top-[45%] h-80 w-80 rounded-full bg-[#EFE7DE] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]"
            >
              CODANTIS · Cumbres
            </motion.p>

            <h1 className="mt-5 font-[var(--font-heading)] text-[clamp(3.5rem,7vw,6.8rem)] font-normal leading-[0.9] tracking-[-0.045em] text-[#222126]">
              Dentistas en
              <br />
              <span className="italic text-[#5B0AB3]">
                Cumbres Monterrey.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#6F6870] sm:text-lg">
              Somos tus dentistas en Monterrey. Un equipo que busca
              acompañarte con atención personalizada, tecnología y un enfoque
              integral para cuidar tu sonrisa.
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
                Conoce nuestra clínica
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
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
                alt="Clínica dental CODANTIS en Cumbres"
                width={900}
                height={1100}
                priority
                className="aspect-[4/4.5] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#281C2B]/45 via-transparent to-transparent" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65 }}
                className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8"
              >
                <div className="rounded-3xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-xl">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                    Nuestra clínica
                  </p>

                  <p className="mt-2 font-[var(--font-heading)] text-2xl">
                    Cuidar tu sonrisa también es cuidar cómo te sientes.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
          CLINIC
      ======================================================= */}

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              {...sectionReveal}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative overflow-hidden rounded-[2.5rem] bg-[#EFE7DE]"
            >
              <Image
                src="/img/imagen.png"
                alt="Instalaciones de CODANTIS"
                width={1200}
                height={800}
                className="aspect-[4/3] h-full w-full object-cover"
              />

              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5 }}
                className="absolute left-5 top-5 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold text-[#5B0AB3] backdrop-blur-md sm:left-7 sm:top-7"
              >
                Colonial Cumbres
              </motion.div>
            </motion.div>

            <motion.div
              {...sectionReveal}
              transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
              className="flex flex-col justify-between rounded-[2.5rem] bg-[#F3EDF7] p-7 sm:p-10"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
                  Conoce CODANTIS
                </p>

                <h2 className="mt-5 font-[var(--font-heading)] text-4xl font-normal leading-[0.98] tracking-[-0.035em] text-[#29242C] sm:text-5xl">
                  Un espacio pensado
                  <br />
                  <span className="italic text-[#5B0AB3]">
                    para ti.
                  </span>
                </h2>

                <p className="mt-6 text-base leading-8 text-[#716A73]">
                  Queremos que tu visita sea una experiencia cómoda, clara y
                  cercana. Por eso combinamos atención personalizada con
                  tecnología dental avanzada y un enfoque integral.
                </p>
              </div>

              <div className="mt-10 space-y-3">
                {clinicFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#5B0AB3]">
                      <Check size={14} strokeWidth={2.5} />
                    </span>

                    <span className="text-sm font-medium text-[#4F4852]">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =======================================================
          DOCTORS
      ======================================================= */}

      <DoctorProfiles />

      {/* =======================================================
          TRUST STATS
      ======================================================= */}

      <TrustStats />

      {/* =======================================================
          MISSION / VISION / VALUES
      ======================================================= */}

      <section className="relative overflow-hidden bg-[#F8F5F1] px-6 py-24 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#EDE6FA] blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#EFE7DE] blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            {...sectionReveal}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Lo que nos mueve
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Más que una clínica,
              <br />
              <span className="italic text-[#5B0AB3]">
                una forma de cuidar.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#716A73]">
              Nuestra manera de trabajar parte de una atención odontológica
              integral, un servicio cercano y el compromiso con el bienestar
              de nuestros pacientes.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <motion.article
              {...sectionReveal}
              transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-[#5B0AB3] p-8 text-white sm:p-10"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl transition-transform duration-700 group-hover:scale-125" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <Target size={22} />
                  </span>

                  <span className="font-[var(--font-heading)] text-5xl text-white/15">
                    01
                  </span>
                </div>

                <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                  Nuestra misión
                </p>

                <p className="mt-5 max-w-xl font-[var(--font-heading)] text-2xl leading-[1.2] sm:text-3xl">
                  Estamos comprometidos en mejorar la sonrisa de nuestros
                  pacientes, brindándoles una asistencia odontológica integral,
                  mediante un excelente servicio y una atención personalizada.
                </p>
              </div>
            </motion.article>

            <motion.article
              {...sectionReveal}
              transition={{ duration: 0.7, delay: 0.16, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-white p-8 sm:p-10"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#EDE6FA] blur-2xl transition-transform duration-700 group-hover:scale-125" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDE6FA] text-[#5B0AB3]">
                    <Eye size={22} />
                  </span>

                  <span className="font-[var(--font-heading)] text-5xl text-[#5B0AB3]/10">
                    02
                  </span>
                </div>

                <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
                  Nuestra visión
                </p>

                <p className="mt-5 max-w-xl font-[var(--font-heading)] text-2xl leading-[1.2] text-[#29242C] sm:text-3xl">
                  Mejorar la calidad del servicio odontológico, orientando
                  recursos y aplicando tecnologías y técnicas para ofrecer una
                  atención dental eficiente y contribuir con el bienestar
                  integral de nuestros pacientes.
                </p>
              </div>
            </motion.article>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-5 rounded-[2.5rem] border border-[#E3D9E7] bg-white/60 p-7 sm:p-10"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
                  Nuestros valores
                </p>

                <h3 className="mt-4 font-[var(--font-heading)] text-3xl leading-none tracking-[-0.03em] text-[#29242C] sm:text-4xl">
                  Lo que está detrás de cada visita.
                </h3>
              </div>

              <p className="max-w-lg text-sm leading-7 text-[#716A73]">
                Principios que forman parte de nuestra manera de trabajar y de
                relacionarnos con nuestros pacientes y nuestro equipo.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    whileHover={{ y: -4 }}
                    className="group rounded-[1.7rem] border border-[#E7E0E9] bg-[#FDFCFD] p-6 transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(91,10,179,0.08)]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDE6FA] text-[#5B0AB3] transition-transform duration-300 group-hover:scale-105">
                        <Icon size={18} />
                      </span>

                      <span className="font-[var(--font-heading)] text-sm text-[#C8B8D0]">
                        {value.number}
                      </span>
                    </div>

                    <p className="mt-7 text-base font-semibold text-[#302C32]">
                      {value.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
          TREATMENTS
      ======================================================= */}

      <TreatmentsSection
        title="Todo lo que tu sonrisa necesita"
        subtitle="en un solo lugar."
        description="Conoce nuestras principales áreas de atención y encuentra el acompañamiento que necesitas para cuidar tu salud bucal."
      />

      {/* =======================================================
          FAQ
      ======================================================= */}

      <section
        id="preguntas"
        className="scroll-mt-28 bg-white px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-5xl">
          <motion.div
            {...sectionReveal}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
              Preguntas frecuentes
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
              Lo que necesitas saber
              <br />
              <span className="italic text-[#5B0AB3]">
                antes de visitarnos.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#716A73]">
              Respondemos algunas de las preguntas más comunes sobre nuestra
              clínica dental y la atención odontológica en Monterrey.
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
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
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
                        id={`faq-answer-${index}`}
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
          LOCATION CTA
      ======================================================= */}

      <section className="bg-[#EFE7DE] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="grid gap-8 rounded-[2.5rem] bg-[#F8F5F1] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end lg:p-14"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C6C87]">
                Visítanos
              </p>

              <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#29242C] sm:text-6xl">
                Estamos en
                <br />
                <span className="italic text-[#5B0AB3]">
                  Cumbres, Monterrey.
                </span>
              </h2>

              <div className="mt-6 flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-[#5B0AB3]"
                />

                <p className="max-w-xl text-sm leading-7 text-[#706971]">
                  C. 15a Avenida 948-2 Sector, Colonial Cumbres, 64610
                  Monterrey, N.L.
                </p>
              </div>
            </div>

            <Link
              href="/contacto"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#5B0AB3] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6D14C8]"
            >
              Ver ubicación
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
          FINAL CTA
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
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            />

            <motion.div
              animate={{ scale: [1, 1.12, 1] }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-[#C8A7FF]/20 blur-3xl"
            />

            <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                  Tu próxima visita
                </p>

                <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-white sm:text-6xl">
                  Encuentra a tus
                  <br />
                  <span className="italic text-[#DCC9FA]">
                    dentistas en Cumbres.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-base leading-7 text-white/75">
                  Estamos listos para acompañarte y ayudarte a cuidar tu
                  sonrisa.
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
                <MessageCircle size={18} />
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