const prompt = require('prompt-sync')();

let nomes = [];
let i = 0;

while (i < 5) {
  let nome = prompt("Digite um nome: ");
  nomes.push(nome);
  i++;
}

i = 0;
let encontrado = false;

while (i < nomes.length) {
  if (nomes[i] === "Ricardo") {
    encontrado = true;
    break;
  }

  i++;
}

if (encontrado) {
  console.log("Usuário Ricardo encontrado");
} else {
  console.log("Ricardo não cadastrado");
}