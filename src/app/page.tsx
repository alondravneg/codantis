// export default function Home() {
//   return (
//     <main className="min-h-screen bg-[#F8F5F1]">
//       {/* HERO */}
//       <section className="mx-auto max-w-7xl px-6 py-24">
//         <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
//           <div>
//             <span className="mb-4 inline-block rounded-full bg-[#EDE6FA] px-4 py-2 text-sm text-[#5B0AB3]">
//               Odontología Integral
//             </span>

//             <h1 className="mb-6 text-5xl font-bold leading-tight text-[#1F1F24] lg:text-7xl">
//               Sonrisas que te acompañan siempre
//             </h1>

//             <p className="mb-8 max-w-xl text-lg text-gray-600">
//               Atención dental moderna, cercana y personalizada para cuidar tu
//               salud y confianza.
//             </p>

//             <div className="flex gap-4">
//               <a
//                 href="#contacto"
//                 className="rounded-full bg-[#5B0AB3] px-8 py-4 text-white transition hover:opacity-90"
//               >
//                 Agendar cita
//               </a>

//               <a
//                 href="#servicios"
//                 className="rounded-full border border-[#5B0AB3] px-8 py-4 text-[#5B0AB3]"
//               >
//                 Ver tratamientos
//               </a>
//             </div>
//           </div>

//           <div className="overflow-hidden rounded-[32px]">
//             <img
//               src="/img/recepcion.png"
//               alt="Recepción Codantis"
//               className="h-full w-full object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       {/* SERVICIOS */}
//       <section
//         id="servicios"
//         className="mx-auto max-w-7xl px-6 py-20"
//       >
//         <h2 className="mb-10 text-4xl font-bold text-[#1F1F24]">
//           Nuestros tratamientos
//         </h2>

//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//           {[
//             "Ortodoncia",
//             "Implantes",
//             "Estética Dental",
//             "Limpieza Profesional",
//           ].map((item) => (
//             <div
//               key={item}
//               className="rounded-3xl bg-white p-6 shadow-sm"
//             >
//               <h3 className="mb-3 text-xl font-semibold">{item}</h3>

//               <p className="text-gray-600">
//                 Atención profesional enfocada en tu salud y bienestar.
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CONTACTO */}
//       <section
//         id="contacto"
//         className="bg-white py-20"
//       >
//         <div className="mx-auto max-w-7xl px-6">
//           <h2 className="mb-8 text-4xl font-bold">
//             Agenda tu cita
//           </h2>

//           <p className="mb-4 text-gray-600">
//             WhatsApp: (poner número)
//           </p>

//           <p className="mb-4 text-gray-600">
//             Dirección: (poner dirección)
//           </p>

//           <p className="text-gray-600">
//             Horario: Lunes a Viernes
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function Home() {
  const whatsappNumber = "528112399492";

  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría ponerme en contacto con CODANTIS."
  );

  return (
    <main className="coming-soon">
      {/* Background */}
      <div className="coming-soon__background" />

      {/* Overlay */}
      <div className="coming-soon__overlay" />

      {/* Content */}
      <div className="coming-soon__content">
        {/* Brand */}
        <header className="coming-soon__header animate-fade-down">
          <div className="brand">
            <span className="brand__mark">CODANTIS</span>
            <span className="brand__subtitle">ODONTOLOGÍA INTEGRAL</span>
          </div>

          <div className="brand__status">
            <span className="brand__dot" />
            Próximamente
          </div>
        </header>

        {/* Main */}
        <section className="coming-soon__hero">
          <div className="coming-soon__copy">
            <p className="eyebrow animate-fade-up delay-1">
              Una nueva experiencia está por llegar
            </p>

            <h1 className="animate-fade-up delay-2">
              Nos estamos
              <br />
              renovando
              <br />
              <em>para ti.</em>
            </h1>

            <p className="coming-soon__description animate-fade-up delay-3">
              Muy pronto encontrarás una nueva experiencia en línea,
              diseñada para acompañarte con la misma atención cercana y
              personalizada de siempre.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button animate-fade-up delay-4"
            >
              <span className="whatsapp-button__icon">
                <MessageCircle size={21} strokeWidth={2.2} />
              </span>

              <span>Contáctanos por WhatsApp</span>

              <ArrowUpRight
                className="whatsapp-button__arrow"
                size={19}
                strokeWidth={2}
              />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="coming-soon__footer animate-fade-up delay-5">
          <span>ODONTOLOGÍA INTEGRAL</span>
          <span className="footer-line" />
          <span>CODANTIS</span>
          <span className="footer-line" />
          <span>PRÓXIMAMENTE</span>
        </footer>
      </div>
    </main>
  );
}