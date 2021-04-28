function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// greeting 
Person.prototype.greeting = function(){
  return `Hello ${this.firstName} ${this.lastName}`;
}

const person1 = new Person ('John', 'Doe');

console.log(person1.greeting());

//customer constructor
function Customer (firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName); // call is a function that calls another function
  this.phone = phone;
  this.membership = membership;
}

// inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype); //here we make Customer a Person in terms of prototype

// make customer.prototype return customer ()
Customer.prototype.constructor = Customer;

// create customer
const customer1 = new Customer ('Tom', 'Ford','55555555', 'Standard');

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function(){
  return `Hello ${this.firstName} ${this.lastName}, welcome!`
}
console.log(customer1.greeting());