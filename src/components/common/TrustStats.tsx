"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  {
    value: 15,
    prefix: "+",
    suffix: "",
    label: "Años de experiencia",
    variant: "lavender",
  },
  {
    value: 2,
    prefix: "+",
    suffix: "",
    label: "Odontólogos generales y especialistas",
    variant: "primary",
  },
  {
    value: 360,
    prefix: "",
    suffix: "°",
    label: "Atención integral",
    variant: "beige",
  },
];

type CountUpProps = {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  start: boolean;
};

function CountUp({
  target,
  prefix = "",
  suffix = "",
  duration = 1400,
  start,
}: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let animationFrame: number;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out:
      // comienza rápido y termina suavemente.
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.round(target * easedProgress);

      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [start, target, duration]);

  return (
    <>
      {prefix}
      {count}
      {suffix}
    </>
  );
}

type AnimatedStatCircleProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  variant: "lavender" | "primary" | "beige";
  size: "small" | "large";
  delay?: number;
};

function AnimatedStatCircle({
  value,
  prefix,
  suffix,
  label,
  variant,
  size,
  delay = 0,
}: AnimatedStatCircleProps) {
  const [started, setStarted] = useState(false);

  const isLarge = size === "large";

  const circleClasses = {
    lavender:
      "border border-[#D5C0E0] bg-[#EDE6FA] text-[#5B0AB3] shadow-[0_20px_45px_rgba(91,10,179,0.08)]",

    primary:
      "bg-[#5B0AB3] text-white shadow-[0_25px_55px_rgba(91,10,179,0.22)]",

    beige:
      "border border-[#D7C8BA] bg-[#EFE7DE] text-[#5B0AB3] shadow-[0_20px_45px_rgba(60,38,25,0.07)]",
  };

  const labelClasses = {
    lavender: "text-[#5F5662]",
    primary: "text-white/75",
    beige: "text-[#655C60]",
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.82,
        y: isLarge ? 30 : 20,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      onViewportEnter={() => setStarted(true)}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        y: isLarge ? -10 : -8,
      }}
      className={`relative z-10 flex shrink-0 flex-col items-center justify-center rounded-full text-center ${
        isLarge
          ? "h-56 w-56 sm:h-60 sm:w-60 lg:h-72 lg:w-72"
          : "h-48 w-48 sm:h-52 sm:w-52 lg:h-60 lg:w-60"
      } ${circleClasses[variant]}`}
    >
      <span
        className={`font-[var(--font-heading)] leading-none tracking-[-0.04em] ${
          isLarge
            ? "text-6xl lg:text-7xl"
            : "text-5xl lg:text-6xl"
        }`}
      >
        <CountUp
          target={value}
          prefix={prefix}
          suffix={suffix}
          start={started}
        />
      </span>

      <span
        className={`mt-4 max-w-[155px] text-xs font-semibold uppercase leading-5 tracking-[0.08em] ${
          labelClasses[variant]
        }`}
      >
        {label}
      </span>
    </motion.div>
  );
}

export default function TrustStats() {
  return (
    <section className="relative overflow-hidden bg-[#F3EDF7] px-6 py-24 lg:px-8 lg:py-32">

      {/* =======================================================
          DECORATIVE BACKGROUND
      ======================================================= */}

      <div className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#DCC9ED]/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-[#E8D9CC]/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* =======================================================
            INTRO
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
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

        {/* =======================================================
            CIRCLES
        ======================================================= */}

        <div className="relative mx-auto mt-16 max-w-5xl">

          {/* Connecting line */}
          <div className="pointer-events-none absolute left-[18%] right-[18%] top-1/2 hidden h-px -translate-y-1/2 bg-[#CDB8D8] lg:block" />

          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-5 lg:gap-10">

            {/* +15 */}
            <AnimatedStatCircle
              value={stats[0].value}
              prefix={stats[0].prefix}
              suffix={stats[0].suffix}
              label={stats[0].label}
              variant="lavender"
              size="small"
              delay={0.05}
            />

            {/* +2 */}
            <AnimatedStatCircle
              value={stats[1].value}
              prefix={stats[1].prefix}
              suffix={stats[1].suffix}
              label={stats[1].label}
              variant="primary"
              size="large"
              delay={0.15}
            />

            {/* 360° */}
            <AnimatedStatCircle
              value={stats[2].value}
              prefix={stats[2].prefix}
              suffix={stats[2].suffix}
              label={stats[2].label}
              variant="beige"
              size="small"
              delay={0.25}
            />

          </div>
        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================= */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
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