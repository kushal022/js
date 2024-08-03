"use strict";
var firstName = "jangid";

const user = {
  firstName: "kushal",
  year: 1997,

  calcAge: function () {
    // console.log(this);      // print whole user object
    console.log(this.firstName); // kushal
    console.log(2031 - this.year); // 34

    //1. solution: selt/ that = this
    const self = this;
    const ageReq = function () {
      // console.log(this.firstName);    //TypeError: Cannot read properties of undefined (reading 'firstName')
      // console.log(this.year >= 1981 && this.year <= 1999);
      console.log("regular  = " + self.firstName); // kushal
      console.log(self.year >= 1981 && self.year <= 1999); // true
    };
    ageReq();

    //2. solution: arrow function
    const ageReqq = () => {
      console.log("arrow = " + this.firstName); // kushal
      console.log(this.year >= 1981 && this.year <= 1999); // true
    };
    ageReqq();
  },

  arrow: () => {
    console.log(this.firstName); // undefined: bcoz 'this' is global(window) for arrow
    // now the output is 'jangid' which is global (window; var) vlue,that's why we don't use var bcoz it creats window properties.
    // so for solution : use arrow in function scope
  },
};

user.calcAge();
user.arrow();

//////////////////// argument keyword /////////////////////////
// Regular function:
// function expration
const addExpration = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpration(3, 7);
// add more arguments; function don't have name of arguments but its legal they store in array
// so argument keyword is exist in Regular function not  in Arrow function
addExpration(3, 5, 4, 3, 6, 8);

// function declaration
function addDeclaration(a, b) {
  console.log(arguments);
  return a + b;
}

addDeclaration(4, 6);
addDeclaration(4, 7, 8, 7, 3, 6);

// Arrow function:
var addarrow = (a, b) => {
  console.log(arguments); //ReferenceError: arguments is not defined at addarrow
  return a + b;
};

addarrow(7, 8);
