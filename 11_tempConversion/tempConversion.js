const convertToCelsius = function(fahrenheit) {
    // (x - 32) * 5/9

    const conversion = (fahrenheit - 32) * 5/9;
    return Math.round(conversion * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
    // (X * 9/5 + 32) F

    const conversion = celsius * 9/5 + 32;
    return Math.round(conversion * 10) / 10;

};

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
