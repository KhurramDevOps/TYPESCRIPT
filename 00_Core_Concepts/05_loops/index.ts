// LOOPS in Typescript
// Loops are used to execute a block of code repeatedly for a specified number of times.
// There are two types of loops in Typescript: for loop and while loop.

// For loop is used to execute a block of code for a specified number of times.
// It consists of a loop counter, a condition, and an increment/decrement statement.
// The loop counter is used to keep track of the number of iterations.
// The condition is used to determine whether the loop should continue or not.
// The increment/decrement statement is used to update the loop counter.
// The syntax of for loop is as follows:
// for (initialization; condition; increment/decrement) {
//     // code to be executed
// }

// Example:
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0, 1, 2, 3, 4

// second example with break
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
// Output: 0, 1, 2
// The break statement is used to exit the loop prematurely.

// Third example with continue:
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
// Output: 0, 1, 2, 4

// NESTED FOR LOOPS
// Nested for loops are used to execute a block of code for a specified number of times.
// The outer loop is used to execute the code for a specified number of times.
// The inner loop is used to execute the code for a specified number of times for each iteration of
// the outer loop.
// The syntax of nested for loops is as follows:
// for (initialization; condition; increment/decrement) {
//     for (initialization; condition; increment/decrement) {
//         // code to be executed
//     }
// }
// Example of a student numbers
let studentNumbers = 5;
for (let i = 0; i < studentNumbers; i++) {
  for (let j = 0; j < studentNumbers; j++) {
    console.log(`Student ${i + 1} has ${j + 1} books`);
  }
}

// Another example
for (let x = 0; x < 5; x++) {
  for (let y = 0; y < 5; y++) {
    console.log(x, y);
  }
}

// While loop is used to execute a block of code as long as a specified condition is true.
