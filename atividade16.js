const prompt = require("prompt-sync")();

let pessoas = [];

let somaIdades = 0;
let pessoaMaisVelha = {};

for (let i = 0; i < 5; i++) {
    let nome = prompt(`Digite o nome da pessoa ${i + 1}: `);
    let idade = Number(prompt(`Digite a idade de ${nome}: `));

    let pessoa = {
        nome: nome,
        idade: idade
    };

    pessoas.push(pessoa);

    somaIdades += idade;

    if (i === 0 || idade > pessoaMaisVelha.idade) {
        pessoaMaisVelha = pessoa;
    }
}

let media = somaIdades / 5;

console.log("\n--- RELATÓRIO DO GRUPO ---");
console.log(`Média de idade: ${media.toFixed(2)} anos`);
console.log(`Pessoa mais velha: ${pessoaMaisVelha.nome}`);
console.log(`Idade da pessoa mais velha: ${pessoaMaisVelha.idade} anos`);