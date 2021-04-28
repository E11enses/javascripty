// replace elements

// first we create an element
const newHeading = document.createElement('h2');
// add id
newHeading.id = 'task-title';
// New text node 
newHeading.appendChild(document.createTextNode('Task List')); //we choose the heading, command it to append something in it and classify what exactly we append
//get the old heading
const oldHeading = document.getElementById('task-title'); //it won't confuse the one just created with the one we had originally
//Parent 
const cardAction = document.querySelector('.card-action'); //we need to target the parent to work with his children nodes
//replace children nodes from the perspective of the parent element
cardAction.replaceChild(newHeading, oldHeading);


//remover element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//remove list item 
lis[0].remove(); //always the parentheses
//remove child element
list.removeChild(lis[2]);

//classes and attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0]; // first child of the list item == the link
console.log(firstLi.children[0]); //first li is the list item itself, we need the link, so we address its first child

let val;
// classes
val = link.className; // we get the list of the classnames of the list items
val = link.classList; //we get the list of classes in a form of array
val = link.classList[0]; 
link.classList.add('test'); //we add a class to the classlist 
link.classList.remove('test'); //we remove a class from the classlist 
val = link;

//attributes
val = link.getAttribute('href'); // we get attributes of the list item
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href'); // we test if the link has the href
link.setAttribute('title', 'google');
val = link;
link.removeAttribute('title');
val = link;


console.log(val);