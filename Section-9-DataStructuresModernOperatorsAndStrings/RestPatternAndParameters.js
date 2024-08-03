"use strict";
// The rest pattern looks exctly like the Spread Operator (syntax).
// But it actually does the opposite of the Spread Operator
// Syntax => same syntax with three dots (...)
//// Spread operator => to build array, to pass multiple values into a function.and Unpack an array, (expand array into individual element).
//// Rest pattern => pack elements into an array.

//============ Part: 1. Destucturing ===================
//---- SPREAD, because on RIGHT side of '='
const arr = [1, 2, ...[3, 4]];
//// ... : Spread Operator
console.log(arr); // o/p: [1, 2, 3, 4]

//---- REST, because on LEFT side of '='
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
//// ...others : Rest pattern/Parameter
console.log(a, b, others); // o/p: 1 2 [3, 4, 5, 6]
// remaining element of array put them into a new array.
// so Rest pattern basically collects the elements that are unused in the destructuring assignment.

//-------------------example

const restaurant = {
  name: "Anshu Da Dhabba",
  location: "Stand of Thumrela, 22 Street",
  categories: ["Indian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Smosa", "Garlic Bread", "Salad", "Kachori"],
  mainMenu: ["Pizza", "Pasta", "Bhature"],
  //objects
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 12,
      close: 22,
    },
    sat: {
      open: 0, //open 24 hours
      close: 24,
    },
  },
  // Method 1: for orders
  // order: function (starterIndex, mainIndex) {
  //   // return [this.starterMenu.starterIndex, this.mainMenu.mainIndex];
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  // // method 2: for order delivery
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
  // Method 3: Order pasta : using Spread Operator(...)
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3} enjoy it.`
    );
  },

  // Method 4: Order Pizza: using Rest Operator(...)
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
    console.log(
      `Here is your delicious Pizza with ${mainIngredient}, ${otherIngredients} enjoy it.`
    );
  },
};

//Rest Pattern/Parameter: (...otherFoods)
//Spread Operator: ...restaurant.mainMenu and ...restaurant.startMenu
const [Pizza, , Bhature, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(Pizza, Bhature, otherFoods);
// o/p: Pizza Bhature ['Smosa', 'Garlic Bread', 'Salad', 'Kachori']

//Note:---- so it does not include any skipped elements
//Note:---- it always collects the rest/remening data/vlues

// const [Pizza, , Bhature, ...otherFoods, salad] = [] // Error: due to 'salad'
//Note:---- Rest element Must be the 'Last' element
//Note:---- there can only ever be 'ONE' Rest element in any destructuring.

//---------------With Objects ---------------------

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);
// o/p: {open: 0, close: 24} {thu: {…}, fri: {…}}

//============ Part: 2. Functions ===================

// Use To pass multiple arguments into a function all at the same time.

const add = function (...numbers) {
  console.log(numbers); // [2, 6], [2, 5, 3, 8], [4, 9, 6, 4, 3, 8, 2, 1]
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum); // 8, 18, 37
};

add(2, 6);
add(2, 5, 3, 8);
add(4, 9, 6, 4, 3, 8, 2, 1);
//use spread
const x = [77, 8, 6, 4];
console.log(...x); //unpack array:  77 8 6 4
add(...x); // o/p: 95

// example
restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
//mushrooms
//['onion', 'olives', 'spinach']
restaurant.orderPizza("mushrooms");
// mushrooms
//[]

//Note: so Rest Parameter serves to collect
