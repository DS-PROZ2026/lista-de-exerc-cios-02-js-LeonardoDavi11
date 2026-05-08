const prompt = require("prompt-sync")();

let destinos = [];
let somaPassagens = 0;
let maiorValor = 0;
let destinoMaisCaro = "";

for (let i = 0; i < 10; i++) {
    console.log(`\nCadastro do destino ${i + 1}`);

    let destino = prompt("Digite o nome do destino: ");
    let passagem = Number(prompt("Digite o preço da passagem: R$ "));
    let hospedagem = Number(prompt("Digite o valor da hospedagem: R$ "));

    let total = passagem + hospedagem;

    destinos.push({
        destino: destino,
        passagem: passagem,
        hospedagem: hospedagem,
        total: total
    });

    somaPassagens += passagem;

    if (total > maiorValor) {
        maiorValor = total;
        destinoMaisCaro = destino;
    }
}

let mediaPassagens = somaPassagens / 10;

console.log("\n===== RESULTADOS =====");
console.log(`Média dos preços das passagens: R$ ${mediaPassagens.toFixed(2)}`);

console.log(`Destino mais caro: ${destinoMaisCaro}`);
console.log(`Valor total gasto: R$ ${maiorValor.toFixed(2)}`);

let encontrou = false;

for (let d of destinos) {
    if (d.total < 1000) {
        console.log(`O destino ${d.destino} custa menos de R$ 1000,00`);
        encontrou = true;
    }
}

if (!encontrou) {
    console.log("Nenhum destino custa menos de R$ 1000,00");
}