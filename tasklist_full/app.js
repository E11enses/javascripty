//define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector("#task");

// load all event listeners
loadEventListeners();

// load all event listeners
function loadEventListeners(){
  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);
  //add task event
  form.addEventListener('submit', addTask);
  //remove task event
  taskList.addEventListener('click', removeTask);
  //clear task event
  clearBtn.addEventListener('click', clearTasks);
  //filter through tasks
  filter.addEventListener('keyup', filterTasks);
}

// Get tasks from local storage
function getTasks(){
  let tasks;
  if (localStorage.getItem('tasks') === null){
    tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    };

    tasks.forEach(function(task){
  // create li element 
  const li = document.createElement('li');
  // add class
  li.className = 'collection-item';
  //create text node and append child to the li 
  li.appendChild(document.createTextNode(task));
  // Create new link element
  const link = document.createElement('a');
  //add class to that
  link.className = 'delete-item secondary-content';
  //add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //append the link into the li
  li.appendChild(link);

  // append the li into ul
  taskList.appendChild(li);
    });
}

//add task function
function addTask(e){
  if(taskInput.value === ''){
    alert('Add a task');
  }

  // create li element 
  const li = document.createElement('li');
  // add class
  li.className = 'collection-item';
  //create text node and append child to the li 
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  //add class to that
  link.className = 'delete-item secondary-content';
  //add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //append the link into the li
  li.appendChild(link);

  // append the li into ul
  taskList.appendChild(li);
  
  //store into local storage

  sotrageTaskInLocalStorage(taskInput.value);

  //clear input
  taskInput.value = '';

  e.preventDefault();
}

// Store Task
function sotrageTaskInLocalStorage(task){
  let tasks;
  if (localStorage.getItem('tasks') === null){
    tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// remove task function
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?')){
    e.target.parentElement.parentElement.remove();
    //remove tasks from local storage
    removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// remove from local storage
function removeTaskFromLocalStorage(taskItem){
  let tasks;
  if (localStorage.getItem('tasks') === null){
    tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    };
    tasks.forEach(function(task, index){
      if(taskItem.textContent === task){
        tasks.splice(index, 1);
      }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// clear all tasks function
function clearTasks(){
  // taskList.innerHTML = ''; //we can just remove all html inside with the given fucntion
  
  //faster method
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }

  // clear from local storage
  clearTasksFromLocalStorage();
}

// clear tasks from local storage function
function clearTasksFromLocalStorage () {
  localStorage.clear();
}

//filterTasks
function filterTasks(e){
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) !=-1){
      task.style.display = 'block';
    } else 
      task.style.display = 'none';
  });
}