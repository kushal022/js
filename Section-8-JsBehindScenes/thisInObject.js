"use strict";
// 'this' in literal of object

function makeUser() {
  return {
    name: "kushal",
    // ref: this,       //TypeError: Cannot read properties of undefined (reading 'name')at Object.<anonymous>
    ref() {
      //   this.name;     // ref
      //   return this.name;     // undefined
      return this;          // kushal
    },
  };
}

let user = makeUser();

// console.log(user.ref.name);
console.log(user.ref().name);
