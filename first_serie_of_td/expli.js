// for (let i = 0; i <= 3; i++) {
//   console.log(`Valeur de i (boucle) = ${i}`);
// }

// console.log(`Valeur de i = ${i}`);

const readline = require(`readline`);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Put a number corresponding to a day ", (input) => {
  const day = Number(input);
  if (!isNaN(day)) {
    let dayName;

    switch (day) {
      case 0:
        dayName = "Sunday";
        break;
      case 1:
        dayName = "Monday";
        break;
      case 2:
        dayName = "Tuesday";
        break;
      case 3:
        dayName = "Wednesday";
        break;
      case 4:
        dayName = "Thursday";
        break;
      case 5:
        dayName = "Friday";
        break;
      case 6:
        dayName = "Saturday";
        break;
      default:
        dayName = "Unknown day";
    }

    console.log(dayName);
  } else {
    console.log(`Put a number bro`);
  }
  rl.close();
});
