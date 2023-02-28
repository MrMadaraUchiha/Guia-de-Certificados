/* Neste desafio, você usará o método .slice() para criar uma nova array. O método .slice() cria uma nova array copiando uma subseção de outra array. São necessários 2 argumentos: um índice de array onde começar a copiar e um índice onde terminar (fim não incluído). */
import { transportation } from 'grasshopper.travel';

let cities = [
    'London',
    'London',
    'London',
    'Lagos',
    'Lisbon',
    'Louisville',

];
console.log(cities.slice(2, 6));
console.log(transportation.slice(2, 6));