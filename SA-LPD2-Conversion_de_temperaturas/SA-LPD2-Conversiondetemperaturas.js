//Llamamos a prompt para solicitar al usuario una temperatura en °C a convertir
const prompt = require("prompt-sync")();
//Se crea una función que verifique que que el dato ingresado sea un número
function getInput() {
  let num = prompt("Ingrese la temperatura en grados Celsius: ");
  //Verificamos que sea un número por medio de la función "isNaN(),
  //esta da como resultado "true" si el dato es "NaN" y "false" si  no lo e
  if (isNaN(num)) {
    console.log("Error! Por favor ingrese un numero no otro tipo de dato");
    return getInput();
  } else {
    return Number(num);
  }
}
//Aqui se hace la función que convierte la temperatura en °C a °F y K
function convTemp(celsius) {
  //Convertir de Celsius a Fahrenheit
  let fahrenheit = (celsius * 9) / 5 + 32;
  console.log(`La temperatura ${celsius}°C es igual a ${fahrenheit}°F`);

  //Convertir de Celsius a Kelvin
  let kelvin = celsius + 273.15;
  console.log(`La temperatura ${celsius}°C es igual a  ${kelvin} K`);
}
let num = getInput();
convTemp(num);
