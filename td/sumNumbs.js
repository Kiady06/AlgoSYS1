const sumNumbs = (number) => {
  if (Math.floor(number / 10) <=0) {
    return number;
  }

  return (number % 10) + sumNumbs(Math.floor(number / 10));
};

console.log(sumNumbs(1234));
console.log(sumNumbs(9));
console.log(sumNumbs(0));
