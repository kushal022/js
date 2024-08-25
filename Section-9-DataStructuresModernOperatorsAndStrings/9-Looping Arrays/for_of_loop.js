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

  const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]; // expand array by (...)
  console.log(menu)
  //for_of loop
  for (const item of menu) {
    console.log(item)
  }
        // output:
        // Smosa
        // Garlic Bread
        // Salad
        // Kachori
        // Pizza
        // Pasta
        // Bhature



// array.entries(): method
for (const item of menu.entries()) {    // array.entries(): method
    console.log(item)
}

// output: array--> [index, 'value']
// [0, 'Smosa']
// [1, 'Garlic Bread']
// [2, 'Salad']
// [3, 'Kachori']
// [4, 'Pizza']
// [5, 'Pasta']
// [6, 'Bhature']

console.log(menu.entries())  // array iterator
console.log(...menu.entries())  // now work
// same output: array--> [index, 'value']
// [0, 'Smosa']
// [1, 'Garlic Bread']
// [2, 'Salad']
// [3, 'Kachori']
// [4, 'Pizza']
// [5, 'Pasta']
// [6, 'Bhature']

console.log([...menu.entries()])
// same output: array--> [index, 'value']
// [0, 'Smosa']
// [1, 'Garlic Bread']
// [2, 'Salad']
// [3, 'Kachori']
// [4, 'Pizza']
// [5, 'Pasta']
// [6, 'Bhature']

// to print nice menu-----------------------------
for (const item of menu.entries()) {    // array.entries(): method
  console.log(`${item[0]+1} : ${item[1]}`)
}
// or use destructuring assignment
for (const [item, element] of menu.entries()) {    // array.entries(): method
  console.log(`${item +1} : ${element}`)
}

//output:
// 1 : Smosa
// 2 : Garlic Bread
// 3 : Salad
// 4 : Kachori
// 5 : Pizza
// 6 : Pasta
// 7 : Bhature

//------------------------------------------------------------------------
const arr=  ["Indian", "Pizzeria", "Vegetarian", "Organic"]

console.log(arr) // print array:['Indian', 'Pizzeria', 'Vegetarian', 'Organic']
console.log(...arr) //expand array:Indian Pizzeria Vegetarian Organic
console.log(arr.entries())  // Array Iterator {}
console.log(...arr.entries())
//[0, 'Indian']  [1, 'Pizzeria']  [2, 'Vegetarian']  [3, 'Organic']

for ( i in arr){
  console.log(arr[i])
}
  //output:
  // Indian
  // Pizzeria
  // Vegetarian
  // Organic

// for (i=0; i <= arr.length; i++) console.log(arr[i])  // repeating

for ( i of arr) console.log(i)
for ( i of arr.entries()) console.log(i)
  // [0, 'Indian']
  // [1, 'Pizzeria']
  // [2, 'Vegetarian']
  // [3, 'Organic']
for ( i of arr.entries()) console.log(i[0],i[1])
  // i[0]   i[1]
  // 0  'Indian'
  // 1  'Pizzeria'
  // 2  'Vegetarian'
  // 3  'Organic'
for ( i of arr.entries()) console.log(i[0]+1,i[1])
for ( [i, ele] of arr.entries()) console.log(i+1,ele)

  // 1 'Indian'
  // 2 'Pizzeria'
  // 3 'Vegetarian'
  // 4 'Organic'

// let [a,el] = arr.entries();
// console.log(a,el)