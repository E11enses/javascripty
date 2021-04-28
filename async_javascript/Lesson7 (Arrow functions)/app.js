// const sayHello = function () {
//   console.log ('Hello');
// }

// const sayHello = () => {
//   console.log ('Hello');
// }

// one line function does not need braces
// const sayHello = () => console.log('Hello');

// one line returns
// const sayHello = () => 'Hello'

// return object
// const sayHello = () => ({msg: 'Hello'}); // it is looking for a function body, so we need () around the function 

// single parameter doesnt need parentheses
// const sayHello = name => console.log(`Hello ${name}`);

// we need parenthereses with multiple param objects
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName}, ${lastName}`);

// sayHello('Brad', 'Traversy');

const users = ['Nathan', 'John', 'Will'];

// const nameLengths = users.map(function(name) {
//   return name.length;
// });

// shorter way
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// shortest way
const nameLengths = users.map(name => name.length);

console.log (nameLengths);
