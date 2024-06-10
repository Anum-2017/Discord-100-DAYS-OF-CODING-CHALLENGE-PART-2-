//The "switch" statement

//A switch statement can replace multiple if checks.
//The syntax
//The switch has one or more case blocks and an optional default.

/* switch(x) {
    case 'value1':  // if (x === 'value1')
      ...
      [break]
  
    case 'value2':  // if (x === 'value2')
      ...
      [break]
  
    default:
      ...
      [break]
  } */

//An example
//An example of switch (the executed code is highlighted):
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}

//If there is no break then the execution continues with the next case without any checks.
//An example without break:

let b = 2 + 2;

switch (b) {
  case 3:
    alert( 'Too small' );
  case 4:
    alert( 'Exactly!' );
  case 5:
    alert( 'Too big' );
  default:
    alert( "I don't know such values" );
}

//In the example above we’ll see sequential execution of three alerts:
alert( 'Exactly!' );
alert( 'Too big' );
alert( "I don't know such values" );

//Any expression can be a switch/case argument
//Both switch and case allow arbitrary expressions.
//For example:

let i = "1";
let n = 0;

switch (+i) {
  case n + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}

//Grouping of “case”
//Several variants of case which share the same code can be grouped.
//For example, if we want the same code to run for case 3 and case 5:

let m = 3;

switch (m) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}

 // Type matters
    // Let’s emphasize that the equality check is always strict. The values must be of the same
    // type to match.
    let arg = prompt('Enter a value?');
       switch(arg) {
            case '0':
            case '1':
                alert('One or Zero');
                break;
            case '2':
                alert('Two');
                break;
            case 3:
                alert('Never executes.');
                break;
            default:
                alert('An unknown value');
        }

        // Tasks

        // Rewrite the "switch" into an "if"
        let browser = prompt('Enter a browser', '');

        if (browser === 'Edge') {
            alert("You've got the Edge!");
        } else if (browser === 'Chrome' ||
                   browser == 'Firefox' ||
                   browser == 'Safari' ||
                   browser == 'Opera') {
            alert('Okay we support these browsers too');
        } else {
            alert('We hope that this page looks ok!');
        }

        // Rewrite "if" into "switch
        let k = +prompt('k?', '');

        switch(k) {
            case 0: 
                alert(0);
                break;
            case 1:
                alert(1);
                break;
            case 2:
            case 3:
                alert('2,3');
                break;
            default:
                alert('Unknown value');
        }























