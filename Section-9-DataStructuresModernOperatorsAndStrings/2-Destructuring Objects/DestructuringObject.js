"use strict";

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
  // Method
  order: function (starterIndex, mainIndex) {
    // return [this.starterMenu.starterIndex, this.mainMenu.mainIndex];
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // method
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = "8:30",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
};

// 1 ////////////////////// start //////////////
//---------------- 1st order -----------
restaurant.orderDelivery({
  time: "22:30",
  address: "Ramnagar colony, 60 feet road",
  mainIndex: 2,
  starterIndex: 2,
});
// Order received! Salad and Bhature will be delivered to Ramnagar colony, 60 feet road at 22:30.

//---------------- 2nd order ----------
// Default value

restaurant.orderDelivery({
  address: "Ramnagar colony, 60 feet road",
});
// Order received! Garlic Bread and Pasta will be delivered to Ramnagar colony, 60 feet road at 8:30.

////////////////////////// start 2 ////////////////////////////////

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// o/p
// Anshu Da Dhabba
// fri: {open: 12, close: 22}
// sat: {open: 0, close: 24}
// thu: {open: 12, close: 22}
//  ['Indian', 'Pizzeria', 'Vegetarian', 'Organic']

//////////////////////////////////////////////////

//--------------- 3rd party data like this, to open what we want------
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// o/p
// Anshu Da Dhabba
// fri: {open: 12, close: 22}
// sat: {open: 0, close: 24}
// thu: {open: 12, close: 22}
//  ['Indian', 'Pizzeria', 'Vegetarian', 'Organic']

//--------------- Default values ------------------------
// const { menu, starterMenu: starters } = restaurant  // menu= undefined
const { menu = [], starterMenu: starters = [] } = restaurant; // set to default value
console.log(menu, starters);
// []  ['Smosa', 'Garlic Bread', 'Salad', 'Kachori']

//--------------- Mutating variables --------------------------
let a = 111;
let b = 999;
const obj = { a: 23, b: 67, c: 43 };
// {a, b} = obj    // SyntaxError: Unexpected token '='
//js expacts that it is a 'code block' not an 'object'
// so rap in (), like ({ a, b } = obj)
({ a, b } = obj); // 23 67

console.log(a, b);

//-------------- Nested objects----------------------

// 1
// const { fri } = openingHours;
// console.log(fri); // {open: 12, cose: 22}

// 2
// const { fri:{open, close,} } = openingHours;
// console.log(open, close)   // 12  22

// 3
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); // 12  22
