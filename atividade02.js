const prompt = require('prompt-sync')();

let atleta = []
let medalha = ["Ouro", "Prata", "Broze"]

for(i = 0; i <= 4; i++){
    let nome = prompt("Digite o nome do s5 atletas: ")
    atleta.push(nome)
}

for(let i = 0; i < 3; i++){
    console.log(`O atleta ${atleta[i]} recebeu a medalha de ${medalha}`)
}
for(let i = 3; i <5; i++){
    console.log(`Participante ${atleta[i]}" recebeu medalha de participação`)
}