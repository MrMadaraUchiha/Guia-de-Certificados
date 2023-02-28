// Neste desafio, você usará um laço dentro de outro laço para ajudar a gerar novas ideias de nomes de banda. Isso se chama usar um laço aninhado.

for (var adj of [
    'Raging',
    'Squids',
    'Twins',
    
  ]) {
    for (var noun of [
      'Pharmacists',
      'Happy',
      'Hungry',
      
    ]) {
      print('The ' + adj + ' ' + noun);
    }
  }

  /*The Raging Pharmacists
    The Raging Happy
    The Raging Hungry
    The Squids Pharmacists
    The Squids Happy
    The Squids Hungry
    The Twins Pharmacists
    The Twins Happy
    The Twins Hungry */