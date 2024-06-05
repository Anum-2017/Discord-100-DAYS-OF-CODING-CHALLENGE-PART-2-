//Nullish coalescing operator '??'
//result = (a !== null && a !== undefined) ? a : b;
let user;
alert(user ?? "Anonymous"); // Anonymous (user is undefined)
let user1 = "John";
alert(user1 ?? "Anonymous"); // John (user is not null/undefined)

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

//Comparison with ||
let firstName1 = null;
let lastName1 = null;
let nickName1 = "Supercoder";

// shows the first truthy value:
alert(firstName1 || lastName1 || nickName1 || "Anonymous"); // Supercoder

let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0

//Precedence
let height1 = null;
let width1 = null;
// important: use parentheses
let area = (height1 ?? 100) * (width1 ?? 50);
alert(area); // 5000

 // Without Parantheses
 let area1 = height1 ?? 100 * width1 ?? 50;
 // ...works this way (not what we want):
 let area11 = height1 ?? (100 * width1) ?? 50;

 //Using ?? with && or ||
 //let x = 1 && 2 ?? 3; // Syntax error
 let x = (1 && 2) ?? 3; // Works
 alert(x); // 2






