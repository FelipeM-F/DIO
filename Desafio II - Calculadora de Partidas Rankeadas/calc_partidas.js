function ranking(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas;
    let heroi = {saldoVitorias:saldoVitorias, nivel:"Imortal"};
    if (saldoVitorias < 10) {
        heroi = {saldoVitorias:saldoVitorias, nivel:"Ferro"};
        return heroi;
    }
    if (saldoVitorias > 10 && saldoVitorias <= 20) {
        heroi = {saldoVitorias:saldoVitorias, nivel:"Bronze"};
        return heroi;
    }
    if (saldoVitorias > 20 && saldoVitorias <= 50) {
        heroi = {saldoVitorias:saldoVitorias, nivel:"Prata"};
        return heroi;
    }
    if (saldoVitorias > 50 && saldoVitorias <= 80) {
        heroi = {saldoVitorias:saldoVitorias, nivel:"Ouro"};
        return heroi;
    }
    if (saldoVitorias > 80 && saldoVitorias <= 90) {
        heroi = {saldoVitorias:saldoVitorias, nivel:"Diamante"};
        return heroi;
    }
    if (saldoVitorias > 90 && saldoVitorias <= 100) {
        heroi = {saldoVitorias:saldoVitorias, nivel:"Lendário"};
        return heroi;
    }
    return heroi;
}

function imprimirRanking(heroi) {
    if (heroi && typeof heroi === 'object' && 'saldoVitorias' in heroi && 'nivel' in heroi) {
        console.log("O Herói tem", heroi.saldoVitorias, "vitórias de saldo e está no nível", heroi.nivel);
    } else {
        console.error("Objeto de herói inválido!");
    }
}

let vitorias = 29;
let derrotas = 12;
let heroi = ranking(vitorias, derrotas);
imprimirRanking(heroi);