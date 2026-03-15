
const { gets, print } = require('./funcoes/funcoes-auxiliares1');
const media = gets();

if (media < 5) {
    print("REP");
} else if (media < 7) {
    print("REC");
} else { 
    print("APR");
}





