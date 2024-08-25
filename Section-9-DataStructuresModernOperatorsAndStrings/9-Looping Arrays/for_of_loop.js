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