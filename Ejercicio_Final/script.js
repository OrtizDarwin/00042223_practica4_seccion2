const actividades = {
  "lunes": "Atender un cliente específico.",
  "martes": "Visitar una agencia fuera de la ciudad.",
  "miercoles": "Llevar a mi hija al ballet.",
  "miércoles": "Llevar a mi hija al ballet.",
  "jueves": "Priorizar entregas de desarrollo.",
  "viernes": "Atender problemas de manera remota.",
  "sabado": "Hacer lo que mi esposa quiera.",
  "sábado": "Hacer lo que mi esposa quiera."
  
};

function norm(str){ return (str || "").toLowerCase().trim(); }

function recordar(diaTexto, mensaje){
  const d = norm(diaTexto);
  const actividad = actividades[d];
  if (actividad){
    return `Hoy es ${diaTexto}. Actividad: ${actividad} Nota: ${mensaje}`;
  }
 
  return `Hoy es ${diaTexto || "—"}. No tengo una actividad programada. Nota: ${mensaje}`;
}

const $form = document.getElementById("formRecordatorio");
const $dia = document.getElementById("dia");
const $msg = document.getElementById("mensaje");
const $res = document.getElementById("resultado");

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const texto = recordar($dia.value, $msg.value);
  $res.textContent = texto;
 
  console.log(texto);
});
