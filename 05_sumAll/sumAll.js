const sumAll = function (num1, num2) {
  if (
    num1 < 0 ||
    num2 < 0 ||
    !Number.isInteger(num1) ||
    !Number.isInteger(num2)
  ) {
    return "ERROR";
  } else {
    let numStart = Math.min(num1, num2);
    let numEnd = Math.max(num1, num2);
    let total = 0;
    while (numStart <= numEnd) {
      total += numStart;
      numStart++;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = sumAll;
