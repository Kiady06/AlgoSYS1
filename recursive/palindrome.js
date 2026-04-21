function palindrome(mot) {
    if (mot.length <= 1)
        return true;
    if ( mot[0] === mot[mot.length - 1])
        return palindrome(mot.slice(1, mot.length - 1));
    return false;
}

console.log(palindrome("eE"));