// Neste desafio, você recuperará e imprimirá avaliações de hotéis usando a função getData(), importada da API grasshopper.reviews. O 1º argumento de getData() é o nome de uma cidade. O 2º argumento é uma função retorno de chamada que diz a getData() que tipo de comentários encontrar.

import { getData, findHotels } from 'grasshopper.reviews';

function printHotel(hotel) {
    console.log('___HOTEL_INFO___');

    console.log('type: ' + hotel.type);
    console.log('city: ' + hotel.city);
    console.log('price: ' + hotel.price);
    console.log('rating: ' + hotel.rating);
};
let grasslandHotels = getData('Grassland', findHotels);
grasslandHotels.forEach(printHotel);