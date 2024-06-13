"use strict";
// UNION TYPES
let myVar;
myVar = "Hello"; // Valid assignment
console.log(myVar);
myVar = 42; // Valid assignment
console.log(myVar);
//LITERAL TYPES
let colors;
colors = "red";
colors = "green";
colors = "blue";
//Nullable Types
let username = "Glicher"; // The variable can hold a string or null
let ageEx = null; // The variable can hold a number or null
function greetUser(username) {
    if (username === null) {
        console.log("Hello, Guest!");
    }
    else {
        console.log(`Hello, ${username}!`);
    }
}
greetUser("Anum");
greetUser(null);
let myName = "Glitcher";
let myValue = 10;
const alice = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
};
const bob = {
    name: "Bob",
    age: 25,
};
console.log(alice);
console.log(bob);
const person = {
    name: "John Doe",
    age: 30,
    address: "123 Main St",
    phone: "123-456-7890",
};
