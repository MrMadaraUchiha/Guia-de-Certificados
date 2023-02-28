// Neste desafio, você usará o operador de propagação para copiar todos os elementos de uma array em outra array.

import { flights, trains, buses } from 'grasshopper.travel';

let departures = [
    flights,
    ...trains,
    buses,
    ...flights,
    ...buses,
];
for (let time of departures) {
    console.log(time);
}

console.log(departures.length + ' total times');