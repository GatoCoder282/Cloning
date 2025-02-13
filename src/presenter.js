import sumar from "./sumador";
import multiplicar from "./multiplicador";

const firstS = document.querySelector("#primer-numero-suma");
const secondS = document.querySelector("#segundo-numero-suma");
const formS = document.querySelector("#sumar-form");
const divS = document.querySelector("#resultado-suma");

const firstM = document.querySelector("#primer-numero-multiplicacion");
const secondM = document.querySelector("#segundo-numero-multiplicacion");
const formM = document.querySelector("#multiplicar-form");
const divM = document.querySelector("#resultado-multiplicacion");

formS.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstS.value);
  const secondNumber = Number.parseInt(secondS.value);

  divS.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

formM.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstM.value);
  const secondNumber = Number.parseInt(secondM.value);

  divM.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
