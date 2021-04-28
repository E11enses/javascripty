const person = {  //curly braces for the object
  firstName: 'Steve', //comma inside
  lastName: 'Smith',
  age: 30, //numbers
  email: 'lasjdlosajd@mail.com', //strings
  hobbies: ['music', 'sports'], // arrays
  address: {
    city: 'Miami',
    state: 'FL',
  },
  getBirthYear: function(){ //function
    // return 1987; // returns the year
    return 2021 - this.age; //when we want to use a value inside the object values we must use .this something, otherwise the param won't be defined because the code will think that it must be some global const or val
  },
}

let val; 

val = person.firstName; // possible to target the specific value in the object with a .
val = person['firstName']; // or squared braces
val = person.age; // prints the number
val = person.hobbies; // prints the array full
val = person.hobbies[1]; //prints the second object in the array
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear(); // always the brackets for functions

console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 25},
  {name: 'Nancy', age: 35}
];

for(let i = 0; i < people.length; i++){   //loop function, see later lessons
  console.log(people[i].name);
}