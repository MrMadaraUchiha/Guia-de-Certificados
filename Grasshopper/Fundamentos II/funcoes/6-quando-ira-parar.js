// Quando a função sumUpTo() parará de chamar a si mesma (parar recursão)?

function sumUpto(number) {
    if (number === 1) {
        return 1;
    }
    return number + sumUpto(number - 1);
}

console.log(sumUpto(2));