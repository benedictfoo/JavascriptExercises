const findTheOldest = function (arr) {
  return arr.reduce((acc, curr) => {
    if (!curr.yearOfDeath || !acc.yearOfDeath) {
      if (acc.yearOfBirth > curr.yearOfBirth) {
        return curr;
      } else {
        return acc;
      }
    } else if (
      acc.yearOfDeath - acc.yearOfBirth <
      curr.yearOfDeath - curr.yearOfBirth
    ) {
      return curr;
    } else {
      return acc;
    }
  });
};
const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
