const prompt = require(`prompt-sync`)();

let input = prompt(`Valeur borne sup : `);
const born_sup = Number(input);

let result = 0;
let affichage = ``;

console.log(`========================================================================================`);
console.log (`La somme de la suite (par iteration) : `);

for (let i = 1; i <= born_sup; i++) {
    result += i;
    affichage += i;

    if (i !== born_sup) {
        affichage += ' + ';
    }
}

console.log(`${affichage} = ${result}`);
console.log(`========================================================================================`);