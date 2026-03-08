const prompt = require(`prompt-sync`)();

let input = prompt(`Valeur borne sup : `);
const born_sup = Number(input);
const result = born_sup * (born_sup + 1) / 2;
let affichage = ``;

console.log(`========================================================================================`);
console.log (`La somme de la suite (par formule): `);

for (let i = 1; i <= born_sup; i++) {
    affichage += i;

    if (i !== born_sup) {
        affichage += ` + `;
    }
}

console.log(`${affichage}  = ${result}`);
console.log(`========================================================================================`);

