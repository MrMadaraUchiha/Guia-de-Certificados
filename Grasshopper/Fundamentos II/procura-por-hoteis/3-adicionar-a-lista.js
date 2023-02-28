//Neste desafio, você concluirá a declaração de função getRatings(). Esta função salvará as avaliações do hotel em uma array em vez de apenas registrá-las no console.

import { getData, findHotels } from 'grasshopper.reviews';

function getRatings(hotelList) {
    let ratings = [

    ];
    for (var element of hotelList) {
        ratings.push(element.rating);
    }
    return ratings;
};
let grasslandHotels = getData('Grassland', findHotels);
console.log('Ratings Array:');
console.log(getRatings(grasslandHotels));