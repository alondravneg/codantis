import type { Metadata } from "next";

import ImplantesDentalesPage from "@/components/pages/ImplantesDentalesPage";

export const metadata: Metadata = {
  title: "Implantes dentales en Monterrey | CODANTIS",
  description:
    "Conoce los implantes dentales en CODANTIS: qué son, cómo funcionan, sus ventajas, proceso de colocación y preguntas frecuentes.",
};

export default function Page() {
  return <ImplantesDentalesPage />;
}