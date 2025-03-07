const fibonacci = function (num) {
  let correctedInput = +num;
  if (!Number.isInteger(correctedInput) || correctedInput < 0) {
    return "OOPS";
  }
  if (correctedInput === 0) {
    return 0;
  } else if (correctedInput === 1 || correctedInput === 2) {
    return 1;
  } else {
    return fibonacci(correctedInput - 2) + fibonacci(correctedInput - 1);
  }
};

// Do not edit below this line
module.exports = fibonacci;
