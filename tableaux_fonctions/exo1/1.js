function getMinMaxIntger (tab) {
    let rslt = [tab[0], tab[0]];

    for (let i = 1; i < tab.length; i++) {
        if (rslt[0] > tab[i]) {
            rslt[0] = tab[i];
        }
        if (rslt[1] < tab[i]) {
            rslt[1] = tab[i];
        }       
    }

    return rslt;
}

let tab1 = [1,7,6,9,14,0];
let tab2 = [0,0,0,0,0];
let tab3 = [2,102,1,4,8,5,0,999,1];

console.log(getMinMaxIntger(tab1));
console.log(getMinMaxIntger(tab2));
console.log(getMinMaxIntger(tab3));