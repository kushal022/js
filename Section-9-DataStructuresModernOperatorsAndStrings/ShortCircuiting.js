// Short Circuiting ( && And || )
//------------ AND (&&) Operator:
///Rule: If the first value is false, the result is false without checking the second value.
console.log(false && true); // Output: false

//------------ OR (||) Operator:
////Rule: If the first value is true, the result is true without checking the second value.
console.log(true || false); // Output: true

//--------------- Why Use It?
//1. Set Default Values:
// let name = userName || "Guest";
// If userName is not provided, name will be "Guest"
//2. Conditional Execution:
//user && user.login();
// login() will only run if user exists

// Short-circuiting helps make your code cleaner and faster by skipping unnecessary checks.

//Ex: Function Execution:
let user = {
  name: "Alice",
  login: function () {
    console.log("User logged in");
  },
};
user && user.login();
// Output: User logged in

//Ex: Setting Default Values:
let userName = "";
let displayName = userName || "Guest";
console.log(displayName);
// Output: Guest

//Ex: Fallback values:
let primaryColor = null;
let secondaryColor = "blue";
let color = primaryColor || secondaryColor;
console.log(color);
// Output: blue
// ------------------------------------------------------- Jonas sir
console.log("--------- OR || Operator ----------------");

// OR ( || ) Operator:
//1. Use ANY data type, (bool, str, int, float etc) (not ony Booleans)
//2. Return ANY data type,
//3. Short-Circuiting
//return first truthy value will not look at second one, this is short-circuiting
console.log(3 || "Jay"); // 3 (return first truthy value will not look at second one, this is short-circuiting )
console.log("" || "Jay"); // Jay , first one is falsy value
console.log(true || 0); // true, (this is short-circuiting)
console.log(1 || 0); // 1, (this is short-circuiting)
console.log(0 || 1); // 1, (this is not short-circuiting)
console.log(null || 4); // 4 , null = falsy value (this is not short-circuiting)
console.log(undefined || null); // null , undefined = falsy value (this is not short-circuiting)
console.log(null || undefined); // undefined, null = falsy value
console.log(undefined || 0 || "" || "Jay" || 78 || null);
// undefined,0,''  = falsy value
//but jay is first truthy value, so it not evluate remaing operands, basically short-circuiting.

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
// ex: setting Default value:
//1. Using conditional operator: ternary operator(?)

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 10 , when restaurant.numGuests is not defined.
// let's defined restaurant.numGuests
restaurant.numGuests = 55;
const guests2 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests2); // 55 , when restaurant.numGuests is defined

//2. Using OR (||) operator:
const guests3 = restaurant.numGuests2 || 10;
console.log(guests3); //10, when restaurant.numGuests is not defined.

const guests4 = restaurant.numGuests || 10;
console.log(guests4); // 55

// now here is a problem, it cannot work with '0' bcoz it's falsy value
restaurant.numGuests3 = 0;
const guests5 = restaurant.numGuests3 || 10;
console.log(guests5); // 10, 0 is also actual value here, solution is in next topic

//----------------------------- AND && Operator ---------------------
console.log("--------- AND && Operator ----------------");

// work exact opposit OR
// when first value is falsy, then returns falsy value, willnot evaluate next one, this is short-circuiting by AND operator.
console.log(0 && "Jay"); // 0, 0 = falsy
console.log("Jay" && 0); // 0, first value is truthy, so evaluat next one , this is not short-circuiting.
