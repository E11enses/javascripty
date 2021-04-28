// for loop

for(let i = 0; i < 10; i++ ){ // always let inside the loop, i or x ar common for variables, i++ means i+1
  // console.log(i);
  if(i ===2){ // you can add ifs and elses in the loops
    console.log('2 is my favourite number'); // but 'number 2' will be there if we 
    continue; // dont say continue, in this case 'number 2' won't appear in the loop anymore
  }
  if(i===5){ //we can also add ifs to break the loop, and 'number 5' won't appear
    console.log('Stop the loop');
    break;
  }
  console.log('Number ' + i);
}

// while loop

let x = 0; // for while loops we first define a variable

while(x < 10){ // in while loops we add only 1 condition
  console.log('Number' + x);
  x++;

}

// do while loop (it is going to run once no matter what)

let n = 100;

do { // this condition will run no matter what, e.g. if we have n = 100 it will still run eventhough we have a while n<10
  console.log ('Number' + n);
  n++;
}

while (n<10);

// loop through array
const cars = ['ford', 'chevy', 'bmw', 'benz', 'bentley']

for (let i = 0; i < cars.length; i++){
  console.log (i); // with the i statement logging we get the numbers
  console.log(cars[i]); // with the const we get the names of items in array with the i index
}

// forEach method (parameter, index, array)
cars.forEach(function(car, index, array){ //forEach loop makes the same thing with the arrays but cleaner, but we have to define a new function inside the function and it is good manners to define it as a singular noun of the array name
  console.log(`${index} : ${car}`); // makes it look like 1: somehting / 2: something
  console.log(array); // shows the whole array
  console.log(car); // shows the cars
});

// map (it lets us get a certain value from an object into a new array e.g)
const users = [ // it is an array of users as objects 
  {id: 1, name: 'John'},
  {id: 2, name: 'Sarah'},
  {id: 3, name: 'Karen'}
];

const ids = users.map(function(user){ //same as in forEach we add a variable as a singular
  return user.id
});

console.log(ids);


// for in loops
const user = {
  firsName: 'John',  // key - value
  lastName: 'Smith', // key - value
  age: 30 // key - value
}

for(let f in user){ // variable in user 
  console.log(f); // variable in user responible for keys, so it will log firstName, lastName, age
  console.log(`${f} : ${user[f]}`); // like this we will have a key-and-value pair, because we get each f its value
}