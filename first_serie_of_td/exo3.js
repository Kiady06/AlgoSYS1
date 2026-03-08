// const base = 2;
// const exp = 6;
// let resultat = 1;

// if (exp !== 0) {
//     for (let i = exp; i > 0; i--) {
//         resultat *= base;
//     }
// }

// console.log(`^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`);
// console.log(`Le resultat de ${base} ^ ${exp} est `);
// console.log(`${resultat}`);
// console.log(`^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`);

const { exit } = require("process");
const readline = require(`readline`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Donne la base `, (inp1) => {
  const base = Number(inp1);
  if (!isNaN(base)) {
    rl.question(`Donne l'exposant `, (inp2) => {
      const exp = Number(inp2);
      if (!isNaN(exp)) {
        let resultat = 1;
        if (exp !== 0) {
            for (let i = exp; i > 0; i--) {
                resultat *= base;
            }
        }
        console.log(`^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`);
        console.log(`Le resultat de ${base} ^ ${exp} est `);
        console.log(`${resultat}`);
        console.log(`^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`);
      } else {
        exit();
      }
    });
  } else {
    console.log(`Put a number bro`);
  }
});
