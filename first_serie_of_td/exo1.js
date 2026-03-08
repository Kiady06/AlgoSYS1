// const x = -2.5;
// let result;

// if (x < 0) {
//     result = -x;
// } else {
//     result = x;
// }

// console.log(`=======================================`);
// console.log(`La valeur absolue de ${x} est :`);
// console.log(`|${x}| = ${result}`);
// console.log(`=======================================`);

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question (`Vous voulez la valeur absolue de quel nombre ?`, (input) => {
    const x = Number(input);

    if (isNaN(x)) {
        console.log("Erreur : Ce n'est pas un nombre.");
    } else {
        const result = x < 0 ? -x : x; 
        
        console.log(`=======================================`);
        console.log(`La valeur absolue de ${x} est :`);
        console.log(`|${x}| = ${result}`);
        console.log(`=======================================`);
    }

    rl.close();
});