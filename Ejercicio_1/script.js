console.log("[INFO] App iniciada Ejercicio 1");
console.warn("[WARN] Recuerda limpiar logs en producción");
console.error("[ERROR simulado] Este es un ejemplo para la consola");

const estudiantes = [
  { carnet: "00042223", nombre: "Darwin" },
  { carnet: "00000001", nombre: "Gaby" },
  { carnet: "00095322", nombre: "Miguel" },
];
console.table(estudiantes);

console.group("Bloque de pruebas JS");
console.log("Suma 2 + 2 =", 2 + 2);
console.log("Concatenación:", "Hola" + " " + "Mundo");
console.groupEnd();


// Ejemplos de la guía

console.assert("Legolas" > "Gimli", "❌ La aserción resultó falsa");

console.dir(window);

console.dirxml(document.body);

const marvel = ["Spider Man", "Iron Man", "Capitan America", "Lobezno"];
console.group("Superhéroes de Marvel");
marvel.forEach(superhero => console.log(superhero));
console.groupEnd();


function pruebaDebugger() {
  const x = 10;
  const y = 5;
  const z = x * y;
  debugger; 
  return z;
}

const $btn = document.getElementById("btnRun");
const $out = document.getElementById("output");
$btn.addEventListener("click", () => {
  const resultado = pruebaDebugger();
  console.log("Resultado de pruebaDebugger():", resultado);
  $out.textContent = `Resultado calculado en debugger: ${resultado}`;
});
