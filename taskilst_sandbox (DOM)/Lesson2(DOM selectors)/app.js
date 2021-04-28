// document.getElementbyId()

console.log(document.getElementById('task-title'));

// get things from the element

console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

//change styling
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#FFF';
document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

//change content
document.getElementById('task-title').textContent = 'Task List'; 
document.getElementById('task-title').innerText = 'My Tasks'; 
document.getElementById('task-title').innerHTML = '<span style = "color: red">Task List</span>'; 

// A better way to operate that stuff is with variables

const TaskTitle = document.getElementById('task-title');
TaskTitle.textContent = 'Task List';
TaskTitle.innerHTML = '<span style = "color: red">Task List</span>';

//queryselectors

console.log(document.querySelector('#task-title')); // gets the id with #
console.log(document.querySelector('.card-title')); // gets the class with .
console.log(document.querySelector('h5')); // gets the element, if there is more than 1 element, it gets the first one

document.querySelector ('li').style.color = 'red'; // only the first li becomes red
document.querySelector ('ul li').style.color = 'red'; // we can target nested elements too

document.querySelector ('li:last-child').style.color = 'blue'; // we can target nested elements too
document.querySelector ('li:nth-child(3)').style.color = 'yellow'; // we can target pseudo classes too
document.querySelector ('li:nth-child(4)').textContent = 'Hello world'; // we can target nested elements too
document.querySelector ('li:nth-child(odd)').style.background = '#ccc'; // we target only the first odd child



