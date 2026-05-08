const prompt = require('prompt-sync')();

const funcionarios = [
  { nome: "Jane", salario: 10000 },
  { nome: "Robson", salario: 4200 },
  { nome: "Gui", salario: 1800 },
  { nome: "Simeria", salario: 3500 }
];

let i = 0;

while (i < funcionarios.length) {
  if (funcionarios[i].salario > 3000) {
    console.log(funcionarios[i].nome);
  }

  i++;
}