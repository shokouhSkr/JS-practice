"use strict";

// Looping Arrays, continue and break
const jonas = ["jonas", "askari", 2037 - 1990, "teacher", true];

console.log("---only strings---");

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

// Looping backwards
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

// Loops in loop
for (let i = 1; i < 4; i++) {
  console.log(`---------Starting exercise ${i}---------`);

  for (let j = 1; j < 6; j++) {
    console.log(`Lifting weight repetition ${j} of exercise ${i}`);
  }
}

// White loop
let dice = Math.floor(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled ${dice}`);
  dice = Math.floor(Math.random() * 6) + 1;
}
