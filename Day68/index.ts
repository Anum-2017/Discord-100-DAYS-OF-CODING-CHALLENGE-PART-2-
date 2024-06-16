//Tuple
//A tuple is a data type in TypeScript that is similar to an array but has a fixed number of elements, and you can specify the types of each element at specific positions within the tuple.

// Defining a tuple type
let article: readonly [number, string, boolean] = [11, "Title One", true];

// Assigning a new tuple value to the `article` variable
article = [12, "Title Two", false];

// Trying to push a new element into a tuple (will result in an error)
// article.push(100);

console.log(article);

// Destructuring the tuple into individual variables
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);