// data types: primitive and reference
//primitive - stored directly in the location the variable accesses
//reference - accessed by reference or a pointer to a location in memory 

// PRIMITIVE
// data types: strings (characters/numbers/symbols/letters), 
const name = 'John Doe';
console.log (typeof name);
// data types: numbers
const age = 45; // if we add quotes it will become a string
console.log(typeof age);

// data types: boolean (true/false)
const hasKids = true;
console.log(typeof hasKids);

// data types: null
const car = null;
console.log (typeof car);

// data types: undefined (no value inside a variable, all variables are undefined by default)
let test;
console.log(typeof test);


// data types: symbols (es6+)
const sym = Symbol();
console.log(typeof sym);


// reference types: 
// arrays
const hobbies = ['movies', 'music'];
console.log (typeof hobbies);

// object literals ({a:.. b:..})
const address = {
  city: 'Moscow',
  country: 'Russia'
}
console.log (typeof address);

// dates
const today = new Date();
console.log(today);
console.log(typeof today);


// functions
// anything else

// all the types are associated to the values but not the variables themselves
// the same variable can hold several types of data
// so we dont have to specify types of data 
// but we can make js static and not dynamical with the help of Typescript or flow.js


