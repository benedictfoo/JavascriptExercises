const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  if (arr.length === 0) {
    return 0;
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    return arr.reduce((a, b) => a + b, 0);
  }
};

const multiply = function (arr) {
  return arr.reduce((acc, curr) => acc * curr);
};

const power = function (num, pow) {
  let timesToMultiply = pow - 1;
  let result = num;
  while (timesToMultiply) {
    result *= num;
    timesToMultiply--;
  }
  return result;
};

const factorial = function (num) {
  if (num === 0) return 1;
  else {
    let toMultiply = num - 1;
    let result = num;
    while (toMultiply > 1) {
      result *= toMultiply;
      toMultiply--;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
