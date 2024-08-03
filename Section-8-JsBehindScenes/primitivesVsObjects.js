"usr strict";
// =================== Primitives vs Objects =============

// --------- Primitives ----------------
// stores in memory (call stack)
let age = 30;
let oldAge = age;
age = 31; // this will not effect oldAge

console.log(age); //31
console.log(oldAge); //30

// ---------- Objects -----------------
// stores in Reference types (in Heap)
const me = {
  name: "kushal",
  age: 30,
};
//copy object: friend have same name and different age
const friend = me;

friend.age = 27;

console.log("Friend", friend);
// Friend {name: 'kushal', age: 27}
console.log("Me", me);
// Me {name: 'kushal', age: 27}

// both have the same age, why?
// primitives stores in address of memory which cannot be change this happen in Call Stack
// where as objects are Reference type store in Heap but same memory adderess in Call Stack so these are change when assign new property

// another exampl:
// --------- Primitives ----------------
let lastName = "Sharma"; // address1
let oldLastName = lastName; // address1
lastName = "Jangid"; // address2 (change)

console.log(oldLastName);
console.log(lastName);

// ---------- Objects/Reference type -----------------

const anshu = {
  firstName: "Anshu",
  lastName: "Sharma",
  age: 22,
};

const marriedAnshu = anshu; // this is not a copy method
marriedAnshu.lastName = "Jangid";

console.log("Before marriage: ", anshu);
console.log("After marriage: ", marriedAnshu);
// Before marriage:  {firstName: 'Anshu', lastName: 'Jangid', age: 22}
// After marriage:  {firstName: 'Anshu', lastName: 'Jangid', age: 22}
// both are change( same lastName ) so how can we solve this

// solution:
// Copying Objects:

const anshu2 = {
  firstName: "Anshu",
  lastName: "Sharma",
  age: 22,
};

const anshuCopy = Object.assign({}, anshu2);
//  actually here is a problem it does a shallow copy not in deep clone
// so let's update and see
anshuCopy.lastName = "jangid";

console.log("Before marriage: ", anshu2);
console.log("After marriage: ", anshuCopy);
// Before marriage:  {firstName: 'Anshu', lastName: 'Sharma', age: 22}
// After marriage:  {firstName: 'Anshu', lastName: 'jangid', age: 22}
// now both are different lastname


//-----------  actually here is a problem it does a shallow copy not in deep
// let's see

const anshu3 = {
    firstName: "Anshu",
    lastName: "Sharma",
    age: 22,
    family: ['Kushal', 'Deepa']
  };

const anshuCopy3 = Object.assign({}, anshu3);
anshuCopy3.lastName = "jangid";

anshuCopy3.family.push ('Gori', 'Antim')
console.log("Before marriage: ", anshu3);
console.log("After marriage: ", anshuCopy3);

// both family array are same
// so this method is perfect for deep clone

// how do we do deep clone ?