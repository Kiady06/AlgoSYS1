function facto(x) {
    if (x === 1 || x === 0) 
        return 1;
    return x + facto(x - 1);
}

function multiplication(x, pow) {
  let rslt = 0;
  if (pow === 0)
    return 0;
  for (let i = 1; i <= pow ; i++) {
    rslt += x;
  }
  
  return rslt;
}

function multiplicationRecursive (x, pow) {
    if (pow === 0)
        return 0;
    if (pow === 1)
        return x;
    return x + multiplicationRecursive(x, (pow - 1));
}

function pow(base, exp) {
    if (exp === 0) {
        return 1;
    }
    if (exp === 1) {
        return base;
    }

    return base * pow(base, exp - 1);
}

function palindrome(mot) {
    if (mot.length === 1)
        return true;
    else if (mot.length === 2) {
        if (mot[0] === mot[1])
            return true;
        else 
            return false;
    } else if (mot.length === 3) {
         if(mot[0] === mot[2])
            return true;
        else 
            return false;
    } else {
        if ( mot[0] === mot[mot.length - 1])
            return palindrome(mot.slice(1, mot.length - 1));
        else 
            return false;
    }
}

// console.log(facto(3));
// console.log(multiplication(5, 3));
// console.log(multiplicationRecursive(5, 3));
console.log(pow(2,7));