function getIntegersBetween(borne_inf, borne_sup) {
    let rslt = [];

    if (borne_inf === borne_sup)
        return null;
    for (let i = (borne_inf + 1); i < borne_sup; i++) {
        rslt.push(i);
    }

    return rslt;
}

console.log(getIntegersBetween(4, 10));
console.log(getIntegersBetween(5, 5));
console.log(getIntegersBetween(100, 153));