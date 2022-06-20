"use strict";

// the "this" keyword in functions
const jonas = {
  firstName: "jonas",
  lastName: "askari",
  friends: ["ali", "hasan", "hossein"],
  birthYear: 1991,

  calcAge: function () {
    console.log(this);
    return 2037 - this.birthYear;
  },
};

console.log(jonas.calcAge());
