"use strict";

// the "this" keyword in functions
const jonas = {
  firstName: "jonas",
  lastName: "askari",
  friends: ["ali", "hasan", "hossein"],
  birthYear: 1973,
  job: "programmer",
  hasDriversLicense: false,

  calcAge: function () {
    console.log(this);
    return 2037 - this.birthYear;
  },
};

// console.log(jonas.calcAge());

// challange:
// "jonas is a 46-year old teacher, and he has a driver's license"

console.log(
  `${jonas.firstName} is a ${jonas.calcAge()}-year old ${jonas.job}, and he has ${
    jonas.hasDriversLicense ? "a" : "no"
  } driver's license`
);
