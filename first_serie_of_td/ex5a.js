const prompt = require(`prompt-sync`)();

let input = prompt(`Valeur dernier chiffre : `);
const dernierElement = Number(input);
const result = dernierElement * (dernierElement + 1) / 2;
let affichage = ``;

console.log(`========================================================================================`);
console.log (`La somme de la suite (par formule): `);

for (let i = 1; i <= dernierElement; i++) {
    affichage += i;

    if (i !== dernierElement) {
        affichage += ` + `;
    }
}

console.log(`${affichage}  = ${result}`);
console.log(`========================================================================================`);

