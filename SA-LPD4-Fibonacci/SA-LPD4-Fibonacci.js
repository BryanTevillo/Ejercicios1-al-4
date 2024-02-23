//Se llama a prompt para solicitar al usuario introducir un número
const prompt = require("prompt-sync")();
//Se crea una función que verifique que que el dato ingresado sea un número
function getInput() {
  let num = prompt("Ingrese un numero ");
  //Verificamos que sea un número por medio de la función "isNaN(),
  //esta da como resultado "true" si el dato es "NaN" y "false" si  no lo es
  if (isNaN(num)) {
    console.log("Error: El valor ingresado no es un número.");
    return getInput();
  } else {
    return Number(num);
  }
}

function fibonacci(n) {
  let a = 0,
    b = 1,
    c;
  while (n--) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
  }
  return a;
}
let num = getInput();
console.log(`El número ${num} en la posición Fibonacci es ${fibonacci(num)}`);
