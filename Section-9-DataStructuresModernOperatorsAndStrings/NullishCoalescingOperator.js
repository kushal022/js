//Topic: 9
// Nullish Coalescing Operator:
// Denote by '??'
// work simmilar to OR || operator, but it treats 0 and '' as truthy values.
// // The nullish coalescing operator (??) in JavaScript is a logical operator that
// // returns its right-hand side operand when its left-hand side operand is null or undefined.
// // Otherwise, it returns the left-hand side operand.
// // This operator (??) is particularly useful
// // for providing default values when dealing with potentially null or undefined variables.

// Syntax:  result = leftExpr ?? rightExpr;
// leftExpr = null or 0 or "" or undefined => return: leftExpr
// //The nullish coalescing operator (??) helps you choose a value when you have two options.
// //It picks the first option if it’s not null or undefined. If the first option is null or undefined,
// //it picks the second option.
//---------------------
// // Use ?? when you want to provide a default value only if the first value is null or undefined.
//-------------------------------------------------------------------------------
//Conclusion:
// Nullish: nullishing 'null' and 'undefined'  ( but NOT nullish '0' and '')
// it consider 0 and '' truthy values
// also this is for short-circuiting

//------------------------------------------------------------------------------
console.log(0 ?? 3); // 0
console.log(3 ?? 0); // 3
console.log(0 ?? 0); // 0
console.log(1 ?? 1); // 1

console.log("" ?? 5); // ''
console.log(6 ?? ""); // 6
console.log(null ?? ""); // ''

console.log(null ?? "jay"); // jay
console.log("jay" ?? null); // jay
console.log(undefined ?? null); // null
console.log(undefined ?? "jay"); // jay

// //Comparison with Logical OR (||)
// //The logical OR operator (||) can also be used to provide default values,
// //but it treats all falsy values (like 0, "", false, etc.) the same way as null or undefined.
// //This can lead to unintended behavior if you want to preserve falsy values other than null or undefined.

// Practical Example:
const restaurant = {
  name: "Anshu Da Dhabba",
  location: "Stand of Thumrela, 22 Street",
  //Arrays
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
  order: function (starterIndex, mainIndex) {
    // return [this.starterMenu.starterIndex, this.mainMenu.mainIndex];
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // Method 2: for order delivery
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

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // 10 (so this is what we donnot want.)
// for OR = 0 and '' is nullish value
// solution: use Nullish operator
const guests1 = restaurant.numGuests ?? 10;
console.log(guests1); // 0 ; (this is what we want.)

// also this is short-circuiting
