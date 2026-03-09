const prompt = require(`prompt-sync`)();

let input = prompt(`Valeur borne sup : `);
const dernierElement = Number(input);
let result = 0;

let affichage = ``;

console.log(`========================================================================================`);
console.log (`La somme de la suite (par iteration) : `);

for (let i = 1; i <= dernierElement; i++) {
    result += i;
    affichage += i;

    if (i !== dernierElement) {
        affichage += ' + ';
    }
}

console.log(`${affichage} = ${result}`);
console.log(`========================================================================================`);