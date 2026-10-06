const whatsappNumber = "528112399492";

const whatsappMsgCita = encodeURIComponent(
  "Hola, me gustaría agendar una cita en CODANTIS"
);

const whatsappMsgHorarios = encodeURIComponent(
  "Hola, me gustaría conocer los horarios disponibles en CODANTIS"
);

const whatsappMsgUbicacion = encodeURIComponent(
  "Hola, me gustaría conocer la ubicación de CODANTIS"
);

const whatsappMsgContacto = encodeURIComponent(
  "Hola, vi su página web y me gustaría obtener más información sobre sus servicios en CODANTIS"
);

const whatsappMsgSedacion = encodeURIComponent(
  "Hola, me gustaría obtener más información sobre la sedación consciente en CODANTIS"
);

export const whatsappData = {
  number: whatsappNumber,

  msgCita: whatsappMsgCita,
  msgHorarios: whatsappMsgHorarios,
  msgUbicacion: whatsappMsgUbicacion,
  msgContacto: whatsappMsgContacto,
  msgSedacion: whatsappMsgSedacion,

  citaUrl: `https://wa.me/${whatsappNumber}?text=${whatsappMsgCita}`,
  horariosUrl: `https://wa.me/${whatsappNumber}?text=${whatsappMsgHorarios}`,
  ubicacionUrl: `https://wa.me/${whatsappNumber}?text=${whatsappMsgUbicacion}`,
  contactoUrl: `https://wa.me/${whatsappNumber}?text=${whatsappMsgContacto}`,
  sedacionUrl: `https://wa.me/${whatsappNumber}?text=${whatsappMsgSedacion}`,
};