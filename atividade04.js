const prompt = require('prompt-sync')();

let temperaturas = [];

for (let i = 0; i < 7; i++) {

    let temp = Number(prompt(`Digite a temperatura do dia ${i + 1}: `));

    temperaturas.push(temp);
}

let menor = Math.min(...temperaturas);

let maior = Math.max(...temperaturas);

let soma = 0;

for (let i = 0; i < temperaturas.length; i++) {
    soma += temperaturas[i];
}

let media = soma / temperaturas.length;

console.log("Menor temperatura:", menor);
console.log("Maior temperatura:", maior);
console.log("Média:", media.toFixed(2));