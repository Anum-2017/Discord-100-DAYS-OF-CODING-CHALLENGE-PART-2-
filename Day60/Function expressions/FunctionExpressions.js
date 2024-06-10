//Function expressions
//In JavaScript, a function is not a “magical language structure”, but a special kind of value.
//The syntax that we used before is called a Function Declaration:

function sayHi() {
  alert( "Hello" );
}
//There is another syntax for creating a function that is called a Function Expression.
//It allows us to create a new function in the middle of any expression.
//For example:

let sayHi = function() {
  alert( "Hello" );
};

//Here we can see a variable sayHi getting a value, the new function, created as function() { alert("Hello"); }.
//As the function creation happens in the context of the assignment expression (to the right side of =), this is a Function Expression.

//Function is a value
//Let’s reiterate: no matter how the function is created, a function is a value. Both examples above store a function in the sayHi variable.
//We can even print out that value using alert:

function sayHi() {
  alert( "Hello" );
}

alert( sayHi ); // shows the function code

//Surely, a function is a special value, in the sense that we can call it like sayHi().
//But it’s still a value. So we can work with it like with other kinds of values.
//We can copy a function to another variable:

function sayHi() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)

//We could also have used a Function Expression to declare sayHi, in the first line:

let sayHi = function() { // (1) create
    alert( "Hello" );
  };
  
  let fun = sayHi;
  // ...

//Callback functions

//Let’s look at more examples of passing functions as values and using function expressions.
//We’ll write a function ask(question, yes, no) with three parameters:
//question

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

//The arguments showOk and showCancel of ask are called callback functions or just callbacks.
//We can use Function Expressions to write an equivalent, shorter function:

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );

//Function Expression vs Function Declaration
//Let’s formulate the key differences between Function Declarations and Expressions.
//First, the syntax: how to differentiate between them in the code.
//Function Declaration: a function, declared as a separate statement, in the main code flow:

// Function Declaration
function sum(a, b) {
  return a + b;
}

//Function Expression: a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the “assignment expression” =:
// Function Expression
let sum = function(a, b) {
  return a + b;
};















