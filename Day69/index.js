"use strict";
//Enums
//Enums in TypeScript are a way to define a set of named constant values representing discrete options or categories. They provide a convenient means to work with descriptive values in a more readable and expressive way. In essence, enums allow you to create a new data type composed of predefined, related values.
var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
})(Days || (Days = {}));
const today = Days.Sunday;
console.log(`Today is ${Days[today]}`);
