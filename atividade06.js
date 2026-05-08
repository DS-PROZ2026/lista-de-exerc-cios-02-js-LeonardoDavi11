const prompt = require('prompt-sync')();

let produtos = ["Monitor", "Mouse", "Teclado", "Cabo HDMI"];
let quantidades = [10, 2, 8, 3];

for (let i = 0; i < produtos.length; i++) {

    if (quantidades[i] < 5) {
        console.log(produtos[i]);
    }
}