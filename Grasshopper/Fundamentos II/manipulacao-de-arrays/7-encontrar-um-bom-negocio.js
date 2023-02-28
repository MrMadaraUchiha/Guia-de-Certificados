// Neste desafio, você usará o método.forEach() para descobrir os preços mais altos e mais baixos de uma passagem de avião na semana anterior. O método .forEach() percorre cada item de uma array e usa o item como um argumento para a função retorno de chamada especificada.

import { flightPrices } from "grasshopper.travel";

let max = flightPrices[0];
let min = flightPrices[0];

function compareToMaximum(value) {
  max = value > max ? value : max;
}

function compareToMinimum(value) {
  min = value < min ? value : min;
}

console.log(flightPrices);
flightPrices.forEach(compareToMaximum);
console.log("Maximum: " + max);
flightPrices.forEach(compareToMinimum);
console.log("Minimum: " + min);
