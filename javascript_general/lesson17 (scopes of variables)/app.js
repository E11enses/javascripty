// global scope variables
var a = 1; //var will change the value being global scoped to if scope for example
let b = 2;
const c = 3;

// function scope
function test(){
var a = 4;
let b = 5;
const c = 6;
console.log('Function Scope ', a,b,c)
};

test();

// block scope
if(true){
var a = 7;
let b = 8;
const c = 9;
console.log('Block scope ',a,b,c); // the var a will change the global scope
};

for(let a=0; a < 10; a++){ // let will not change the value of a global a 
  console.log(`Loop: ${a}`);
}

for(var a=0; a < 10; a++){ // but var will again change the global one
  console.log(`Loop: ${a}`);
}

console.log('Global Scope', a,b,c); 

