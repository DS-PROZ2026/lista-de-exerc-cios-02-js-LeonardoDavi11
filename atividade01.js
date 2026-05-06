const prompt = require('prompt-sync')();

const listaProibida = [
   "Jane", "Mark", "Nolan"
];

let cadastro = []
for (let i = 0; i < 3; i++){
    let nome = prompt("Digitte os nomes dos visitantes: ")
    if(listaProibida.indexOf(nome) != -1){
      console.log(`ALERTA: Segurança acionada para o visitante ${nome}`);
    }else { 
        cadastro.push(nome);
    }
}
console.log(cadastro);