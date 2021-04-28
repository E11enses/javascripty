// function declarations

function greet(){  // this is a declaration
  // console.log('Hello');
  return 'Hello';
}

greet(); // this is a calling of a fucntion

console.log(greet());

function greet2(firstName){ 
  return 'Hello ' + firstName;
}

console.log(greet2('John')); // the string in the console log is the value for the variable in the function


function greet3(firstName, lastName){ 
  return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet3()); // we get the string being undefined, so we have to add extra if statements in the function to define them


function greet4(firstName, lastName){ 
  if(typeof firstName === 'undefined'){firstName= 'John'} // we define the firstname
  if(typeof lastName === 'undefined'){lastName = 'Doe'} // and the last name
  return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet4()); // we dont have anything here so name and surname are defaulted
console.log(greet4('Steve', 'Smith')); // we change the values inside manually

function greet5(firstName ='John ', lastName = 'Doe '){ // it is a es6 way of declaring 
  return 'Hello' + ' ' + firstName + lastName;
}

console.log(greet5());

// function experssions
const square = function(x){  // expressions and declarations arent very different
  return x*x;
};

console.log(square(8));

//immediately invokable fucntion expressions (IIFES)

(function(name){ // those functions stay in parentheses
  console.log('Hello ' + name);
})('Brad'); // always end with parentheses

// a function can be put inside of an object => property methods

const todo = { // we have a kind of a todo list
  add: function(){ // with a function we can add a task 
    console.log('Add todo'); // then we show it
  },
  edit: function(id){ // then we can add an edit task function
    console.log(`Edit todo ${id}`); // and console log a precise id of the task to edit
  }
}

todo.delete = function (){ // also we can add actions with functions out of the object with those functions
  console.log ('Delete todo');
}

todo.add(); // and then we run those functions from the todo const
todo.edit(22); // and edit todo #22 from a const todo
todo.delete;