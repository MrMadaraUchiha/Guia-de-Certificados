// Nesta lição, foi adicionado uma chamada de função a uma declaração de função. Complete a declaração de função maximum() adicionando uma chamada de função larger().

function larger(a,b){
    return a > b ? a : b; // (a>b) seria a condição que é precedido por ?, sendo que se for verdadeira o valor será (a), caso contrário será (b).
};
function maximum(array){
    let max = 0;
    for(let num of array){
        max = larger(max, num);
    }
    return max;
};
console.log(list);
console.log(maximum(list));