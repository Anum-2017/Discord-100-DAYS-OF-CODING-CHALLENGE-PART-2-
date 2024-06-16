//Enums
//Enums in TypeScript are a way to define a set of named constant values representing discrete options or categories. They provide a convenient means to work with descriptive values in a more readable and expressive way. In essence, enums allow you to create a new data type composed of predefined, related values.

enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
  }
  
  const today: Days = Days.Sunday;
  
  console.log(`Today is ${Days[today]}`);

