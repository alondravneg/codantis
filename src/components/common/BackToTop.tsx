"use client";

import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Volver al inicio"
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-5 left-5 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/90 text-[#5B0AB3] shadow-[0_12px_35px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_16px_40px_rgba(91,10,179,0.18)] sm:bottom-6 sm:left-6"
        >
          <ArrowUp size={19} strokeWidth={1.8} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}