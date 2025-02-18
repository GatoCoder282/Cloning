import sumar from "./sumador.js";
import multiplicar from "./multiplicador.js";
import { saludar } from "./saludar.js"; // Importar la función de saludos

// Seleccionar elementos del formulario de saludos
const formSaludo = document.querySelector("#saludo-form");
const resultadoSaludo = document.querySelector("#resultado-saludo");

// Seleccionar elementos del formulario de suma
const firstS = document.querySelector("#primer-numero-suma");
const secondS = document.querySelector("#segundo-numero-suma");
const formS = document.querySelector("#sumar-form");
const divS = document.querySelector("#resultado-suma");

// Seleccionar elementos del formulario de multiplicación
const firstM = document.querySelector("#primer-numero-multiplicacion");
const secondM = document.querySelector("#segundo-numero-multiplicacion");
const formM = document.querySelector("#multiplicar-form");
const divM = document.querySelector("#resultado-multiplicacion");

// Evento para manejar el formulario de saludos
formSaludo.addEventListener("submit", (event) => {
  event.preventDefault();

  // Obtener valores del formulario de saludo
  const nombre = document.querySelector("#nombre").value;
  const genero = document.querySelector("#genero").value;
  const edad = parseInt(document.querySelector("#edad").value, 10);


  resultadoSaludo.innerHTML = `<p>${saludar(nombre,genero,edad)}</p>`;
});

// Evento para manejar el formulario de suma
formS.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstS.value);
  const secondNumber = Number.parseInt(secondS.value);

  divS.innerHTML = `<p>${sumar(firstNumber, secondNumber)}</p>`;
});

// Evento para manejar el formulario de multiplicación
formM.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstM.value);
  const secondNumber = Number.parseInt(secondM.value);

  divM.innerHTML = `<p>${multiplicar(firstNumber, secondNumber)}</p>`;
});
