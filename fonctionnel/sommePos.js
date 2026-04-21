const sumPos = (array)  => {
    let rslt = 0;

    array.forEach(element => {
        if (element >= 0) {rslt += element;}
    });

    return rslt
};

const sumPos2 = (array)  => {
    let rslt = 0;

    array.filter((x) => x > 0).forEach(element => {
        rslt += element;
    });

    return rslt
};

const countOdd = (array) => {
    const rslt = [];

    array.forEach(element => {
        if (element % 2 !== 0) {
            rslt.push(element);
        }
    });

    return rslt;
}

const countOdd2 = (array) => {
    return array.filter(element => element % 2 !== 0);
}

const multipleOf3 = (array) => {
    return array.filter((x) => x % 3 === 0);
}

const multipleOf32 = (array) => {
    const rslt = [];

    array.forEach(element => {
        if (element % 3 === 0) {
            rslt.push(element);
        }
    })

    return rslt;
}

console.log(sumPos([1, -1, 1, -1]));
console.log(countOdd2([0, 1, 2, 3, 4]));
console.log(multipleOf32([0, 3, 4, 6, 7]));