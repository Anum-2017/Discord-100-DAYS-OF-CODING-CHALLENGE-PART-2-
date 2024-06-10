//Functions
//Function Declaration
//To create a function we can use a function declaration.

function showMessage() {
    alert( 'Hello everyone!' );
  }

  function name(parameter1, parameter2, ... parameterN) {
    // body
   }
//Our new function can be called by its name: showMessage().
//For instance:

function showMessage() {
  alert( 'Hello everyone!' );
}

showMessage();
showMessage();
//The call showMessage() executes the code of the function. Here we will see the message two times.

//Local Variable
//A variable declared inside a function is only visible inside that function.
//For example:

function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! The variable is local to the function

//Outer variables
//A function can access an outer variable as well, for example:

let userName1 = 'John';

function showMessage() {
  let message = 'Hello, ' + userName1;
  alert(message);
}

showMessage(); // Hello, John
//The function has full access to the outer variable. It can modify it as well.
//For instance:

let userName2 = 'John';

function showMessage() {
  userName2 = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName2;
  alert(message);
}

alert( userName2 ); // John before the function call

showMessage();

alert( userName2 ); // Bob, the value was modified by the function

//Global variables
//Variables declared outside of any function, such as the outer userName in the code above, are called global.
//Global variables are visible from any function (unless shadowed by locals).

//Parameters
//We can pass arbitrary data to functions using parameters.
//In the example below, the function has two parameters: from and text.

function showMessage(from, text) { // parameters: from, text
  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)

//Here’s one more example: we have a variable from and pass it to the function. Please note: the function changes from, but the change is not seen outside, because a function always gets a copy of the value:

function showMessage(from, text) {

  from = '*' + from + '*'; // make "from" look nicer

  alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann

//When a value is passed as a function parameter, it’s also called an argument.
//In other words, to put these terms straight:
//A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
//An argument is the value that is passed to the function when it is called (it’s a call time term).

//Default values
//If a function is called, but an argument is not provided, then the corresponding value becomes undefined.
//For instance, the aforementioned function showMessage(from, text) can be called with a single argument:
showMessage("Ann");

//We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =:

function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given

//The default value also jumps in if the parameter exists, but strictly equals undefined, like this:
showMessage("Ann", undefined); // Ann: no text given

function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}

//Default parameters in old JavaScript code
//Several years ago, JavaScript didn’t support the syntax for default parameters. So people used other ways to specify them.
//Nowadays, we can come across them in old scripts.

//For example, an explicit check for undefined:

function showMessage(from, text) {
  if (text === undefined) {
    text = 'no text given';
  }

  alert( from + ": " + text );
}

//Or using the || operator:

function showMessage(from, text) {
  // If the value of text is falsy, assign the default value
  // this assumes that text == "" is the same as no text at all
  text = text || 'no text given';
}

//Alternative default parameters
//Sometimes it makes sense to assign default values for parameters at a later stage after the function declaration.
//We can check if the parameter is passed during the function execution, by comparing it with undefined:

function showMessage(text) {
  // ...

  if (text === undefined) { // if the parameter is missing
    text = 'empty message';
  }

  alert(text);
}

showMessage(); // empty message

//…Or we could use the || operator:
function showMessage(text) {
  // if text is undefined or otherwise falsy, set it to 'empty'
  text = text || 'empty';
  
}

//Modern JavaScript engines support the nullish coalescing operator ??, it’s better when most falsy values, such as 0, should be considered “normal”:

function showCount(count) {
  // if count is undefined or null, show "unknown"
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown

//Returning a value
//A function can return a value back into the calling code as the result.
//The simplest example would be a function that sums two values:

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3


//There may be many occurrences of return in a single function. For instance:

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}

//It is possible to use return without a value. That causes the function to exit immediately.
//For example:

function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  alert( "Showing you the movie" ); // (*)
  // ...
}

//A function with an empty return or without it returns undefined
//If a function does not return a value, it is the same as if it returns undefined:

function doNothing() { /* empty */ }

alert( doNothing() === undefined ); // true
//An empty return is also the same as return undefined:

function doNothing() {
  return;
}

alert( doNothing() === undefined ); // true

//Naming a function
//Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.
//It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.
//For instance, functions that start with "show" usually show something.
//Function starting with…
/* "get…" – return a value,
"calc…" – calculate something,
"create…" – create something,
"check…" – check something and return a boolean, etc. */

//Functions == Comments
//A separate function is not only easier to test and debug – its very existence is a great comment!
//For instance, compare the two functions showPrimes(n) below. Each one outputs prime numbers up to n.
//The first variant uses a label:

function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // a prime
  }
}
//The second variant uses an additional function isPrime(n) to test for primality:

function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}


//Tasks
//Task 1: Is "else" required?
//The following function returns true if the parameter age is greater than 18.
//Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
//Will the function work differently if else is removed?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
//Is there any difference in the behavior of these two variants?
//solution:
//No difference!
//In both cases, return confirm('Did parents allow you?') executes exactly when the if condition is falsy.

//Rewrite the function using '?' or '||'
//The following function returns true if the parameter age is greater than 18.
//Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
//Rewrite it, to perform the same, but without if, in a single line.
//Make two variants of checkAge:
//Using a question mark operator ?
//Using OR ||

//solution:
//Using a question mark operator '?':

function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}
//Using OR || (the shortest variant):

function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}
//Note that the parentheses around age > 18 are not required here. They exist for better readability.

//Function min(a, b)
//Write a function min(a,b) which returns the least of two numbers a and b.
//For instance:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
//solution : A solution using if:

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
//A solution with a question mark operator '?':

function min(a, b) {
  return a < b ? a : b;
}
//P.S. In the case of an equality a == b it does not matter what to return.

//Function pow(x,n)
//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

/* pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 ** 1 = 1 */

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}




