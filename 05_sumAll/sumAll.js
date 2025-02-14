const sumAll = function(num1, num2) {
    let sum = 0;
    let lesserValue;
    let greaterValue;

    if (num1 < 0 || num2 < 0 || typeof num1 !== "number" || typeof num2 !== "number" 
        || !Number.isInteger(num1) || !Number.isInteger(num2)) 
    {
        return "ERROR"
    }

    if (num1 > num2) {
        greaterValue = num1;
        lesserValue = num2;
    } else {
        greaterValue = num2;
        lesserValue = num1;
    }

    for (let i = lesserValue; i <= greaterValue; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
