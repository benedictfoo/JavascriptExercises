const convertToCelsius = function (fahrenheit) {
  return +(((fahrenheit - 32) * 10) / 18).toFixed(1);
};

const convertToFahrenheit = function (celcius) {
  return +((celcius * 18) / 10 + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
