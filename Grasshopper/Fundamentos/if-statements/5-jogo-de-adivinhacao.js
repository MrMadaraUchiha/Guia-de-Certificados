// Neste desafio, você criará dicas para adivinhar entre as 3 diferentes conchas para encontrar a ervilha escondida. Você usará o operador de comparação !== que significa é diferente de. Por exemplo, 5 !== 4 seria true, pois 5 é diferente de 4.

var pea = pickRandom([
    1,
    2,
    3,
  ]);
  if (pea !== 1) { // se pea for diferente de 1
    print('Not under shell 1');
  }
  if (pea !== 3) {
    print('Not under shell 3');
  }
  