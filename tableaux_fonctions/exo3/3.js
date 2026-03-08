function sum (array) {
    let rslt = 0;
    for (let i = 0; i < array.length; i++) {
        rslt += array[i];
    }

    return rslt;
}

function mean (array) {
    return (sum(array) / array.length);
}

function square(array) {
    let rslt = [];

    for (let i = 0; i < array.length; i++) {
        rslt.push(array[i] * array[i]);        
    }

    return rslt;
}

function variance(array) {
    return (mean(square(array)) - (mean(array) * mean(array)));
}

function standardDeviation(array) {
    return Math.sqrt(variance(array));
}

console.log("La somme de [1,3,7,6,10] = " + sum([1,3,7,6,10]));
console.log("La somme d'un tableau vide [] = " + sum([]));
console.log("La moyenne de [12, 14,17] = " + mean([12, 14,17]));
console.log("La liste des carres de [3,8,5] = " + `[${square([3,8,5])}]`);
console.log("La variance de [1,9,7] = " + variance([1,9,7]));
console.log("L'ecart-type de [1,9,7] = " + standardDeviation([1,9,7]));