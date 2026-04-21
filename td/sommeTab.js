// const sumTab = (tab) => {

//     if (tab.length == 0) {return 0};
//      if (tab.length ==  1) {return tab[0];}

//      return tab[0] + sumTab(tab.slice(1));
// };

const sumTab = (tab, index = 0) => {

    if (index >= tab.length) {return 0};
     if (tab.length ==  1) {return tab[0];}

     return tab[index] + sumTab(tab, index+1);
};

console.log(sumTab([1, 2, 3, 4]));
console.log(sumTab([10, -5, 5]));
console.log(sumTab([]));