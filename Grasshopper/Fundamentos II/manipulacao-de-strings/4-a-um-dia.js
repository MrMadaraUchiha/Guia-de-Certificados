// Neste desafio, você usará o método .replace() para substituir parte de uma string. O método .replace() procura um valor e, se o encontrar, substituirá o 1º valor por uma nova string. Por exemplo, para mudar a string 'lemons' em'lemonade', você usaria .replace('lemons', 'lemonade').

var message = 'Today we are going shopping!';
message = message.replace('day', 'morrow'); // método replace seleciona a string 'day' e substitui pela string 'morrow'.
print(message);