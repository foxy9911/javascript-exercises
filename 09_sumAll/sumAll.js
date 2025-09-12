const sumAll = function(start, end) {
    const newArray=[];

     if (start < 0 || end < 0 || typeof start != typeof end){
        return "ERROR";
    }
    else if (start >= end) {
        while (start >= end){
            newArray.push(start);
            start--;
        }
        console.log(newArray);

    } else if (start <= end){
        while (start <= end) {
            newArray.push(start);
            start++;
        }
    }

    return newArray.reduce((sum, current) => sum + current);
};

console.log(sumAll(10,'4'));
// Do not edit below this line
module.exports = sumAll;
