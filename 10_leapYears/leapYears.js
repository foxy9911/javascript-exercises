/* Se divid cu 4
 Se divid cu 100 doar daca se divid si cu 400 */
const leapYears = function(year) {

    if (year % 4 === 0){
        if (year % 100 === 0 && year % 400 === 0) {
            return true;
        } else {
            return false;
        }
    }
};

//Varianta mai scurta
//return year % 100 === 0 && year % 400 === 0;


console.log(leapYears(2000))
// Do not edit below this line
module.exports = leapYears;
