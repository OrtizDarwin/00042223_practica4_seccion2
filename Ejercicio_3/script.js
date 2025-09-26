
function ordenar(arr) {
  const nuevoArray = [...arr];
  for (let i = 0; i < nuevoArray.length; i++) {
    for (let j = 0; j < nuevoArray.length - i - 1; j++) {
      if (nuevoArray[j] > nuevoArray[j + 1]) {
        let temporal = nuevoArray[j];
        nuevoArray[j] = nuevoArray[j + 1];
        nuevoArray[j + 1] = temporal;
      }
    }
  }
  return nuevoArray;
}

function esPar(numero) {
  return numero % 2 === 0;
}


function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
  let altura = 0;
  let dias = 0;
  while (altura < alturaDeseada) {
    altura += velocidadCrecimiento;
    dias++;
    if (altura >= alturaDeseada) { return dias; }
    altura -= velocidadDecrecimiento;
  }
  return dias;
}

const entradaOrdenar = [14, 23, 99, 874, 93, 12];
const salidaOrden = ordenar(entradaOrdenar);
console.log("Ordenado:", salidaOrden);
document.getElementById("salidaOrdenar").textContent = `[${salidaOrden.join(", ")}]`;

const entradaPar = 7;
const salidaPar = esPar(entradaPar);
console.log(`esPar(${entradaPar}):`, salidaPar);
document.getElementById("salidaPar").textContent = String(salidaPar);

const vc = 3, vd = 1, hd = 10;
const dias = calcularDiasCrecimiento(vc, vd, hd);
console.log(`Días (${vc},${vd},${hd}):`, dias);
document.getElementById("salidaPlanta").textContent = String(dias);
