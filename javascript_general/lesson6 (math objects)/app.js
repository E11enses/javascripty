const num1= 100;
const num2 = 50;
let val;

// simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;  //some weird module

// Math objects

val = Math.PI; //pi
val = Math.E; //eiler's
val= Math.round(2.8); //rounding numbers to bigger ones
val = Math.ceil(2.4); // rounding to a bigger number
val= Math.floor (2.8); //rounding to smaller numbers
val=Math.sqrt(64); //sqare root
val = Math.abs(-3); //module
val= Math.pow(8,2); //number to the power of n
val = Math.min(2,33,4,55,21,6); //minimum number of the array
val = Math.max(2,33,4,55,21,6); //maximum number of the array
val= Math.random(); //gives a random number with a lot of decimals

val=Math.random() * 20; //gives a random number between 1 to 19
val=Math.random() * 20+1; //gives a random number between 1 to 20

val = Math.floor(Math.random()*20+1); // a random number rounded to a lower number without decimals





console.log(val);
