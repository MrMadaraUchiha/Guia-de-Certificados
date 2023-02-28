// Às vezes, é necessário manter as variáveis separadas, para garantir que não sejam alteradas por engano. Variáveis declaradas com let não podem ser usadas fora do bloco de código onde vivem.

var color = 'yellow';
drawBox(color);
for (let color of [
  'blue',
  'green',
  ___
]) {
  drawBox(color);
}
drawBox(color);
