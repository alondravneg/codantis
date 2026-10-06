"use client";

import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";

type Doctor = {
  name: string;
  role: string;
  image: string;
  education: string[];
  certifications: string[];
  focus?: string[];
};

const doctors: Doctor[] = [
  {
    name: "Dr. Rodolfo Mendoza Rocha",
    role: "Odontólogo",
    image: "/img/DrRodolfoMendoza.jpeg",
    education: [],
    certifications: [],
    focus: [],
  }, 
  {
    name: "Dra. Claudia Janneth Pérez Chapa",
    role: "Ortodoncista",
    image: "/img/DraJannethPerez.jpeg",
    education: ["Odontología · UANL", "Especialidad en Ortodoncia"],
    certifications: [
      "Certificación en Ortodoncia con Alineadores Dentales",
      "Certificado en Ortodoncia Autoligable",
      "Ortodoncia Interceptiva en Niños",
      "Manejo de Mini Implantes"
    ],
    focus: [],
  },
];

export default function DoctorProfiles() {
  return (
    <section
      id="doctores"
      className="scroll-mt-28 bg-[#F8F5F1] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* =======================================================
            HEADER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7C6C87]">
            Nuestro equipo
          </p>

          <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-normal leading-[0.97] tracking-[-0.035em] text-[#222126] sm:text-6xl">
            Las personas detrás de
            <br />
            <span className="italic text-[#5B0AB3]">cada sonrisa.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#716A73]">
            Experiencia, preparación y un enfoque cercano para acompañarte
            durante cada etapa de tu atención.
          </p>
        </motion.div>

        {/* =======================================================
            DOCTORS
        ======================================================= */}

        <div className="mt-16 space-y-20 lg:space-y-28">
          {doctors.map((doctor, index) => {
            const reversed = index % 2 !== 0;

            return (
              <div
                key={`${doctor.name}-${index}`}
                className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
              >
                {/* PHOTO */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: reversed ? 30 : -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className={`relative ${
                    reversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Decorative circle */}
                  <div
                    className={`absolute -z-10 h-40 w-40 rounded-full bg-[#EDE6FA] blur-sm ${
                      reversed ? "-right-6 -top-8" : "-left-6 -top-8"
                    }`}
                  />

                  <div className="relative overflow-hidden rounded-[2.5rem] bg-[#E8DDEA]">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      width={900}
                      height={1100}
                      className="aspect-[4/4.8] w-full object-cover"
                    />

                    {/* Small label */}
                    <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:bottom-7 sm:left-7">
                      CODANTIS
                    </div>
                  </div>
                </motion.div>

                {/* TEXT */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: reversed ? -30 : 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: "easeOut",
                  }}
                  className={`${reversed ? "lg:order-1" : "lg:order-2"}`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C6C87]">
                    {doctor.role}
                  </p>

                  <h3 className="mt-4 max-w-xl font-[var(--font-heading)] text-4xl font-normal leading-[0.98] tracking-[-0.035em] text-[#29242C] sm:text-5xl">
                    {doctor.name}
                  </h3>

                  <div className="mt-8 h-px w-16 bg-[#B89BC6]" />

                  {/* Education */}
                  {doctor.education.length > 0 && (
                    <div className="mt-8">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9A8E98]">
                        Formación
                      </p>

                      <div className="mt-4 space-y-3">
                        {doctor.education.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EDE6FA] text-[#5B0AB3]">
                              <Check size={11} strokeWidth={2.5} />
                            </span>

                            <span className="text-sm leading-6 text-[#504A52]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Certifications */}
                  {doctor.certifications.length > 0 && (
                    <div className="mt-8">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9A8E98]">
                        Certificaciones
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2.5">
                        {doctor.certifications.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[#D9CBE0] bg-white px-4 py-2 text-xs font-medium leading-5 text-[#5B5060]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Focus */}
                  {doctor.focus && doctor.focus.length > 0 && (
                    <div className="mt-8">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9A8E98]">
                        Áreas de enfoque
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2.5">
                        {doctor.focus.map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-[#EDE6FA] px-4 py-2 text-xs font-medium leading-5 text-[#5B0AB3]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Placeholder for Dr */}
                  {doctor.education.length === 0 &&
                    doctor.certifications.length === 0 &&
                    doctor.focus?.length === 0 && (
                      <div className="mt-8 rounded-[1.5rem] bg-[#EFE7DE] p-5">
                        <p className="text-sm leading-6 text-[#716A73]">
                          Aquí agregaremos su formación, especialidad,
                          certificaciones y áreas de enfoque.
                        </p>
                      </div>
                    )}

                  {/* Profile CTA */}
                  <div className="mt-9">
                    <a
                      href="#contacto"
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-[#5B0AB3]"
                    >
                      Conoce nuestro equipo
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
