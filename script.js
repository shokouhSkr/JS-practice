"use strict";

const arr = [17, 21, 23];

const newArr = [];
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    newArr.push(`${arr[i]}°C in ${i + 1} days`);
  }

  return newArr;
};

const result = printForecast(arr);

// console.log(printForecast(arr)); [
//   "...12°C in 1 days",
//   "...5°C in 2 days",
//   "...-5°C in 3 days",
// ];

console.log(`... ${result.join(" ... ")} ...`);
