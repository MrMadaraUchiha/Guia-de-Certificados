//Neste desafio, você atualizará a declaração de função averageRating para usar um hotelList, obterá suas ratings e, em seguida, return a average() daquelas ratings. A função average() que você criou no último desafio é importada no início do código. É possível usá-la para encontrar o valor médio das ratings.

import { getData, findHotels } from 'grasshopper.reviews';
import { average, getRatings } from 'myFunctions';

function averageRating(hotelList) {
    let ratings = getRatings(hotelList);
    return average(ratings);
};

let grasslandHotels = getData('Grassland', findHotels);
console.log('Average Grassland hotel rating:');
console.log(averageRating(grasslandHotels));

let hoptropolisHotels = getData('Hoptropolis', findHotels);
console.log('Average Hoptropolis hotel rating:');
console.log(averageRating(hoptropolisHotels));