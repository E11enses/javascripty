// you may need to change type of object if for example you are taking information from a form which is a string by default and then you 
// may want to calculate it you will turn it into a number and apply calculations later

let val; // we dont use const because we dont need to define it straight away, const will show an error

//  number to string
val = String(5); //number converts into a string
val = String(4+4) // we overwrite the first 5 and the new string is 3 characters long

// boolean to a string
val=String(true);

// Date to a string
val= String(new Date());

// Array to string
val = String([1,2,3,4,5]);

// toString method
val = (5).toString(); // does the same thing with a different syntax
val = (true).toString();

//String to number
val = Number('5'); // string 5 becomes a number and is applied to 2 decimals
val = Number(true); // true as a number is 1 
val = Number(false); // false as a number is 0
val = Number(null); // null is 0 as a number too
val = Number ('Hello'); // NaN means not a number meaning cant be parsed as a number
val = Number([1,2,3]); // same thing here

//parseInt
val = parseInt('100.30'); // parse something as an integer without decimals
val = parseFloat ('100.30'); // parse as integer with decimals

// Output
console.log(val);
console.log (typeof val);
// console.log(val.length); //works only on strings
console.log(val.toFixed()); //rounding to 0 decimals

const val1 = 5;
const val2 = 6;
const sum = val1+val2; //numbers will be calculated, strings will just add two objects like words

const val3 = '5';
const val4 = 6;
const sum2 = val3+val4;

console.log(sum);
console.log(sum2);

