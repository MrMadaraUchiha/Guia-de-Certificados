// Neste desafio você concluirá a declaração de função average(). Primeiro, você adicionará todos os valores em uma array.Em seguida, você irá dividir a soma de todos os itens pelo comprimento da array.

import { getData, findHotels } from 'grasshopper.reviews';
import { getRatings } from 'myFunctions';

function average(array, ___) {
    let total = 0;
    for (let element of array) {
        total += element;
    }
    return total / array.length;
};
let grasslandRatings = getRatings(getData('Grassland', findHotels, ___), ___);
console.log(grasslandRatings);
console.log('The average is:');
console.log(average(grasslandRatings));