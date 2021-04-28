let val;

const today = new Date(); // if Date is empty it is today by default and it is an object 
let birthday = new Date('9-10-1981 11:25:00');  // there are different methods how to write dates
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

val = today;
val = birthday; //if it is a string it is specified as a precise date

val = today.getMonth(); //it is 0-based, so january is 0
val = today.getDate(); //gives the date
val = today.getDay(); //gives the day of the week starting with Sunday-monday-etc 0 based
val = today.getHours(); //gets hours
val = today.getMinutes(); //gets minutes
val = today.getSeconds(); //gets seconds
val = today.getMilliseconds();
val = today.getTime(); //gets some weird time that has passed since the date

birthday.setMonth(2); // sets the month to a specific one 0-based
birthday.setDate(12); //sets the date
birthday.setFullYear(1985); // sets the year 
birthday.setMinutes(30); //sets minutes
birthday.setSeconds(22); //sets seconds


console.log(val); 
console.log(birthday);