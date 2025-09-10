const repeatString = function(string, num) {

    let newString = '';
    for (let i = 1; i <= num; i++){
       newString = newString + string;
    }
    return newString;
};

console.log(repeatString('pula,', 10));

// Do not edit below this line
module.exports = repeatString;
