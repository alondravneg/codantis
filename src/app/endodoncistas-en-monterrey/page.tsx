import type { Metadata } from "next";

import EndodoncistasPage from "@/components/pages/EndodoncistasPage";

export const metadata: Metadata = {
  title: "Endodoncistas en Monterrey | CODANTIS",
  description:
    "Conoce la endodoncia en CODANTIS, cuándo acudir a un endodoncista, sus beneficios, tratamientos y preguntas frecuentes en Monterrey.",
};

export default function Page() {
  return <EndodoncistasPage />;
}