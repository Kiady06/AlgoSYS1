function fibonnaci(n) {
  if (n == 0) return 0;
  else if (n == 1) return 1;
  return fibonnaci(n - 1) + fibonnaci(n - 2);
}

function fibonnaciOpti(n, cache) {
  cache = cache || { 1: 1, 2: 2 };

  if (cache[n]) return cache[n];

  return (cache[n] = fibonnaciOpti(n - 1, cache) + fibonnaciOpti(n - 2, cache));
}

function fibonnaciIteration(n) {
  let rslt = 0;

  if (n == 1 || n == 2) {
    return 1;
  } else {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      rslt = a + b;
      a = b;
      b = rslt;
    }
  }

  return rslt;
}

console.log(`Optimise : ` + fibonnaciOpti(45));
// console.log(`Iteration : ` + fibonnaciIteration(45));
// console.log(`Non optimise : ` + fibonnaci(45));

// La recursive naive est innefficace car les memes calcules sont refaits
