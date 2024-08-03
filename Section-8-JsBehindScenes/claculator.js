"use strict";

console.log(" function as Method");

let calculator = {
  first: "",
  second: "",
  read: function (a, b) {
    return (this.first = a), (this.second = b);
  },
  sum: function () {
    console.log(this.first + this.second);
  },
  mul: function () {
    console.log(this.first * this.second);
  },
};

calculator.read(2, 3);

console.log(calculator);
calculator.sum();
calculator.mul();

p = prompt("add value", 0);
