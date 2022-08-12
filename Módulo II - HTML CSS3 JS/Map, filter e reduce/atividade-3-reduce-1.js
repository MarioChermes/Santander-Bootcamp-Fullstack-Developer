function reduceSoma (arr) {
    return arr.reduce(function(prev, current) {
        return prev + current;
    })    
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(red(nums));