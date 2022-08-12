function substituiPares(array) {
    if (!array.length) return -1;
    for (let n = 0; n < array.length - 1; n++) {
        if (array[n] % 2 === 0) {
            array[n] = 0;
        }
    }
    return array;
}

console.log(substituiPares([]));