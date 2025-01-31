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
console.log("\n"); // New line for better readability

// second example with break
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
console.log("\n"); // New line for better readability

// Third example with continue:
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
console.log("\n"); // New line for better readability

// NESTED FOR LOOPS
// Nested for loops are used to execute a block of code multiple times.

let studentNumbers = 5;
for (let i = 0; i < studentNumbers; i++) {
  for (let j = 0; j < studentNumbers; j++) {
    console.log(`Student ${i + 1} has ${j + 1} books`);
  }
  console.log("\n"); // New line to separate each student
}

// Another example
for (let x = 0; x < 5; x++) {
  for (let y = 0; y < 5; y++) {
    console.log(x, y);
  }
  console.log("\n"); // New line to separate each x iteration
}
