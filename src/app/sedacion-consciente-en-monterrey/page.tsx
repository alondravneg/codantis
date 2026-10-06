import SedacionConscientePage from "@/components/pages/SedacionConscientePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sedación consciente en Monterrey | CODANTIS",
  description:
    "Conoce la sedación consciente en CODANTIS y descubre cómo puede ayudarte a vivir una experiencia dental más cómoda y tranquila.",
};

export default function Page() {
  return <SedacionConscientePage />;
}