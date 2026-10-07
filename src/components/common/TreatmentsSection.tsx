"use client";

import { ArrowUpRight, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { services } from "@/lib/services";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

type TreatmentsSectionProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
};

function ServiceIcon({ icon }: { icon: LucideIcon | string }) {
  if (typeof icon === "string") {
    return (
      <span
        aria-hidden="true"
        className="h-6 w-6 bg-current transition-colors duration-300"
        style={{
          maskImage: `url(${icon})`,
          WebkitMaskImage: `url(${icon})`,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          maskSize: "contain",
          WebkitMaskSize: "contain",
        }}
      />
    );
  }

  const Icon = icon;

  return <Icon size={20} strokeWidth={1.7} />;
}

export default function TreatmentsSection({
  title = "Salud, estética y confianza",
  subtitle = "en un solo lugar.",
  description = "Conoce algunas de las áreas en las que podemos acompañarte. Nuestro enfoque parte siempre de tus necesidades.",
  className = "",
}: TreatmentsSectionProps) {
  return (
    <section
      id="tratamientos"
      className={`scroll-mt-28 bg-[#F8F5F1] px-6 py-24 lg:px-8 lg:py-32 ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        {/* =======================================================
            HEADING
        ======================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]"
            >
              Tratamientos
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-5 max-w-2xl font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl"
            >
              {title}
              <span className="italic text-[#6D22C7]"> {subtitle}</span>
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="max-w-sm text-sm leading-7 text-[#777279]"
          >
            {description}
          </motion.p>
        </motion.div>

        {/* =======================================================
            TREATMENT CARDS
        ======================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={container}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <Link
              key={`${service.number}-${service.title}`}
              href={service.href}
              className="group block h-full"
            >
              <motion.article
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-[1.75rem] border border-[#E7DED5] bg-white p-6 shadow-[0_12px_35px_rgba(46,30,20,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(46,30,20,0.08)] sm:p-7"
              >
                {/* =================================================
                    ICON + NUMBER
                ================================================= */}

                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EFE8F8] text-[#5B0AB3] transition-transform duration-300 group-hover:rotate-6 text-[#5b0ab3] transition-colors group-hover:text-[#5b0ab3]">
                    <ServiceIcon icon={service.icon} />
                  </div>

                  <span className="font-[var(--font-heading)] text-3xl text-[#E8E0EC]">
                    {service.number}
                  </span>
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-[#252328]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#747078]">
                    {service.description}
                  </p>
                </div>

                {/* =================================================
                    BOTTOM LINK
                ================================================= */}

                <div className="mt-auto pt-7">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#5B0AB3]">
                    <span>Conocer más</span>

                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>

                {/* =================================================
                    HOVER GLOW
                ================================================= */}

                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#F3EAFB] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              </motion.article>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
