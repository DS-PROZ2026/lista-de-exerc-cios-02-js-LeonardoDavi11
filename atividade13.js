const prompt = require("prompt-sync")();

let temperaturas = [];

let soma = 0;
let maior = 0;
let alerta = 0;

for (let i = 0; i < 6; i++) {
    let temp = Number(prompt(`Digite a temperatura do sensor ${i + 1}: `));

    temperaturas.push(temp);
    soma += temp;

    if (i === 0 || temp > maior) {
        maior = temp;
    }

    if (temp > 35) {
        alerta++;
    }
}

let media = soma / 6;

console.log("\n--- RELATÓRIO DA ESTUFA ---");
console.log(`Temperatura Média: ${media.toFixed(2)}°C`);
console.log(`Maior Temperatura Registrada: ${maior}°C`);
console.log(`Quantidade de Sensores em Alerta: ${alerta}`);