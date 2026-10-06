import DentistasCumbresPage from "@/components/pages/DentistasCumbresPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dentistas en Cumbres, Monterrey | CODANTIS",
  description:
    "Conoce a nuestros dentistas en Cumbres, Monterrey, nuestra clínica, tratamientos y opciones para cuidar tu salud bucal.",
};

export default function Page() {
  return <DentistasCumbresPage />;
}