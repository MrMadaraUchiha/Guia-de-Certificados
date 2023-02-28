// Neste desafio, foi criado uma declaração de função que usa um comando de retorno para converter dólares em baht tailandês. A palavra-chave retorna diz a uma função para parar de executar e retorna um valor.

let wallet = 50;
function inYen(dollars) {
  let yen = dollars * 113;
  return yen;
};
function inBaht(dollars) {
  let baht = dollars * 33;
  return baht;
};
console.log(wallet + ' US dollars is:');
console.log(inYen(wallet) + ' Japanese yen');
console.log(inBaht(wallet) + ' Thai baht');