let val;

val = document; //html is basically an array but we cant use forEach functions on html
val = document.all; // if we do .all it will show the html as an array 
val = document.all[0]; // we can address each element of html as an element of the array
val = document.all.length; // we can watch the length of the array 
val = document.head; // we can address certain elements of the html 

val = document.forms; // we can address all elements of a certain type 
val = document.forms[1]; // and we can of course choose which form exactly we want to address
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val=document.scripts[2].getAttribute('src');

// we cant do forEach functions because these arrays are not real arrays

let scripts = document.scripts;
let scriptsArray = Array.from(scripts);

// scripts.forEach(function(script){ // it is going to show the error 
//   console.log(script);
// });

scriptsArray.forEach(function(script){ // it is going to work now because the scriptsArray is an actual array
  console.log(script);
});

scriptsArray.forEach(function(script){ // it is going to work now because the scriptsArray is an actual array
  console.log(script.getAttribute('src'));
});


console.log(val);