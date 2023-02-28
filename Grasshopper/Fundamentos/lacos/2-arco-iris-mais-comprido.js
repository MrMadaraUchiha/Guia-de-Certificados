// Neste desafio, você usará um laço for...of para repetir uma array de cores e criar um padrão de arco-íris.

for (var x of [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    
  ]) {
    drawBox(x);
    drawBox(x);
    drawBox(x);
    newLine();
    
  }