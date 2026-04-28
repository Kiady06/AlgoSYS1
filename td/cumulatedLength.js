const cumulatedLength = (strs) => {
    if (strs.length == 0) {return 0};

    return strs[0].length + cumulatedLength(strs.slice(1));
}

// const cumulatedLength = (strs, index = 0) => {
//     if (index >= strs.length) {
//         return 0;
//     }

//     return strs[index].length + cumulatedLength(strs, index + 1);
// }

console.log(cumulatedLength([]));
console.log(cumulatedLength(["abc"]));
console.log(cumulatedLength(["ab", "c", "defgh"]));