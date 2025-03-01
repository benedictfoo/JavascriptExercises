const removeFromArray = function (arr, ...elements) {
  const arrResult = arr.filter((item) => {
    let elementsIndex = 0;
    while (elementsIndex < elements.length) {
      if (elements[elementsIndex] === item) {
        elementsIndex = 9999;
        return false;
      } else {
        elementsIndex++;
      }
    }
    return true;
  });
  console.log(arrResult);
  return arrResult;
};

// Do not edit below this line
module.exports = removeFromArray;
