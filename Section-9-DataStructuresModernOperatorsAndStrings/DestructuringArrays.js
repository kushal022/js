// Destructuring Arrays
"use strict";

// Assignig variables to an array
const arr = [2, 3, 4];
// 1st way
const a = arr[0];
const b = arr[1];
const c = arr[2];

// 2nd way: Better actually (Destructuring)
const [x, y, z] = arr;

console.log(x, y, z); // 2  3  4
console.log(a, b, c); // 2  3  4
console.log(arr); //  [2, 3, 4]

//---------------------------------------------------

const restaurant = {
  name: "Anshu Da Dhabba",
  location: "Stand of Thumrela, 22 Street",
  categories: ["Indian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Smosa", "Garlic Bread", "Salad", "Kachori"],
  mainMenu: ["Pizza", "Pasta", "Bhature"],

  // Method
  order: function (starterIndex, mainIndex) {
    // return [this.starterMenu.starterIndex, this.mainMenu.mainIndex];
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

let [first, second] = restaurant.categories;
console.log(first, second); //Indian Pizzeria

//  How to Swip
// 1.
// const temp = first;
// first = second;
// second = temp;

// console.log(first, second); // Pizzeria Indian

//2.

[first, second] = [second, first];
console.log(first, second); // Pizzeria Indian

//------------ Receive 2 return values from a function

console.log(restaurant.order(0, 1)); // ['Smosa', 'Pasta']
//destructure
const [starter, main] = restaurant.order(0, 1);
console.log(starter, main); // Smosa Pasta

//--------- Nasted array Destructuring -------
const nested = [2, 4, 5, [9, 6]];
const [i, , , j] = nested; // skiped 4, 5
console.log(i, j); // 2 [9,6]

let [l, , , [m, n]] = nested; // skiped 4, 5
console.log(l, m, n); // 2 9 6

// default values

// let [p, q, r] = [8, 9];
// console.log(p, q, r); // 8 9 undefined

let [p = 0, q = 0, r = 0] = [8, 9];
console.log(p, q, r); // 8 9 0
