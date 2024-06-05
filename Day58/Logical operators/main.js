//Logical operators
//There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).
// || (OR)
//result = a || b;
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

if (1 || 0) { // works just like if( true || false )
    alert( 'truthy!' );
  }
let hour = 9;
if (hour < 10 || hour > 18) {
  alert("The Office is closed.");
}

// We can pass more conditions:
let hour1 = 12;
let isWeekend = true;
if (hour1 < 10 || hour1 || 18 || isWeekend) {
  alert("The office is closed!"); // it is the weekend
}

//OR "||" finds the first truthy value
//result = value1 || value2 || value3;
alert( 1 || 0 ); // 1 (1 is truthy)
alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

//Getting the first truthy value from a list of variables or expressions.
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

//Short-circuit evaluation.
true || alert("not printed");
false || alert("printed");

//&& (AND)
result = a && b;
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

let hours = 12;
let minute = 30;
if (hours == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}

if (1 && 0) { // evaluated as true && false
    alert( "won't work, because the result is falsy" );
  }
//AND “&&” finds the first falsy value
  result = value1 && value2 && value3;

 // if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

alert( 1 && 2 && null && 3 ); // null 
alert( 1 && 2 && 3 ); // 3, the last one

//Don’t replace if with || or &&
let x = 1;
(x > 0) && alert( 'Greater than zero!' );
let x1 = 1;
if (x1 > 0) alert( 'Greater than zero!' );

//! (NOT)
result = !value;
alert(!true); // false
alert(!0); // true
alert(!"Abc"); // false
alert(!null); // true
alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false

//Tasks
//What's the result of OR?
alert( null || 2 || undefined );

//What's the result of OR'ed alerts?
alert( alert(1) || 2 || alert(3) );

//What is the result of AND?
alert(1 && null && 2);

//What is the result of AND'ed alerts?
alert( alert(1) && alert(2) );

//The result of OR AND OR
alert( null || 2 && 3 || 4 );

// Check the range between
if (age >= 14 && age <= 90) {
    alert("Task6");
  }

// Check the range outside
// the first varient
if (!(age >= 14 && age <= 90)) {
    alert("Task7a");
  }
// the second varinet
  if (age < 14 || age > 90) {
    alert("Task7b");
  }

//A question about "if"
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

//Check the login
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}





















