const convertToCelsius = function(farenheitDegrees) {
  let num = (5/9)*(farenheitDegrees-32)
  return Math.round(num*10)/10
};

const convertToFahrenheit = function(celsiusDegrees) {
  let num = (9/5)*(celsiusDegrees)+32
  return Math.round(num*10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
