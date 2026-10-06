"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "+15",
    label: "Años de experiencia",
    position: "left",
  },
  {
    value: "+2",
    label: "Odontólogos generales y especialistas",
    position: "center",
  },
  {
    value: "360°",
    label: "Atención integral",
    position: "right",
  },
];

export default function TrustStats() {
  return (
    <section className="relative overflow-hidden bg-[#F3EDF7] px-6 py-24 lg:px-8 lg:py-32">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#DCC9ED]/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-[#E8D9CC]/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
            Confianza que se construye con experiencia
          </p>

          <h2 className="mt-5 font-[var(--font-heading)] text-4xl font-normal leading-[0.98] tracking-[-0.035em] text-[#2A252C] sm:text-5xl">
            Cuidamos cada sonrisa
            <br />
            <span className="italic text-[#5B0AB3]">
              desde hace años.
            </span>
          </h2>
        </motion.div>

        {/* Circles */}
        <div className="relative mx-auto mt-16 max-w-5xl">

          {/* Connecting line - desktop */}
          <div className="pointer-events-none absolute left-[18%] right-[18%] top-1/2 hidden h-px -translate-y-1/2 bg-[#CDB8D8] lg:block" />

          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-5 lg:gap-10">

            {/* STAT 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.05,
                ease: "easeOut",
              }}
              whileHover={{ y: -8 }}
              className="relative z-10 flex h-48 w-48 shrink-0 flex-col items-center justify-center rounded-full border border-[#D5C0E0] bg-[#EDE6FA] text-center shadow-[0_20px_45px_rgba(91,10,179,0.08)] sm:h-52 sm:w-52 lg:h-60 lg:w-60"
            >
              <span className="font-[var(--font-heading)] text-5xl leading-none tracking-[-0.04em] text-[#5B0AB3] lg:text-6xl">
                {stats[0].value}
              </span>

              <span className="mt-4 max-w-[130px] text-xs font-semibold uppercase leading-5 tracking-[0.08em] text-[#5F5662]">
                {stats[0].label}
              </span>
            </motion.div>

            {/* STAT 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: "easeOut",
              }}
              whileHover={{ y: -10 }}
              className="relative z-10 flex h-56 w-56 shrink-0 flex-col items-center justify-center rounded-full bg-[#5B0AB3] text-center shadow-[0_25px_55px_rgba(91,10,179,0.22)] sm:h-60 sm:w-60 lg:h-72 lg:w-72"
            >
              <span className="font-[var(--font-heading)] text-6xl leading-none tracking-[-0.04em] text-white lg:text-7xl">
                {stats[1].value}
              </span>

              <span className="mt-4 max-w-[155px] text-xs font-semibold uppercase leading-5 tracking-[0.08em] text-white/75">
                {stats[1].label}
              </span>
            </motion.div>

            {/* STAT 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: "easeOut",
              }}
              whileHover={{ y: -8 }}
              className="relative z-10 flex h-48 w-48 shrink-0 flex-col items-center justify-center rounded-full border border-[#D7C8BA] bg-[#EFE7DE] text-center shadow-[0_20px_45px_rgba(60,38,25,0.07)] sm:h-52 sm:w-52 lg:h-60 lg:w-60"
            >
              <span className="font-[var(--font-heading)] text-5xl leading-none tracking-[-0.04em] text-[#5B0AB3] lg:text-6xl">
                {stats[2].value}
              </span>

              <span className="mt-4 max-w-[125px] text-xs font-semibold uppercase leading-5 tracking-[0.08em] text-[#655C60]">
                {stats[2].label}
              </span>
            </motion.div>

          </div>
        </div>

        {/* Bottom statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.35,
            ease: "easeOut",
          }}
          className="mx-auto mt-14 max-w-xl text-center text-sm leading-7 text-[#716873]"
        >
          Una atención cercana, profesional y pensada para acompañarte en
          cada etapa de tu sonrisa.
        </motion.p>
      </div>
    </section>
  );
}