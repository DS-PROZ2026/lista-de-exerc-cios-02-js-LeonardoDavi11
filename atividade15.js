const prompt = require("prompt-sync")();

let custos = [];

let soma = 0;
let maior = 0;

for (let i = 0; i < 4; i++) {
    let custo = Number(prompt(`Digite o custo da manutenção ${i + 1}: R$ `));
    
    custos.push(custo);
    soma += custo;

    if (i === 0 || custo > maior) {
        maior = custo;
    }
}

let media = soma / 4;

console.log("\n--- RELATÓRIO DE MANUTENÇÃO ---");
console.log(`Custo Total: R$ ${soma.toFixed(2)}`);
console.log(`Custo Médio: R$ ${media.toFixed(2)}`);
console.log(`Valor da Manutenção Mais Cara: R$ ${maior.toFixed(2)}`);