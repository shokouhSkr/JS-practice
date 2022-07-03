"use strict";

// primitives vs objects

// primitive:
let age = 30;
let oldAge = age;
age = 31;

console.log(age); // 31
console.log(oldAge); // 30

/**********************************************/
// object:
const me = {
  name: "jonas",
  age: 30,
};

const friend = me;
console.log(friend); // {name: 'jonas', age: 30}

friend.age = 27;
console.log(`friend: ${friend.age}, me: ${me.age}`); // friend: 27, me: 27

/**********************************************/
// coping object:

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Bob", "John"],
};

const copyJessica = Object.assign({}, jessica);
console.log(jessica, copyJessica);

copyJessica.family.push("Alex");
copyJessica.age = 13;

console.log(jessica, copyJessica);
