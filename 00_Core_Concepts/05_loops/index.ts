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

// While loop is used to execute a block of code as long as a specified condition is true.
