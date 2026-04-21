const cumulatedLength = (strs) => {
    if (strs.length == 0) {return 0};
    if (strs.length == 1) {return strs[0].length};

    return strs[0].length + cumulatedLength(strs.slice(1));
}

console.log(cumulatedLength([]));
console.log(cumulatedLength(["abc"]));
console.log(cumulatedLength(["ab", "c", "defgh"]));