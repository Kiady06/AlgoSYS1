// function simplifyChars(str) {
//   const map = {
//     'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e',
//     'à': 'a', 'â': 'a', 'î': 'i', 'ï': 'i',
//     'ô': 'o', 'û': 'u', 'ù': 'u', 'ç': 'c',
//     ',':'', ' ':'', "'":"", "-":"", "?":"",
//     "!":"", ";":"" 
//   };
  
//   return str.toLowerCase().replace(/[éèêëàâîïôûùç, '?!;-]/g, match => map[match]);
// }

function simplifyChars(str) {  
  return str
    .toLowerCase()
    // .replace(/ç/g, "c")
    // .replace(/œ/g, "oe")
    // .replace(/æ/g, "ae")
    .normalize("NFD")
    .replace(/[^a-z0-9]/g, ""); 
}

const estPalindrome= (str)  => {
    const newStr = simplifyChars(str);

    if (newStr.length === 1) {return true;}

    if ( newStr[0] === newStr[newStr.length - 1])
        return estPalindrome(newStr.slice(1, newStr.length - 1));

    return false;
};

console.log(estPalindrome("Tu l'as trop écrasé, César, ce Port-Salut "));
console.log(estPalindrome("Engage le jeu que je le gagne "));
console.log(estPalindrome(""));