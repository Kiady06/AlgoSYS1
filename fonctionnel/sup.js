// const doublePos = (array) => {
//     return array.filter(element => element > 0).map(element => element * 2);
// }

const isThere = (array, str)  => {
    return array.filter(element => element.includes(str));
};

// console.log(doublePos([1, 0, -2, 3, 1.1]));

const dico = ["Hope", "Cobaine", "Hope Sandovale", "Hoop"];

console.log(isThere(dico, "Hop"));