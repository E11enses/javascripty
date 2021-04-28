// if(something){
//   do something
// } else {
//   do something else
// }

const id = 100; // can be a string or a number

//equal to
if(id == 100){  //== means that we are comparing 2 things
console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// not equal to
if(id != 101){  //!= means that we are stating that const is NOT equal to a param
  console.log('CORRECT');
  } else {
    console.log('INCORRECT');
  }

// MUST COMPARE BOTH VALUE AND TYPE
if(id === 100){  //=== means that we are comparing the value AND the type
  console.log('CORRECT');
  } else {
    console.log('INCORRECT');
  }

  if(id !== 100){  //!== means that we are saying that the value AND the type are not equal to the given
    console.log('CORRECT');
    } else {
      console.log('INCORRECT');
    }

if(id){  // if there is no such variable as ID it is going to show a reference error
  console.log(`The ID is ${id}`);
} else {
  console.log ('NO ID');
}

// that's why we need to use the typeof
// to test if the variable is defined at all
if(typeof id !=='undefined'){
  console.log(`The ID is ${id}`);
} else {
  console.log('No ID');
}
  
// checking if somehting is greater or less than 
if(id > 200) {  // only higher than
  console.log('CORRECT');
} else {
  console.log ('INCORRECT');
}

if(id >= 200) { //higher or equal
  console.log('CORRECT');
} else {
  console.log ('INCORRECT');
}

if(id <= 200) { // less or equal
  console.log('CORRECT');
} else {
  console.log ('INCORRECT');
}

if(id < 200) { // only less
  console.log('CORRECT');
} else {
  console.log ('INCORRECT');
}

// if else
const color = 'red';

if(color ==='red'){ //we can give different ifs 
  console.log('Color is red'); // and we dont need for a const to fit all of them
} else if(color = 'blue'){
  console.log('Color is blue');
} else { // and we can insert many else statements
console.log('Color is not red or blue');
}

// logical operators
const name = 'Steve';
const age = 20;

if(age > 0 && age < 12){ //&& adds up the parameters (something AND something)
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// || OR 
if(age <16 || age > 65){ //|| SOMETHING OR SOMETHING
  console.log(`${name} cannot run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// ternary operator
console.log(id === 100 ? 'CORRECT' : 'INCORRECT'); // ? means if it is true, : means it is false

// without curly braces
if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');
  