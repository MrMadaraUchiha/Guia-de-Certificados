// Neste desafio, você usará uma if statement dentro de um laço for...of para revelar uma imagem. Cada vez que o laço for...of faz uma iteração, a if statement aninhada dentro dele testará a letter atual em img.

for (var letter of img) {
    if (letter !== 'e') {
      drawBoxes(letter);
      
    }
  }