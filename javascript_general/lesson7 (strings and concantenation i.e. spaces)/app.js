const firstName = 'Will';
const lastName = 'Johnson';
const age = 36;
const str ='hello there my name is Egor'
const tags = 'dev, iphone, designer'

let val;

val = firstName + lastName;

// Concatenation
val= firstName + ' ' + lastName;

// Append (adding something to a var)

val = 'Brad ';
val = 'Traversy'; // it is going to overwrite
val += 'Traversy' // it is going to append to brad

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// escaping

// val = 'That's awesome, I can't wait'; //apostrophes work as single quotes
val = "That's awesome, I can't wait"; //first you can use ""
val = 'That\'s awesome, I can\'t wait'; //second u can escape

// Length

val= firstName.length;

// concat
val=firstName.concat(' ', lastName); //concatination with another method

// change case
val=firstName.toUpperCase();
val=firstName.toLowerCase();

val = firstName[0]; //array takes the very first character of the word

//indexOf()
val = firstName.indexOf('l'); //looks for the place where the letter is


// charAt()
val=firstName.charAt('2'); // looks what character is on a certain place in the string

//get last character
val = firstName.charAt(firstName.length - 1); //gives the last character of the string 

//substring
val = firstName.substring(0,2); //gets a part of a string

//slice
val = firstName.slice(0,4); //same as substring but
val = firstName.slice(-3); //it can work with negative numbers 

//split
val = str.split(' '); //makes an array of words divided with a space
val = tags.split(',');

// replace
val = str.replace('Egor', 'Jack'); //replace a piece of string with another string

//includes
val = str.includes('foo'); //a boolean to test if you have a string in your variable




console.log(val);