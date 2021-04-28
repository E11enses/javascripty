// object.prototype
// Person.prototype

function Person(name, dob) {
  this.name = name; //this here pertains only to the given function
  // this.age = age;
  this.birthday = new Date(dob);
  // this.calculateAge = function(){
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970); //common formula 
  // }
}

// calculate age
Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970); //common formula 
}

// get full name
Person.prototype.getFullName = function(){
  return `${this.name}`;
}

// changes name
Person.prototype.changesName = function(newName) {
  this.name = newName; 
}

const john = new Person('John', '16/06/1995');
const mary = new Person ('Mary','March 20 1978');

mary.changesName('Natasha');
console.log(mary.getFullName());

console.log(mary.hasOwnProperty('name'));
