const prompt = require('prompt-sync')();

const nomesVendedores = ["Dante", "Virgilio", "Beatrice", "Socrátes", "Aristóteles"];
const totalVendas = [1200, 950, 1800, 700, 1500];

let soma = 0;

for (let i = 0; i < totalVendas.length; i++) {
    soma += totalVendas[i];
}

const media = soma / totalVendas.length;
console.log("Média de vendas do grupo:", media);

let maiorVenda = totalVendas[0];
let vendedorDestaque = nomesVendedores[0];

for (let i = 1; i < totalVendas.length; i++) {
    if (totalVendas[i] > maiorVenda) {
        maiorVenda = totalVendas[i];
        vendedorDestaque = nomesVendedores[i];
    }
}

console.log("Vendedor Destaque:", vendedorDestaque);

const limiteMeta = media * 0.7;

console.log("Abaixo da Meta:");

for (let i = 0; i < totalVendas.length; i++) {
    if (totalVendas[i] < limiteMeta) {
        console.log(nomesVendedores[i]);
    }
}