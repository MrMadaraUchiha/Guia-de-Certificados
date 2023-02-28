//Neste desafio, você usará a propriedade .length para verificar o número total de caracteres em uma string. Por exemplo, 'Code is fun!'.length retorna o número 12 (espaços e símbolos também contam).

print(message);
if (message.length > 80) {
    print('The message is too long for a postcard.');
}
if (message.length < 80) {
    print('The message fits on a postcard');
}