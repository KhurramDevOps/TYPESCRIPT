"use strict";
// SWITCH CASES
let myage = 70;
switch (true) {
    case myage <= 0:
        console.log("Age cant be negative");
        break;
    case myage >= 1 && myage <= 12:
        console.log("You are a child");
        break;
    case myage >= 13 && myage <= 19:
        console.log("You are a teenager");
        break;
    default: // default is like else
        console.log("You are an adult");
        break;
}
// SWITCH CASES in if else
if (myage <= 0) {
    console.log("Age cant be negative");
}
else if (myage >= 1 && myage <= 12) {
    console.log("You are a child");
}
else if (myage >= 13 && myage <= 60) {
    switch (true) {
        case myage >= 13 && myage <= 19:
            console.log("You are a teenager");
            break;
        case myage >= 20 && myage <= 40:
            console.log("You are an adult");
            break;
        case myage >= 41 && myage <= 60:
            console.log("You are senior citizen");
            break;
        default:
            console.log("Invalid age");
    }
}
else {
    console.log("You are an adult");
}
//  if else in switch cases
switch (true) {
    case myage <= 0:
        console.log("Age cant be negative");
        break;
    case myage >= 1 && myage <= 12:
        console.log("You are a child");
        break;
    case myage >= 13 && myage <= 70:
        if (myage >= 13 && myage <= 19) {
            console.log("You are a teenager");
        }
        else if (myage >= 20 && myage <= 40) {
            console.log("You are an adult");
        }
        else if (myage >= 41 && myage <= 70) {
            console.log("You are senior citizen");
        }
}
