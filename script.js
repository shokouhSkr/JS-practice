"use strict";

// "this" keyword in practice

// 1.
console.log(this); // window

// 2. regular function
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undefined
};
calcAge(1990);

// 3. arrow function
const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); // window
};
calcAgeArrow();

// 4.
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // {year: 1991, calcAge: ƒ}
    console.log(2037 - this.year); // 46
  },
};
jonas.calcAge(1980);

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge(); // 20
