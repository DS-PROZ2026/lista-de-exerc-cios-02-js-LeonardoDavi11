const prompt = require('prompt-sync')();

const estoque = [
  { produto: "Tela", quantidade: 15 },
  { produto: "Pincel", quantidade: 10 },
  { produto: "Molduras", quantidade: 50 }
];

let total = 0;

for (let i = 0; i < estoque.length; i++) {
  total += estoque[i].quantidade;
}

console.log("Total de itens no estoque:", total);