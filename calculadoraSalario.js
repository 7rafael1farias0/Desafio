


const { gets, print } = require('./funcoes/funcoes-auxiliares3');
const valorBrutoSalario = gets();
const adicionalBeneficios = gets();
let percentualImposto = 0;

if (valorBrutoSalario <= 1100) {    
    percentualImposto = 0.05;
} else if (valorBrutoSalario > 1100 && valorBrutoSalario <= 2500) {
    percentualImposto = 0.10;
} else {
    percentualImposto = 0.15;
}
const valorImposto = valorBrutoSalario * percentualImposto;
const salarioTransferir = valorBrutoSalario - valorImposto + adicionalBeneficios;
print(salarioTransferir.toFixed(2));






