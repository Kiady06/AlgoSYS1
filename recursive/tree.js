function search(tree, value) {
    for (let i = 0; i < tree.length; i++) {
        let element = tree[i];
        if (Array.isArray(element)) {
           if (search(element, value)) {
                return true; 
            }
        } else  if (element === value)
                return true
        }
    return false;
}

let tree = [
    "b",
    ["e", "c", ["d", "a"]],
    "f",
    ["g", ["h", "i"]],
    "j","k"
];

console.log(search(tree, "a")); // true
console.log(search(tree, "d")); // true
console.log(search(tree, "i")); // true
console.log(search(tree, "j")); // true
console.log(search(tree, "x")); // false
