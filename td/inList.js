// const inList = (tab, ref) => {
//     if (tab.length === 0) {return false}

//     if (tab[0] === ref) {return true}

//     return inList(tab.slice(1), ref);
// };

const inList = (tab, ref, index = 0) => {
    if (index >= tab.length) {return false}

    if (tab[index] === ref) {return true}

    return inList(tab, ref, index+1);
};

console.log(inList([1, 2, 3, 4], -10));
console.log(inList(["pomme", "banane"], "pomme" ));
console.log(inList([], -10));