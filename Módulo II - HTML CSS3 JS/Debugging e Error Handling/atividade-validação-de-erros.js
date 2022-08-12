function validaArray(arr, tamanho) {
    try{
        if (!arr || !tamanho) throw new ReferenceError("Envie os parâmetros");

        if (typeof (arr) !== "object" || typeof (tamanho) !== "number") throw new TypeError("O array precisa ser do tipo object e o tamanho do tipo number");
    
        if (arr.length !== tamanho) throw new RangeError("O array deve ter o tamanho inserido");
    
        else return arr;
    } catch(e) {
        if (e instanceof ReferenceError) {
            console.log(`Este erro é um ReferenceError\n${e.message}`);
        } else if (e instanceof TypeError) {
            console.log(`Este erro é um TypeError\n${e.message}`);
        } else if (e instanceof RangeError) {
            console.log(`Este erro é um RangeError\n${e.message}`);
        } else {
            console.log(`Ocorreu um erro inesperado: ${e}`)
        }
    }
}

console.log(validaArray([5, 4, 3], 3));