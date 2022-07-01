"use strict";

// scoping in practice

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      output = "NEW OUTPUT";
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      console.log(millenial);
    }

    console.log(output);
    console.log(str);
  }

  printAge();

  return age;
}

const firstName = "John"; // global scope
calcAge(1991);
console.log(age); // ReferenceError
printAge(); // dosn't know it
