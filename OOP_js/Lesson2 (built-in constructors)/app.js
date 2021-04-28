// String

const name1 = 'Jeff';
const name2 = new String('Jeff'); // it is not a string!

name2.foo = 'bar'; //foo is like a placeholder for a function parameter?
console.log(typeof name2);

if(name2==='Jeff'){ // if we do triple equations it will run as no because it isnt a string, but if == then yes, ignoring the object/string/int shit
  console.log('YES');
} else {
  console.log('NO');
}

// number
const num1 = 5;
const num2 = new Number(5);

console.log(typeof num2);

// boolean
const bool1 = true;
const bool2 = new Boolean(true);

// functions
const getSum1 = function(x,y){
  return x+y;
}

const getSum2 = new Function('x', 'y', 'return 1 + 1');
console.log(getSum2(1,1));

//object 
const john1 = {name: "John"};
const john2 = new Object ({name: "John"});
console.log(john2);

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4); 

console.log(arr2);

// Regular expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re2);