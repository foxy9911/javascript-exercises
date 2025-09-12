const removeFromArray = function(array, ...itemToRemove) {
    // let indexToRemove = array.indexOf(itemToRemove);
    // array.splice(indexToRemove, 1);
    // return array;

    const newArray = [];
    array.forEach(function (item) {
        if (!itemToRemove.includes(item)) {
            newArray.push(item);
        }
    })
    return newArray;
}

console.log(removeFromArray([2, 2, 2, 4],  2));
// Do not edit below this line
module.exports = removeFromArray;
