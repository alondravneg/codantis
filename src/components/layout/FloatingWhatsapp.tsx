"use client";

import { whatsappData } from "@/lib/whatsapp";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function FloatingWhatsapp() {
  const [showWhatsappHint, setShowWhatsappHint] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowWhatsappHint(true);
    }, 1200);

    const hideTimer = setTimeout(() => {
      setShowWhatsappHint(false);
    }, 8500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {showWhatsappHint && (
          <motion.a
            href={whatsappData.contactoUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{
              opacity: 0,
              x: 15,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: 10,
              scale: 0.94,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="mb-1 rounded-full border border-black/[0.05] bg-white/95 px-3.5 py-2.5 shadow-[0_12px_35px_rgba(0,0,0,0.10)] backdrop-blur-xl"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EDE6FA] text-[#5B0AB3]">
                <MessageCircle size={14} strokeWidth={2} />
              </div>

              <div className="whitespace-nowrap">
                <p className="text-[10px] font-semibold text-[#2A272B] sm:text-[11px]">
                  ¿Tienes dudas?
                </p>

                <p className="mt-0.5 text-[9px] text-[#777279] sm:text-[10px]">
                  Escríbenos
                </p>
              </div>
            </div>
          </motion.a>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappData.contactoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contáctanos por WhatsApp"
        initial={{ opacity: 0, scale: 0.7, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.8,
          ease: "easeOut",
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#5B0AB3] text-white shadow-[0_12px_35px_rgba(91,10,179,0.28)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(91,10,179,0.38)] sm:h-15 sm:w-15"
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
        <Image
          src="/img/icons/whatsapp.svg"
          alt="WhatsApp"
          width={34}
          height={34}
          className="h-12 w-12 object-contain"
        />{" "}
      </motion.a>
    </div>
  );
}
