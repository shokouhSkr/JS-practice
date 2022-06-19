"use strict";

// function calling other functions
const calAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearUntilRetirement = function (birthYear) {
  const age = calAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
};

console.log(yearUntilRetirement(1991, "jonas"));
console.log(yearUntilRetirement(1950, "jason"));
