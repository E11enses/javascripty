// var let const

// var name = 'John Doe'; //variable called name is a string
// console.log (name);
// name = 'Steve Smith'; //reassigning variables without var/let/const
// console.log(name);

// //init var
// var greeting;
// console.log(greeting); //not assigned yet because it has no param
// greeting = "Hello"; //it is assigned as hello now and we can console.log it
// console.log(greeting);

// //letters, nubmers, _, $
// // variables cant start with a number
// // var 1name = 'Hiho' //error
// var $name = 'John'; //dollarsign is not good
// var _name = 'Johnny'; //_ is not good because it is used for other reasons 

// //multi word vars
// var firstName = 'Jj'; //camelCase
// var first_Name = 'Sara'; //underscore
// var FirstName = 'Appleseed'; //pascal case
// var firstname = 'Egorka'; //avoid using it

//LET 
// let name = 'John Doe'; //variable called name is a string
// console.log (name);
// name = 'Steve Smith'; //reassigning variables without var/let/const
// console.log(name);

// let can be left unidentified and will still work

//const 
const name = 'Hiho';
console.log(name);
// can't reassign
// name = 'Sara';
//we have to assign a value always
// const greeting;


const person = {
  name:"John",
  age: 30
}

// We can change the inner values inside const variable by addressing them, but we can't rename the variable: 

person.name = "Sara";
person.age = 32;

// console.log(person);

const numbers = [1,2,3,4,5,6];
numbers.push(10);

console.log(numbers);

// recommended to use const to use it not reassigned ever
// recommended to use let when we want to reassign it