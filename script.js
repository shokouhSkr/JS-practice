"use strict";

// Functions in object
const jonas = {
  firstName: "jonas",
  lastName: "askari",
  friends: ["ali", "hasan", "hossein"],

  calcAge: (birthYear) => {
    return 2030 - birthYear;
  },
};

console.log(jonas.calcAge(1993));
console.log(jonas["calcAge"](1990));
