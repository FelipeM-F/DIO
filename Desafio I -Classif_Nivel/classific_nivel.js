const prompt = require('prompt-sync')();
let nome;
let escolha;
let xp;
let nivel;
do{
nome = prompt('Digite o nome do seu personagem: ');
console.log(`Seu personagem é ${nome}`);
escolha = prompt('Deseja continuar com esse nome? (s/n)');
}while(escolha != 's');

xp = parseInt(prompt('Digite a quantidade de eperiência (XP) do seu personagem: '));

const niveis = {
    1000: "Ferro",
    2000: "Bronze",
    5000: "Prata",
    7000: "Ouro",
    8000: "Platina",
    9000: "Ascendente",
    10000: "Imortal"
};

nivel = "Radiante"; 

for (let xpLimite in niveis) {
    if (xp <= parseInt(xpLimite)) {
        nivel = niveis[xpLimite];
        break;
    }
}

console.log(`O Herói de nome "${nome}" está no nível de "${nivel}"`);
