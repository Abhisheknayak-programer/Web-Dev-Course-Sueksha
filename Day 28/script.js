// Switch Case
let rollNum = 13;

switch (rollNum) {
  case 0: {
    console.log("Adarsh Nayak");
    break;
  }
  case 1: {
    console.log("Abhishek Nayak");
    break;
  }
  case 2: {
    console.log("Abc");
    break;
  }
  case 3: {
    console.log("DEF");
    break;
  }
  default: {
    console.log("No Option Matched!");
    break;
  }
}

// LOOPS
// There are 3 types of Loops in JavaScript : While Loop, Do While Loop, For Loop
// While Loop
// let i = 1;
// while (i < 10) {
//   console.log("The Value of i : ", i);
//   i++; // or i = i + 1;
// }

// Do While Loop
// let i = 1;
// do {
//   console.log("The Value of i : ", i);
//   i++; // or i = i + 1;
// } while (i > 10);

// For Loop
for (let i = 1; i < 10; i++) {
  console.log("The Value of i : ", i);
}

// Functions
// There are 3 types of function declaration : Function Declaration, Function Expression, Arrow Functions

// Function Declaration
// task(45); // Calling of the function
// function task(x) {
//   let out = x * 2;
//   let z = out - 1;
//   let y = z / 4;
//   console.log(y);
// }

// // Function Expression
// const task = function (x) {
//   let out = x * 2;
//   let z = out - 1;
//   let y = z / 4;
//   console.log(y);
// };

// task(45); // Calling of the function

// Arrow Function
const task = (x) => {
  let out = x * 2;
  let z = out - 1;
  let y = z / 4;
  console.log(y);
};

task(45); // Calling of the function

//  Sum of 3 Numbers
const sumHandler = (a, b, c) => {
  console.log("The sum of 3 numbers is : ", a + b + c);
};

sumHandler(1, 2, 3);
