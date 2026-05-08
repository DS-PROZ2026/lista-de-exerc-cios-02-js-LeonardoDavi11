const prompt = require('prompt-sync')();

let frota = [
    {
        modelo: "Volvo FH",
        quilometragem: 120000,
        revisao: 8
    },

    {
        modelo: "Scania R450",
        quilometragem: 2000,
        revisao: 4
    },

    {
        modelo: "Mercedes Actros",
        quilometragem: 150000,
        revisao: 10
    },

    {
        modelo: "DAF XF",
        quilometragem: 95000,
        revisao: 7
    }
];

let frotaManutencao = [];
for (let i = 0; i < frota.length; i++) {

    if (
        frota[i].quilometragem > 100000 ||
        frota[i].revisao > 6
    ) {
        frotaManutencao.push(frota[i]);
    }
}

console.log("Veículos que precisam de parada técnica:\n");

for (let i = 0; i < frotaManutencao.length; i++) {

    console.log(
        `${frotaManutencao[i].modelo} | ` +
        `${frotaManutencao[i].quilometragem} km | ` +
        `${frotaManutencao[i].revisao} meses sem revisão`
    );
}

console.log(
    `\nTotal de veículos para manutenção: ${frotaManutencao.length}`
);