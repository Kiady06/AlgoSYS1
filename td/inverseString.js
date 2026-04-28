const invString = (str) => {
    if (str.length <= 1) {return str;}

    return str[str.length-1] + invString(str.slice(0, -1));
};

console.log(invString("abc"));
console.log(invString("“Hello !”"));
console.log(invString("1234"));