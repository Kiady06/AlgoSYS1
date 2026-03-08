const promptSync = require('prompt-sync');
const prompt = promptSync();

let inputA = prompt("Entrez le dividende a : ");
let inputB = prompt("Entrez le diviseur b : ");

const b = Number(inputB);
const a = Number(inputA);
let q;
let r;

if (b === 0) {
    console.log('error');
} else {
    r = a;
    q = 0;
    while (r >= b) {
        r -= b;
        q++;
    }

    console.log(`====================================`);
    console.log(`Résultat de ${a} / ${b} :`);
    console.log(`Quotient (q) = ${q}`);
    console.log(`Reste (r) = ${r}`);
    console.log(`====================================`);
}