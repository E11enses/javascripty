// create some arrays
const numbers = [43,56,33,23,44,36,5]; //we can create arrays like this
const numbers2 = new Array(1,3,4,5,6,7); // and like this
const fruit = ['Apple', 'Banana', 'Pear', 'Orange'];
const mixed = [22, 'Hi', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// get array length
val = numbers.length;

//check if something is an array
val = Array.isArray(numbers);

// get a single value from an array
val = numbers[3];
val = numbers[0]; // the first value from the array

//insert into array
numbers[2] = 100; //deletes the initial number

//find index of a value 
val = numbers.indexOf(43);


// MUTATING ARRAYS
numbers.push(250); // add a value to the end of the array
numbers.unshift(10); // add a value to the start of the array
numbers.pop(); // delete a value from the end
numbers.shift(); // delete a value from the beginning

// splice values
numbers.splice(1, 3); //delete values from ... to ...

// reverse
numbers.reverse();

// Concatinating arrays

val = numbers.concat(numbers2) // add array2 to the end of array1

// Sort
val = fruit.sort(); // sorts strings alphabetically
val = numbers.sort(); // sorts numbers by the first number

// use the "compare function"
val = numbers.sort(function(x,y){  //sorts numbers from the smallest to the biggest
  return x-y;
});

// reverse sort
val = numbers.sort(function(x,y){  //sorts the numbers from the biggest to the smallest
  return y-x;
});

// find 
function under50 (num){ //if a certain number is lower than 50 than it is going to show it (the first number lower than 50)
  return num <50;
}

val = numbers.find(under50);



console.log(numbers);
console.log(val);



// console.log(mixed);