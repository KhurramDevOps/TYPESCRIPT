let hello: string = "Hello World!";
console.log(hello);

// DAtA Types
let name1: string = "John";
let age: number = 30;
let isMarried: boolean = true;
let undefine: undefined = undefined;
let nullValue: null = null;

//  Print the values
console.log(name1);
console.log(age);
console.log(isMarried);
console.log(undefine);
console.log(nullValue);

/*
 difference b/w var , let and const
 var is function scope
 let and const is block scope
 */

var hy = "Hello";
var hy = "world!";
console.log(hy);

//  using let can warn us about the re-declaration
// let name2 = "John";
// let name2 = "Doe";

//  Updation of variable using let
let name3 = "ali";
name3 = "ali akbar"; //  no error cuz here we update the variable
console.log(name3);

//  using const
// const name4 = "saad";
// const name4 = " amir"; //  error cuz we cant re-declare the variable using let

// updation of const
const name5 = "bilal";
// name5 = "jade"; // error cuz we cant update Constant variable

// Output: world!
// the disadvantage of var is that we can make same var multiple times in same scope
//  and it will not throw any error
//  but var can override the previous value

//  CAMEL CASE
//  What is camel case?
//  Camel case is a naming convention in which the first letter of each word is capitalized, except
//  for the first word, which is in lowercase. For example, "helloWorld" is
//  a camel case variable name.

let myName = "KHurram";
let myAge = 30;
let imMarried = false; // boolean
let myAddress = "Lahore"; // string

console.log(myName);
console.log(myAge);
console.log(imMarried);
console.log(myAddress);

// Template literals
let firstName = "Khurram";
let lastName = "Shahzad";
let fullName = firstName + " " + lastName;

// Another way to console the full name using the template literals ``
let fullName2 = `My full name is ${firstName} ${lastName} `;

//  How to check the type of variable
let odd_number: number = 11;
console.log(typeof odd_number);

// Concatenation
console.log("Fan", "Boys");
console.log("hello" + "world");
console.log("v".concat("g"));
console.log("2" + "5");
console.log(2 + 5);
console.log(2 + "5");

//  Type Coercion
let n = 5;
let n1 = "10";
console.log(n + Number(n1)); // not giving error cuz we specify the type of n1
console.log(n + parseInt(n1)); // not giving error cuz we specify the type of n1

// Second Example of Type Coercion
let num: number = 15;
let bool: boolean = true;
let result = num + Number(bool); // Implicit type coercion
console.log(result); // NOW THINK WHAT WILL BE THE VALUE OF result

