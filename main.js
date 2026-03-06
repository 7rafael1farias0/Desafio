const {gets, print} = require('./funcoes-auxiliares');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numero = gets();
    numerosSorteados.push(numero);
}

let maiorNumero = numerosSorteados[0];

for (let i = 1; i < numerosSorteados.length; i++) {
    if (numerosSorteados[i] > maiorNumero) {
        maiorNumero = numerosSorteados[i];
    }
}
print(`Maior número: ${maiorNumero}`);