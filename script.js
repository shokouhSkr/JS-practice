"use strict";

// destructing arrays

const arr = [2, 3, 4];
const [a, b, c] = arr;
console.log(c, a, b); // 4, 2, 3

/**********************************************/
// Example:

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// const [first, second] = restaurant.categories;
// console.log(first, second); // Italian Pizzeria

const [first, , third] = restaurant.categories;
console.log(first, third); // Italian Vegetarian

/**********************************************/
// how to switch the place of "Italian" and "vegeterian":

let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian Vegetarian

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); // Vegetarian Italian

// recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter, mainCourse); // Garlic Bread Pizza
/**********************************************/
// destructive nested arrays:

const nested = [2, 3, [4, 5]];

// const [i, , j] = nested;
// console.log(i, j); // 2, [4, 5]

const [i, , [j, k]] = nested;
console.log(i, j, k); // 2, 4, 5
