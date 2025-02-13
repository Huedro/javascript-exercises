const removeFromArray = function(array, ...args) {
    const updatedArray = new Array();
    for (let item of array) {
        if (!args.includes(item)) {
            updatedArray.push(item);
        }
    }

    return updatedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
