# Array
### Em JavaScript, uma array é uma lista de itens. Os itens podem ser diferentes tipos de dados: números, strings e até mesmo outras arrays. Uma array dentro de outra array é chamada de aninhamento de arrays.

#

### <strong>CÓDIGO DE EXEMPLO</strong>
```javascript
var exampleArray = [
    'blue',
    'orange',
    5,
    10,
    [
        50,
        10
    ]
];
/* exampleArray tem 5 itens. Ela contém strings, números e uma array; que tem dois itens que são números. */
```
### Na maioria das linguagens de programação, incluindo JavaScript, as arrays são indexadas a partir de 0. O primeiro item em uma array tem o índice 0. Por exemplo, myArray[0] acessa o primeiro item. Enquanto myArray[3] acessa o 4º item.
#
### <strong>CÓDIGO DE EXEMPLO</strong>
```javascript
var groceries = [
    'apples',
    'bananas',
    'oranges'
];
var fruit = groceries[1];
/* A variável fruit cotém o segundo item da array, que é 'bananas'. */
```