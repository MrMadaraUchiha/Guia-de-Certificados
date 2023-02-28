# Laço for
### Um loop, ou um laço, repete uma parte do código entre os colchetes {}. Em Javascript, um laço for...of percorre cada elemento em uma array ou string, repetindo o código para cada elemento.
#

### <strong>CÓDIGO DE EXEMPLO</strong>
```javascript
var groceries = [
    'apples',
    'yogurt',
    'toothtpaste'
];
for (var element of groceries) {
    console.log(element);
}
/* Cada item na array groceries será impresso em sua própria linha*/
```
# Operadores lógicos
### Operadores lógicos permitem combinar os operadores de comparação (===, !, ==, <, >) juntos. Um exemplo de operador lógico é o operador 'e' (&&). Se uma if statement for usada, requer que ambas as verificações de comparação sejam verdadeiras.

#

### <strong>CÓDIGO DE EXEMPLO</strong>
```javascript
if (time === 'midnight' && day !== 'saturday') {
    console.log('You should go to bed');
}
/* Esta if statement verifica que hora é igual a 'midnight' e que day não é igual a 'Saturday'. Se ambas as verificações forem verdadeiras, hour é 'midnight' e day não é 'Saturday', a frase será impressa. */
```