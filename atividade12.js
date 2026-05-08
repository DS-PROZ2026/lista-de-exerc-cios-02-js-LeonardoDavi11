const prompt = require('prompt-sync')();

let consumos = [];
let soma = 0;

for (let i = 0; i < 7; i++) {
  let litros = Number(
    prompt(`Digite o consumo do Dia ${i + 1}: `)
  );

  consumos.push(litros);
  soma += litros;
}

let media = soma / consumos.length;

let maiorConsumo = consumos[0];
let diaMaior = 1;

for (let i = 1; i < consumos.length; i++) {
  if (consumos[i] > maiorConsumo) {
    maiorConsumo = consumos[i];
    diaMaior = i + 1;
  }
}

console.log("\n--- RELATÓRIO ---");
console.log("Consumo Total da Semana:", soma, "litros");
console.log("Média Diária:", media.toFixed(2), "litros");
console.log(
  `Maior pico de consumo: Dia ${diaMaior} com ${maiorConsumo} litros`
);