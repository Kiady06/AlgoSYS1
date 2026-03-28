function getBestGrade(grades) {
    let best = grades[0];

    for (let i = 1; i < grades.length; i++) {
        if (best < grades[i])
            best = grades[i];
    }

    return best;
}

function calculateSuccessRate(grades) {
    let counter = 0;

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 10)
            counter++;
    }

    return counter/grades.length;
}

function getGradeStatus(grades) {
    let tab = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 10)
            tab.push('Validation');
        else
            tab.push(`Rattrapage`);
    }
    return tab;
}
console.log(getGradeStatus([8, 12, 10]));