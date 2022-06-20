let contadorMayores: number = 0;
let total: number = 0;
let porcentaje: number = 0;
let numero: number = Number(prompt("Ingresar un número entero"));

while (numero != 0) {
  console.log("El número ingresado es:" + numero);
  total += 1;
  if (numero > 0) {
    contadorMayores += 1;
    numero = Number(prompt("Ingresar un número entero"));
  } else {
    numero = Number(prompt("Ingresar un número entero"));
  }
}
console.log("La cantidad de números mayores a cero son:" + contadorMayores);
porcentaje = (contadorMayores * 100) / total;
console.log("El porcentaje correspondiente a ese valor es:" + porcentaje + "%");
