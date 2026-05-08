const prompt = require('prompt-sync')();

// Arrays paralelos
let modelos = ["Duster", "Creta", "Nivus", "Pulse", "Compass"];
let precos = [110000, 135000, 128000, 105000, 180000];

let orcamento = Number(prompt("Digite seu orçamento máximo: "));

let encontrou = false;



for (let i = 0; i < modelos.length; i++) {

    if (orcamento >= precos[i]) {
        console.log(`${modelos[i]} - R$ ${precos[i]}`);
        console.log("\nSUVs disponíveis dentro do seu orçamento:\n");
        encontrou = true;
    }
}

if (!encontrou) {
    console.log('Que tal olhar nossa seção de seminovos?');
}