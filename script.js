"use strict";

// the spread operator(...)

const arr = [7, 8, 9];
const badNewArr = [1, 2];

// better way
const newArr = [1, 2, ...arr];
console.log(newArr); // [1, 2, 7, 8, 9]
console.log(...newArr); // 1 2 7 8 9

/*******************************************************/
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

  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },

  // default values for times when there is nothing in that position
  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// adding new food to mainMenu:
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu); //  ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// const newObj = { ...restaurant.openingHours.fri, middle: 18 };
// console.log(newObj);

// copy array:
const copyMainMenu = [...restaurant.mainMenu];
console.log(copyMainMenu); // ['Pizza', 'Pasta', 'Risotto']

// join 2(or more) arrays:
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu); // ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']
