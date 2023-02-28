// Neste desafio, foi ensinado sobre declarações de função. Declarações de função salvam um bloco de código que pode ser usado sempre que o nome da função é chamado.

function inYen(dollars){    // A declaração de função inYen() pegará um número em dólares americanos e o converterá em ienes japoneses.
    let amount = dollars * 113;
    return amount;
};
console.log('20 US dollars is:');
console.log(inYen(20) + ' Japanese yen'); // 2260
console.log('100 US dollars is:');
console.log(inYen(100) + ' Japanese yen'); // 11300