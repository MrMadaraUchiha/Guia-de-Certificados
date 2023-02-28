# Laço for clássico
### Em JavaScript, um laço for clássico repete o mesmo código dentro do bloco {} um número determinado de vezes. Ele é definido em três partes. A primeira parte acontece antes do início do laço e define uma variável de laço (var i = 0). A segunda parte é um teste que determina se o laço deve continuar se repetindo (i<10). E a terceira parte atualiza a variável do laço cada vez que ele se repete (i = i + 1).
#

### <strong>CÓDIGO DE EXEMPLO</strong>
```javascript
console.log('The loop will go as long as i is less than 10.');
for (var i = 0; i < 10; i = i + 1) {
    console.log(i);
}
/* Neste exemplo, a variável do laço (i) começa em 0. O código no bloco {} contiuará se repetindo enquanto i for menor do que 10. E i é aumentado em 1 a cada laço. Esse código imprime a mensagem "The loop will go as long as i is less than 10." e, em seguida, imprime os números de 0 a 9. */
```
# Laços aninhados
### Um laço aninhado é um laço dentro de outro laço. Embora os laços aninhados possam ser úteis, se você tiver muitos, pode tornar a execução do código lenta ou difícil de entender.

#

### <strong>CÓDIGO DE EXEMPLO</strong>
```javascript
for (var outerNumber of [
    1,
    2,
    3,
    4,
    5
]) {
    for (var nestedNumber of [
        6,
        7,
        8,
        9
    ]) {
        console.log(outerNumber, nestedNumber);
    }
}
/* Esse código imprimirá 1,6, 1,7, 1,8, 1,9. E então outerNumber mudará para 2, e o laço interno imprimirá 2,6, depois 2,7 e assim por diante. */
```