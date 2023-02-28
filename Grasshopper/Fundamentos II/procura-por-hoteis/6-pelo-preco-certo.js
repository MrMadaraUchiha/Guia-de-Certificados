// Neste desafio, você filtrará os hotéis Grassland para mostrar apenas aqueles com um preço inferior a $100 por noite. Em seguida, encontrará a avaliação média dos hotéis Grassland acessíveis.

import { getData, findHotels } from 'grasshopper.reviews';
import { averageRating } from 'myFunctions';

let grasslandHotels = getData('Grassland', findHotels);

function underAHundred(hotel) {
    return hotel.price < 100;
};
let affordableHotels = grasslandHotels.filter(underAHundred);
console.log('Average Rating in Grassland under $100:');
console.log(averageRating(affordableHotels));