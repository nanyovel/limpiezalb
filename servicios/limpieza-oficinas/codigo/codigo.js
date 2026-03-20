const ancla = document.getElementById("btn-cta-wa");
const telefono = "8294885016";
const mensaje = "Hola, me interesa el servicio de limpieza de oficinas.";

function generarLinkWhatsApp(telefono, mensaje) {
  // Limpiar el número (solo números)
  const numero = telefono.replace(/\D/g, "");

  // Codificar el mensaje para URL
  const texto = encodeURIComponent(mensaje);

  // Crear el link
  return `https://wa.me/${numero}?text=${texto}`;
}

ancla.setAttribute("href", generarLinkWhatsApp(telefono, mensaje));
