import sumar from "./sumador.js";
import multiplicar from "./multiplicador.js";
import { saludar } from "./saludar.js"; // Importar la función de saludos
import fizzbuzz from "./fizzbuzz.js";
import convertir_a_romano from "./romanos.js";

// Formulario para convertir números romanos
const formNumeroArabigo = document.querySelector("#numero-arabigo-form");
const inputNumeroArabigo = document.querySelector("#numero-arabigo");
const resultadoNumeroRomano = document.querySelector("#resultado-numero-romano");

// Formulario para fizzbuzz
const formFizzBuzz = document.querySelector("#fizzbuzz-form");
const inputFizzBuzz = document.querySelector("#numero-fizzbuzz");
const resultadoFizzBuzz = document.querySelector("#resultado-fizzbuzz");

// Formulario para saludos
const formSaludo = document.querySelector("#saludo-form");
const resultadoSaludo = document.querySelector("#resultado-saludo");

// Formulario para suma
const firstS = document.querySelector("#primer-numero-suma");
const secondS = document.querySelector("#segundo-numero-suma");
const formS = document.querySelector("#sumar-form");
const divS = document.querySelector("#resultado-suma");

// Formulario para multiplicación
const firstM = document.querySelector("#primer-numero-multiplicacion");
const secondM = document.querySelector("#segundo-numero-multiplicacion");
const formM = document.querySelector("#multiplicar-form");
const divM = document.querySelector("#resultado-multiplicacion");

// Evento para manejar el formulario de número romano
formNumeroArabigo.addEventListener("submit", (event) => {
  event.preventDefault();
  const numberA = Number.parseInt(inputNumeroArabigo.value);
  if (isNaN(numberA)) {
    resultadoNumeroRomano.innerHTML = `<p>Por favor, ingrese un número válido.</p>`;
    return;
  }
  resultadoNumeroRomano.innerHTML = `<p>${convertir_a_romano(numberA)}</p>`;
});

// Evento para manejar el formulario de FizzBuzz
formFizzBuzz.addEventListener("submit", (event) => {
  event.preventDefault();
  const numberF = Number.parseInt(inputFizzBuzz.value);
  if (isNaN(numberF)) {
    resultadoFizzBuzz.innerHTML = `<p>Por favor, ingrese un número válido.</p>`;
    return;
  }
  resultadoFizzBuzz.innerHTML = `<p>${fizzbuzz(numberF)}</p>`;
});

// Evento para manejar el formulario de saludos
formSaludo.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const genero = document.querySelector("#genero").value;
  const edad = parseInt(document.querySelector("#edad").value, 10);
  const idioma = document.querySelector("#idioma").value;
  resultadoSaludo.innerHTML = `<p>${saludar(nombre, genero, edad, idioma)}</p>`;
});

// Evento para manejar el formulario de suma
formS.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number.parseInt(firstS.value);
  const secondNumber = Number.parseInt(secondS.value);
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    divS.innerHTML = `<p>Por favor, ingrese números válidos.</p>`;
    return;
  }
  divS.innerHTML = `<p>${sumar(firstNumber, secondNumber)}</p>`;
});

// Evento para manejar el formulario de multiplicación
formM.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number.parseInt(firstM.value);
  const secondNumber = Number.parseInt(secondM.value);
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    divM.innerHTML = `<p>Por favor, ingrese números válidos.</p>`;
    return;
  }
  divM.innerHTML = `<p>${multiplicar(firstNumber, secondNumber)}</p>`;
});
