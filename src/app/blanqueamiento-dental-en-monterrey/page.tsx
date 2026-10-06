import type { Metadata } from "next";

import BlanqueamientoDentalPage from "@/components/pages/BlanqueamientoDentalPage";

export const metadata: Metadata = {
  title: "Blanqueamiento dental en Monterrey | CODANTIS",
  description:
    "Conoce el tratamiento de blanqueamiento dental de CODANTIS, cómo funciona, sus beneficios y las opciones disponibles en Monterrey.",
};

export default function Page() {
  return <BlanqueamientoDentalPage />;
}