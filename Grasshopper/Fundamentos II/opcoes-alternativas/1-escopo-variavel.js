// Na programação, o escopo determina onde uma variável pode ser usada. As variáveis podem ter escopo global ou local.

// Uma variável global pode ser usada em todo o código. Uma variável local só pode ser usada dentro do bloco onde é declarada.

// Uma variável local só pode ser usada dentro do bloco em que foi declarada.

// A chave var geralmente cria variáveis globais. A chave let permite que você crie variáveis locais.

// No código abaixo, a variável myLocalNumber é declarada usando a chave let. Isso significa que ele só existe dentro do bloco da if statement. O impossibleCalculation não funcionará porque a variável myLocalNumber não existe fora da if statement.

var myGlobalNumber = 5;
 if (myGlobalNumber > 3) { 
let myLocalNumber = 4; 
} 
var impossibleCalculation = myGlobalNumber + myLocalNumber

// É mais seguro usar variáveis locais do que as variáveis globais, especialmente se as variáveis tiverem nomes semelhantes.

