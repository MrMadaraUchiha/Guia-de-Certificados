// Neste desafio, você usará o método .filter() para selecionar itens de uma array que passam em um determinado teste. Cada item na array é usado como um argumento em uma função retorno de chamada e se retornar true, o item passa pelo filtro. Caso contrário, o item é filtrado.

import { departures } from 'grasshopper.travel';

function morning(time) {
    return time.includes('am');
};

function evening(time) {
    return time.includes('pm');
};

let amTimes = departures.filter(morning);
let pmTimes = departures.filter(evening);
console.log('Day times: ' + amTimes);
console.log('Night times: ' + pmTimes);