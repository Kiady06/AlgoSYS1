// const doubleTab = (numbs) => {
//     const result = [];

//     numbs.forEach(numb => {
//         result.push(numb*2);
//     });

//     return result;
// };

// console.log(doubleTab([1,2,3,4,5,6,7]));

const tab = [1,2,3,4,5,6,7];
const newtab = tab.map((x) => x*2);
console.log(newtab);