// set local storage item 
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');
// set session storage item 
sessionStorage.setItem('name', 'Beth');

// //remove from storage
// localStorage.removeItem('name');

// //get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name, age);

// //clear local storage
// localStorage.clear();

document.querySelector('form').addEventListener('submit', function(e){ // right now it is going to replace every task in the local storage as soon as we submit a new one
  const task = document.getElementById('task').value; // here we get the value of the task from the form

  let tasks; // so we make an array of tasks to save it to local storage

  if(localStorage.getItem('tasks') === null){ //if there are no tasks on local storage right now
    tasks = []; //set the tasks variable to an empy array
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks')); //otherwise we need to get items from the local storage with a key tasks and wrap it in JSON parse because it is how storage works
  }

  tasks.push(task); // we use push to add stuff to the variable, and now we need to reset the local storage with new items


  localStorage.setItem('tasks', JSON.stringify(tasks)); //local storage has two params: (key, value) and again we need to wrap it in JSON
  alert('task saved');
  
  e.preventDefault();
});

const tasks =JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);

})