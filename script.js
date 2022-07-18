"use strict";

// Challenge with strings

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

const button = document.querySelector("button");

button.addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  // console.log(rows);

  for (const [i, word] of rows.entries()) {
    // console.log(i, word);

    const splited = word.split("_");
    const finalWord =
      splited[0].toLowerCase() + splited[1][0].toUpperCase() + splited[1].slice(1).toLowerCase();

    const result = finalWord.trim().padEnd(20, " ");
    console.log(`${result}${"✅".repeat(i + 1)}`);
  }
});
