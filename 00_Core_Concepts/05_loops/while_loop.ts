// While LOOP
// What is While loop?
// A while loop is a control structure that allows us to execute a block of code repeatedly as long
// as it meets a certain condition.

// Syntax of While Loop
// while (condition) {
//     // code to be executed
// }

// How While Loop Works?

// The while loop works as follows:
// 1. The condition is evaluated.
// 2. If the condition is true, the code inside the loop is executed.
// 3. After the code is executed, the condition is evaluated again.
// 4. If the condition is still true, the code is executed again.
// 5. This process continues until the condition is false.

// Example of While Loop:

// Let's say we want to print the numbers from 1 to 5.
// We can use a while loop to achieve this.

let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}
// Output: 0, 1, 2, 3, 4, 5
console.log("\n");

// example with break:
let j = 0;
while (j <= 7) {
  console.log(j);
  if (j == 5) {
    break;
  }
  j++;
}

console.log("\n");
