import type { Metadata } from "next";
import { Noto_Sans, Playfair_Display } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import FloatingWhatsapp from "@/components/layout/FloatingWhatsapp";

const playfairDisplayHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "CODANTIS | Dentistas en Monterrey",
  description: "Atención dental moderna, cercana y personalizada en CODANTIS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={cn(
        "h-full",
        "antialiased",
        notoSans.variable,
        playfairDisplayHeading.variable,
      )}
    >
      <body className="min-h-full bg-[#F8F5F1] font-sans text-[#222222]">
        {children}
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
