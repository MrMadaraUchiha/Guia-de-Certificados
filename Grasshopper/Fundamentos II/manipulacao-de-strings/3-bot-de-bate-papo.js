// Neste desafio, foi criado um bot de bate-papo usando o método de inclusão e algumas if statements. O método .includes() pode ser usado em uma string para verificar se ela contém um valor específico. Por exemplo, 'I love coding'.includes('love') pesquisa a string 'I love coding' para o argumento 'love'. Como a frase 'I love coding' contém 'love', todo o comando retorna true.

print(chat);
if (chat.includes('hello')) { // se chat conter a string hello, então o print entre as chaves será acionado.
    print('Hi, can I help you pick a destination?');
}
if(chat.includes('bye')) { 
    print('See you later, have a great trip!');
}