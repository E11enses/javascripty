// create element

const li = document.createElement('li'); // create an element

// add class
li.className = 'collection-item'; //adding class

//add id
li.id = 'new-item';

//add atrribute
li.setAttribute('title', 'New Item');

// Create text node and append (append = put smth inside)
li.appendChild(document.createTextNode('Hello world'));

// Put the list item in the list
document.querySelector('ul.collection').appendChild(li); //first we describe the new element, then append it inside the parent

// create new link element
const link = document.createElement('a');
// Add classes 
link.className = 'delete-item secondary-content';
//add icon html fron font awesome to make the cross
link.innerHTML = '<i class = "fa fa-remove"></i>';
//append link into the list item 
li.appendChild(link);


console.log(li);
