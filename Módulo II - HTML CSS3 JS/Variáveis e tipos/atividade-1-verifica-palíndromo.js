//solução 1
function verificaPalíndromo(string) {
    if(!string) return;
    let reverseString = "";
    for (let l = string.length-1; l >= 0; l--) {
        reverseString += string[l];
    }
    if (string === reverseString) {
        return `A palavra ${string} é um palíndromo.`;
    }
    else {
        return `A palavra ${string} não é um palíndromo.`;
    }
}

//solução 2
function verificaPalíndromo2(string) {
    if(!string) return;
    if (string.split("").reverse().join("").replace(/\s+/g, "") === string.replace(/\s+/g, "")) return `A frase ${string} é um palíndromo.`;
    else return `A frase ${string} não é um palíndromo.`;
}

//solução 3
function verificaPalíndromo3(string) {
    if (!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string.length - 1 - i) {
            return false;
        }
    }
    return true;
}

console.log(verificaPalíndromo2("a baba baba"));