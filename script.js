"use strict";

// Dot vs bracket notaition
const jonas = {
  firstName: "jonas",
  lastName: "askari",
  friends: ["ali", "hasan", "hossein"],
};

const information = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`;

console.log(information);
