// let variable1 = 'Premiere valeur';
// let variable2 = 2026;

// console.log(`----------------------------------`);
// console.log(`Valeur avant swap :`);
// console.log(`variable1 = ${variable1}`);
// console.log(`variable2 = ${variable2}`);

// const temp = variable1;
// variable1 = variable2;
// variable2 = temp;

// console.log(`\n`);
// console.log(`Valeur apres swap :`);
// console.log(`variable1 = ${variable1}`);
// console.log(`variable2 = ${variable2}`);
// console.log(`----------------------------------`);

const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question (`Premiere var : `, (inp1) => {

    rl.question (`Deuxieme var : `, (inp2) => {

        console.log(`----------------------------------`);
        console.log(`Valeur avant swap :`);
        console.log(`variable1 = ${inp1}`);
        console.log(`variable2 = ${inp2}`);

        const temp = inp1;
        inp1 = inp2;
        inp2 = temp;
        console.log(`\n`);
        console.log(`Valeur apres swap :`);
        console.log(`variable1 = ${inp1}`);
        console.log(`variable2 = ${inp2}`);
        console.log(`----------------------------------`);

        rl.close();
    });
});