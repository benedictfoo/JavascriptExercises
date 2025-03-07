const palindromes = function (string) {
  const punctuationAndSpaces = /[\.\s,?!]/g;
  const filteredString = string.replace(punctuationAndSpaces, "").toLowerCase();
  let start = 0;
  let end = filteredString.length - 1;
  while (start < end) {
    if (filteredString[start] !== filteredString[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
