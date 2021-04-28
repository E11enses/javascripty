// // get elements by class name

// const items = document.getElementsByClassName('collection-item'); //take the class of the points in the tasklist. It is a global scope variable right now
// console.log(items);
// console.log(items[0]); //we can treat them as arrays
// items[0].style.color = 'red'; // we can style certain class-elements
// items[3].textContent = 'Hello ' //and change text

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item'); //we can target class items inside a single query, we need to queryselector the element and then search inside it then
// console.log(listItems);

// // document.getElementsByTagName
// let lis = document.getElementsByTagName('li'); //with the tag names we target specificly tagged items like li, h3, etc...
// console.log(lis);
// console.log(lis[0]); //we can treat them as arrays again
// lis[0].style.color = 'red'; // we can style certain class-elements again
// lis[3].textContent = 'Hello';

// // convert HTML collection lis into an array
// lis = Array.from(lis);
// lis.reverse(); // it is not goint to work because lis is not an array, so we first convert it into array ^^^

// lis.forEach(function(li, index){ //remember about three possible params of the function: variable, index and array 
//   console.log(lis.className);
//   li.textContent = ` ${index}: Hello`;
// });
// console.log(lis);


//document.querySelectorAll  // it brings back the nodelist which can be sorted with forEach etc.
const items = document.querySelectorAll('ul.collection li.collection-item'); //we can target a very specific element with different classes and id etc

items.forEach(function(item, index){ //remember about three possible params of the function: variable, index and array 
    item.textContent = ` ${index}: Hello`;
  });

const liOdd = document.querySelectorAll('li:nth-child(odd)')
const liEven = document.querySelectorAll('li:nth-child(even)')

liOdd.forEach(function(li, index){ //remember about three possible params of the function: variable, index and array 
  li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = '#f4f4f4';
}

console.log(items);