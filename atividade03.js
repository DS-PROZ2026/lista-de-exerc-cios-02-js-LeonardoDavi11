const prompt = require('prompt-sync')();

let mochila = [];
let capacidade = 4;

let itens = ["Bandagem", "Água", "Munição", "Colete", "Flor", "Bomb"];

for (let i = 0; i < itens.length; i++) {

    if (mochila.length < capacidade) {
        mochila.push(itens[i]);
        console.log(`${itens[i]} foi adicionado à mochila.`);
    } else {

        let reposicao = prompt(
            `Mochila cheia! Deseja descartar o primeiro item para pegar ${itens[i]}? (S/N): `
        );

        if (reposicao.toUpperCase() === 'S') {
            mochila.splice(0, 1);
            mochila.push(itens[i]);

            console.log(`${itens[i]} foi adicionado.`);
        } else {
            console.log(`Nenhum iten foi trocado`);
        }
    }
}

console.log("\nItens na mochila:");
console.log(mochila);