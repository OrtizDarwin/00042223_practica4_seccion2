var variable1;
let variable2;
const variable3 = 2;
var $jquery, _private;
var variable = 2, VARIABLE = 2;
var camelCase = 2, snake_case = 2;
var camelCase = 2;
var snake_case = 3;

var miVariable;
let miOtraVariable;
miVariable = 2;
miOtraVariable = 2;
var miVariable = 42;
let miOtraVariable2 = miVariable;

console.log(miVariable);
var miVariable3 = 2;
console.log(miVariable3);

try {
  console.log(miOtraVariable3);
} catch (e) {
  console.log("Uncaught ReferenceError: miOtraVariable3 is not defined");
}
let miOtraVariable3 = 2;
console.log(miOtraVariable3);

const estoNoDaraProblemas = 42;

console.log(typeof undefined);
let estaVariableQueNoHeInicializadoAun;
console.log(typeof estaVariableQueNoHeInicializadoAun);
console.log(typeof null);
console.log(typeof { key: 2 });
console.log(typeof [15, 4]);
console.log(typeof new Date());
console.log(typeof true);
console.log(typeof false);
console.log(typeof new Boolean(true));
console.log(typeof "hola");
console.log(typeof function () {});
console.log(typeof 1);
console.log(typeof 1.3);
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(typeof Symbol());
console.log(typeof Symbol("mi símbolo"));

const suma = 1 + 2;
const resta = 3 - 2;
const producto = 2 * 4;
const division = 9 / 3;
const potencia = 3 ** 2;
const modulo = 8 % 3;
console.log({ suma, resta, producto, division, potencia, modulo });

const concatenarStrings = "Hola" + " " + "mundo" + "!";
const sumaStringYNumero = 1 + "1";
const banana = "b" + "a" + +"a" + "a";
console.log({ concatenarStrings, sumaStringYNumero, banana });

const expresion1 = (3 + 7) * 10;
const expresion2 = 3 + 7 * 10;
const expresion3 = 2 ** 3 ** 2;
console.log({ expresion1, expresion2, expresion3 });

let inicio = +5;
const sumaYAsigna = ++inicio;
const asignaYSuma = inicio++;
const restaYAsigna = --inicio;
const asignaYResta = inicio--;
console.log(inicio);

let x = 1;
let y = 2;
let z = 3;
x = y;
x += z;
x *= y;
x /= y;
x %= x;

const masFalsoQueSalvame = !true;
const cherto  = true && true;
const noCherto = false && true;
const noECherto = false && false;
const noECherto2 = true && false;
let cherto2 = true || true;
let eCherto = false || false;
eCherto = true || false;
const noEChertoFinal = false || false;

const mayorQue = 100 > 50;
const menorQue = 50  < 100;
const mayorOIgualQue = 100 >= 100;
const menorOIgualQue = 100 <= 100;
const igualOCasi = 100 ==  "100";
const igualYDelMismoTipo = 100 === 100;
const noIgual = 100 !== "100";
console.log({ mayorQue, menorQue, mayorOIgualQue, menorOIgualQue, igualOCasi, igualYDelMismoTipo, noIgual });

console.log(1 ==  "1");
console.log(1 === "1");
console.log(false == 0);
console.log(false === 0);
console.log("" == 0);
console.log("" === 0);

if (true) {
  console.log("true, por eso me ejecuto");
} else {
  console.log("false, por eso me ejecuto");
}

const miNumero = prompt("¿Que numero estoy pensando?");
if (miNumero < 5) {
  alert("miNumero es bastante pequeño");
} else if (miNumero > 5) {
  alert("vaya, mi Numero se ha pasado");
} else {
  alert("mi Numero es 5!");
}

let numero = prompt("¿Que numero estoy pensando?");
switch (numero) {
  case "5":
    alert("¡Numero correcto!");
    break;
  case "4":
  case "6":
    alert("¡Casi aciertas!");
    break;
  default:
    alert("Frio, frio");
}

let edad = prompt("¿Cuantos años tienes?", 0);
while (edad <= 18) {
  alert("Eres demasiado joven lo siento");
  edad = prompt("¿Cuantos años tienes?", 0);
}

for (let i = 0; i < 10; i += 1) {
  console.log(i);
}
for (let i = 10; i > 0; i -= 1) {
  console.log(i);
}
for (let i = 10, j = 0; i > j; i -= 1) {
  console.log(i, j);
}

