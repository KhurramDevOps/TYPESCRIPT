// Operators
let num1 = 24;
let num2 = 12;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

// Asignment Operators
let num3 = 10;
console.log((num3 += 5)); // Added 5 to num3 and returned the result

num3 -= 3; // Subtract 3 from num3
console.log(num3);

// Relational Operators
let num4 = 50;
let num5 = 50;
console.log(num4 == 50); // True
console.log(num4 === num5); // Strict equality operator , checks both value and type
console.log(num4 != 50); // False
console.log(num4 > 40); // True
console.log(num4 < 60); // True
console.log(num4 >= 50); // True
console.log(num4 <= 50); // True

//EXAMPLE TEST
let num9 = 10;
let num10 = "10";
// @ts-ignore
console.log(num9 == num10);
// @ts-ignore                   // NOW THINKS WHATS THE ANSWER , And THEN check the answer
console.log(num9 === num10);

//  Logical Operators
let num6 = 10;
let num7 = 20;
// AND (&&) Operator
console.log(num6 > 5 && num7 > 10); // True
console.log(num6 > 5 && num7 < 10); // False
// OR (||) Operator
console.log(num6 > 5 || num7 > 10); // True
console.log(num6 > 5 || num7 < 10); // True
// NOT (!) Operator
console.log(!(num6 > 5)); // False
console.log(!(num7 < 5)); // True
