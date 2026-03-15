// function getIntegersBetween(borneInf, borneSup) {
//     let rslt = [];

//     if (borneInf === borneSup)
//         return null;
//     for (let i = (borneInf + 1); i < borneSup; i++) {
//         rslt.push(i);
//     }

//     return rslt;
// }

// console.log(getIntegersBetween(4, 10));
// console.log(getIntegersBetween(5, 5));
// console.log(getIntegersBetween(100, 153));

const getIntegersBetween = (borneInf, borneSup) => {
    let rslt = [];

    if (borneInf === borneSup)
        return null;
    for (let i = (borneInf + 1); i < borneSup; i++) {
        rslt.push(i);
    }

    return rslt;
}

console.log(getIntegersBetween(4, 10));
console.log(getIntegersBetween(5, 5));
console.log(getIntegersBetween(100, 153));