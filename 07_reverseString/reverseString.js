const reverseString = function(text) {
    let arrayText = text.split("");
    let reversedArray = arrayText.reverse();
    return reversedArray.join('');
};

console.log(reverseString('hello world'));
// Do not edit below this line
module.exports = reverseString;
