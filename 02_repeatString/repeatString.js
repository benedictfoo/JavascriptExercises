const repeatString = function (string, timesToRepeat) {
  let stringOutput = "";
  if (timesToRepeat < 0) {
    return "ERROR";
  } else {
    for (let repeatCount = 0; repeatCount < timesToRepeat; repeatCount++) {
      stringOutput = stringOutput.concat(string);
    }

    return stringOutput;
  }
};

// Do not edit below this line
module.exports = repeatString;
