let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// get the child nodes of the UL 
val = list.childNodes; // child nodes of UL will not only be list items, but line breaks too

// get children element nodes

val = list.children; // children return html collection without line breaks shown as text
val = list.childNodes[0];
val = list.childNodes[0].nodeName; //gives the name of the element
val = list.childNodes[0].nodeType; // gives a list of numbers : 1 - element, 2 - attribute, 3 - text node, 8 - comment, 9 - document itself, 10 - doctype

// we use children more often than childnodes

val = list.children;
val = list.children[0];
list.children[1].textContent = 'Hello';

// get children of children 

val = list.children[3].children //target the children in the children node
list.children[3].children[0].id = 'test-id'; //we can add ids and classes
val = list.children[3].children[0] // and always call the val again

val = list.firstChild;
val = list.firstElementChild; // gives the first child without text nodes

val = list.lastChild;
val = list.lastElementChild; // gives the last child without text nodes

val = list.childElementCount;

// Get parent node
val = listItem.parentNode; //gets the parentNode, it give us UL here 
val = listItem.parentElement; //get the parent element, which is usually same as node
val = listItem.parentElement.parentElement; // gets a parent of a parent

// get siblings
val = listItem.nextSibling; //goes to the second sibling which is the line break in form of a text node
val = listItem.nextElementSibling; //goes to the second list item without line breaks
val = listItem.nextElementSibling.nextElementSibling;

val = listItem.previousSibling; //does the same with previous sibling
val = listItem.previousElementSibling;




console.log(val);