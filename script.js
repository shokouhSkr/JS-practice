"use strict";

// destructing object

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

const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);
// Classico Italiano {thu: {…}, fri: {…}, sat: {…}}fri: {open: 11, close: 23}sat: {open: 0, close: 24}thu: {open:12, close: 22}[[Prototype]]: Object (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

const { name: restaurantName, categories: tags } = restaurant;
console.log(restaurantName, tags); // Classico Italiano (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

console.log(restaurant);
// {name: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy', categories: Array(4), starterMenu: Array(4), mainMenu: Array(3), …}

/**********************************************************************/
// default values:

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// [] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

/**********************************************************************/
// mutating variables:

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);

console.log(a, b); // 23 7

/**********************************************************************/
// nested objects:

const { fri } = openingHours;
console.log(fri); // {open: 11, close: 23}

const {
  fri: { open, close },
} = openingHours;
console.log(open, close); // 11 23

const {
  fri: { close: c, open: o },
} = openingHours;
console.log(c, o); // 23 11

/**********************************************************************/
restaurant.orderDelivery({
  time: "23:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});
// Order received! Garlic Bread and Risotto will be delivered to Via del Sole, 21 at 23:30

restaurant.orderDelivery({
  mainIndex: 2,
  starterIndex: 2,
});
// Order received! Garlic Bread and Risotto will be delivered to undefined at 20:00
