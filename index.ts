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

// difference b/w var , let and const
// var is function scope
// let and const is block scope

var hy = "Hello";
var hy = "world!";
console.log(hy);
// Output: world!
// the disadvantage of var is that we can make same var multiple times in same scope
//  and it will not throw any error
//  but var can override the previous value
