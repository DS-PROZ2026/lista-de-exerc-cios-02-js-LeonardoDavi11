const prompt = require("prompt-sync")();

let consumos = [];

let soma = 0;
let maior = 0;
let menor = 0;

for (let i = 0; i < 5; i++) {
    let consumo = Number(prompt(`Informe o consumo do caminhão ${i + 1} (km/l): `));

    consumos.push(consumo);
    soma += consumo;

    if (i === 0) {
        maior = consumo;
        menor = consumo;
    } else {
        if (consumo > maior) {
            maior = consumo;
        }

        if (consumo < menor) {
            menor = consumo;
        }
    }
}

let media = soma / 5;

console.log("\n--- RELATÓRIO DA FROTA ---");
console.log(`Média de Consumo da Frota: ${media.toFixed(2)} km/l`);
console.log(`Melhor Consumo: ${maior} km/l`);
console.log(`Pior Consumo: ${menor} km/l`);