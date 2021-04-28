// Person constructor
function Person(name, dob) {
  this.name = name; //this here pertains only to the function
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970); //common formula 
  }
}

// console.log(this); // globally 'this' shows the window object

// const brad = new Person('Brad', 30);
// const john = new Person('John', 25);

const brad = new Person ('Brad', '9-10-1981');
console.log(brad.calculateAge());