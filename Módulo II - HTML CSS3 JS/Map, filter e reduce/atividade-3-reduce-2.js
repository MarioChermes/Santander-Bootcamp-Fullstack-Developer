function checaSaldo(arr, saldoDisponível) {
    return arr.reduce(function(prev, current){
        return prev - current;
    }, saldoDisponível);
}

const preços = [15, 23, 35, 41, 58, 69, 72, 85, 99, 100];

console.log(checaSaldo(preços, 1000));