/* Neste desafio, você registrará as classificações de todos os hotéis em Grassland no console. A chamada de função getData() retornará uma array de objetos. Cada análise de hotel objeto tem as mesmas 4 propriedades, mas valores diferentes:

let exampleHotel = {
        type: 'The Grassy Suites',
        city: 'Hoptropolis',
        price: 171,
        rating: 2​ .8
    }
*/
import { getData, findHotels } from 'grasshopper.reviews';

let grasslandHotels = getData('Grassland', findHotels);
for (var element of grasslandHotels) {
    console.log(element.rating);
}