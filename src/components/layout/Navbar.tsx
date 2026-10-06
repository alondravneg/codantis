"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";

import { whatsappData } from "@/lib/whatsapp";

const navLinks = [
  {
    label: "Tratamientos",
    href: "/#tratamientos",
  },
  {
    label: "Nuestra experiencia",
    href: "/#experiencia",
  },
  {
    label: "Tu visita",
    href: "/#proceso",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        {/* =======================================================
            NAVBAR
        ======================================================= */}

        <nav className="flex items-center justify-between rounded-full border border-black/[0.06] bg-white/80 px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl sm:px-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="CODANTIS inicio"
          >
            <div className="relative h-9 w-9 shrink-0">
              <Image
                src="/img/logobgless.svg"
                alt="CODANTIS"
                fill
                sizes="36px"
                className="object-contain"
              />
            </div>

            <div className="leading-none">
              <div className="text-sm font-semibold tracking-[0.12em]">
                CODANTIS
              </div>

              <div className="mt-1 text-[7px] font-medium tracking-[0.28em] text-[#737373]">
                ODONTOLOGÍA INTEGRAL
              </div>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#5F5A5D] transition-colors hover:text-[#5B0AB3]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Desktop CTA */}
            <a
              href={whatsappData.citaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-[#5B0AB3] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#6D14C8] hover:shadow-lg md:inline-flex"
            >
              Agendar cita
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0EBF7] text-[#5B0AB3] transition-transform duration-200 active:scale-95 md:hidden"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </nav>

        {/* =======================================================
            MOBILE MENU
        ======================================================= */}

        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Backdrop */}
              <motion.button
                type="button"
                aria-label="Cerrar menú"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 top-[88px] z-[-1] bg-black/10 backdrop-blur-[2px] md:hidden"
              />

              {/* Panel */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: -18,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -12,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="absolute left-0 right-0 top-[72px] px-4 md:hidden"
              >
                <nav className="overflow-hidden rounded-[2rem] border border-black/[0.05] bg-white/95 p-5 shadow-[0_20px_60px_rgba(35,20,45,0.12)] backdrop-blur-2xl">
                  {/* Menu heading */}
                  <div className="flex items-center justify-between px-2 pb-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7C6C87]">
                        Menú
                      </p>

                      <p className="mt-1 font-[var(--font-heading)] text-2xl text-[#272329]">
                        Descubre CODANTIS
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setMenuOpen(false)}
                      aria-label="Cerrar menú"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F1EBF7] text-[#5B0AB3] transition-transform duration-200 hover:rotate-90"
                    >
                      <X size={17} />
                    </button>
                  </div>

                  {/* Links */}
                  <div className="mt-2">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{
                          opacity: 0,
                          x: -12,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          duration: 0.35,
                          delay: 0.08 + index * 0.06,
                          ease: "easeOut",
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className="group flex items-center justify-between border-t border-[#EEE8EE] px-2 py-4"
                        >
                          <span className="text-[15px] font-medium text-[#3E3940] transition-colors duration-200 group-hover:text-[#5B0AB3]">
                            {link.label}
                          </span>

                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4EFF8] text-[#5B0AB3] transition-all duration-200 group-hover:translate-x-1 group-hover:bg-[#EDE6FA]">
                            <ArrowUpRight size={15} />
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.a
                    href={whatsappData.citaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.34,
                      ease: "easeOut",
                    }}
                    className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#5B0AB3] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(91,10,179,0.2)] transition-all duration-300 active:scale-[0.98]"
                  >
                    <MessageCircle size={17} />
                    Agendar cita por WhatsApp
                    <ArrowUpRight size={16} />
                  </motion.a>

                  {/* Footer */}
                  <div className="mt-5 flex items-center justify-between px-2 text-[9px] font-medium uppercase tracking-[0.18em] text-[#AAA1AA]">
                    <span>Sonrisas saludables</span>
                    <span>CODANTIS</span>
                  </div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
