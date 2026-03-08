const prompt = require(`prompt-sync`)();

let input = prompt(`Valeur x : `);
let x = Number(input);
let result = 1;

if (x < 0) {
    console.log(`Resultat indefinis`);
} else if (x > 1) {
    for (let i = 2; i <= x; i++) {
        result *= i;
    }
    console.log(`${x}! = ${result}`);
}

// const readline = require(`readline`);

// const rl = readline.createInterface ({
//     input : process.stdin,
//     output : process.stdout
// });

// rl.question(`Tapez votre nombre : `, input => {
//     const nbr = Number(input);
//     if (isNaN(nbr)) {
//         console.log("Erreur : Ce n'est pas un nombre.");
//     } else {
//         if (nbr < 0) {
//             console.log(`Resultat indefinis`);
//         } else if (nbr > 1) {
//             let result = 1;
//             for (let i = 2; i <= nbr; i++) {
//                 result *= i;
//             }
//             console.log(`${nbr}! = ${result}`);
//         }
//     }

//     rl.close();
// });