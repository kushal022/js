"use strict";
// denoted by three dots (...)
// It allows you to expand elements of an iterable (like an array, string, or object(not built-in iterable)) into individual elements.
// use

//1. Function Arguments: You can use the spread operator to pass elements of an array as arguments to a function.
function sum(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6

//2. Array Literals: It helps in creating a new array by combining existing arrays or adding new elements.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

//3. Object Literals: You can use it to create a new object by merging properties of existing objects.
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // Output: { a: 1, b: 2, c: 3, d: 4 }

//4. Copying Arrays or Objects: It provides a simple way to copy arrays or objects.
const original = [1, 2, 3];
const copy = [...original];
console.log(copy); // Output: [1, 2, 3]

////////////////////////////////////////////////////////

const array = [7, 8, 9];
const badNewArray = [1, 2, array[0], array[1], array[2]];
console.log(badNewArray); // Output:  [1, 2, 7, 8, 9]

// same thing by spread opretor
const newArray = [1, 2, ...array];
console.log(newArray); // Output:  [1, 2, 7, 8, 9]
// expand element(newArray) into individual elements.
console.log(...newArray); // output: 1, 2, 7, 8, 9

// add new elements in exiting array
const restaurant = {
  name: "Anshu Da Dhabba",
  location: "Stand of Thumrela, 22 Street",
  categories: ["Indian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Smosa", "Garlic Bread", "Salad", "Kachori"],
  mainMenu: ["Pizza", "Pasta", "Bhature"],
  //objects
  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 12,
  //     close: 22,
  //   },
  //   sat: {
  //     open: 0, //open 24 hours
  //     close: 24,
  //   },
  // },
  // // Method
  // order: function (starterIndex, mainIndex) {
  //   // return [this.starterMenu.starterIndex, this.mainMenu.mainIndex];
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  // // method
  // orderDelivery: function ({
  //   starterIndex = 1,
  //   mainIndex = 1,
  //   time = "8:30",
  //   address,
  // }) {
  //   console.log(
  //     `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
  //   );
  // },
  // Order pasta method: using Spread Operator(...)
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3} enjoy it.`
    );
  },
};

const newMenu = [...restaurant.mainMenu, "Jalebi", "Gulab Jamun"];
console.log(newMenu);
// Output: ['Pizza', 'Pasta', 'Bhature', 'Jalebi', 'Gulab Jamun']

// It is bit simillar to Destructuring

// Copy array: shallow copy
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy); // o/p: ['Pizza', 'Pasta', 'Bhature']

// Join 2 or more Arrays:
const wholeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(wholeMenu);
// O/p: ['Pizza', 'Pasta', 'Bhature', 'Smosa', 'Garlic Bread', 'Salad', 'Kachori']

//-----------------------------------------
// Spread operator allows you to expand elements of an iterable (like an array, string, or object) into individual elements.
// means it is not only work with Arrays but also work with Objects and strings.
// itrables: arrays, strings, sets, maps but objects are not iterable
// means these are built-in iterables except objects
// objects iterable with loops

// Iterables: arrays, strings, maps, sets. Not objects

const str = "kushal";
const letters = [...str, " ", "J."];
console.log(letters); // o/p:  ['k', 'u', 's', 'h', 'a', 'l', ' ', 'J.']
console.log(...str); // o/p: k u s h a l

// Template literal: not gonna work that's because this is not a place
// that expects multipal values separated by a comma.
// The spread operator (...) cannot be used directly inside a template literal.
// console.log(`${...str} jangid`)  // SyntaxError: Unexpected token '...'

//Instead, you can spread the string into an array and then join it back into a string if needed.
console.log(`${[...str]} jangid`); // k,u,s,h,a,l jangid
console.log(`${[...str].join("")} jangid`); // kushal jangid

//let`s work with function
// restaurant order pasta: realworld example.

const ingredients = [
  //   prompt("Let's make pasta! Ingredients 1?"),
  //   prompt("Ingredients 2?"),
  //   prompt("Ingredients 3?"),
];

console.log(ingredients);

//old method: without spread operator
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// using Spread Operator:
restaurant.orderPasta(...ingredients);
// o/p: Here is your delicious pasta with Cheese, Paneer and Butter enjoy it.

//////////////////////////////////////////////////
// Objects:

// expand object:
const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: "Narendra Modi",
};

console.log(newRestaurant);

// copy objects:
////1. object.assign()
////2. Spread operator: (same as arrays)

const restaurantCopy = { ...restaurant };
//// let's change in name
restaurantCopy.name = "Gaurika's Daba";

console.log(restaurant.name); // Anshu Da Dhabba
console.log(restaurantCopy.name); // Gaurika's Daba
//// so the copy is good, coz no change in parent restaurant while changing in restaurantCopy.
