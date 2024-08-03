"use strict";

// let ladder = {
//   step: 0,

//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep() {
//     console.log(this.step);
//   },
// };

// ladder.up();     // 1
// ladder.up();     //2
// ladder.down();   //1
// ladder.showStep();   // 1 show
// ladder.down();   // 0
// ladder.showStep();      // 0  show

// modify like this: face error:Cannot read properties of undefined (reading 'up')
// solution is: 'return this' in every function
// ladder.up().up().down().showStep().down().showStep(); // 1,0
// 1    2     1      show 1     0       show 0

//------- solution----------
let ladder = {
  step: 0,

  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};

// modify like this: face error:Cannot read properties of undefined (reading 'up')
// solution is: 'return this' in every function
ladder.up().up().down().showStep().down().showStep(); // 1,0
// 1    2     1      show 1     0       show 0
