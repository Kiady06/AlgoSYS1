const promptSync = require('prompt-sync');
const prompt = promptSync();

let inputA = prompt("Entrez le dividende A : ");
let inputB = prompt("Entrez le diviseur B : ");

const B = Number(inputB);
const A = Number(inputA);
let q;
let r;

if (b === 0) {
    console.log('error');
} else {
    r = A;
    q = 0;
    while (r >= B) {
        r -= B;
        q++;
    }

    console.log(`====================================`);
    console.log(`Résultat de ${a} / ${b} :`);
    console.log(`Quotient (q) = ${q}`);
    console.log(`Reste (r) = ${r}`);
    console.log(`====================================`);
}