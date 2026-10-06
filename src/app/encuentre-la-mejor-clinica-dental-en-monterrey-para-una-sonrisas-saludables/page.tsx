import MejorClinicaDentalPage from "@/components/pages/MejorClinicaDentalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Encuentre la Mejor Clínica Dental en Monterrey para una Sonrisa Saludable | CODANTIS",
  description:
    "Conoce qué considerar al elegir una clínica dental en Monterrey: experiencia, servicios, tecnología, opiniones, opciones de pago y más.",
};

export default function Page() {
  return <MejorClinicaDentalPage />;
}