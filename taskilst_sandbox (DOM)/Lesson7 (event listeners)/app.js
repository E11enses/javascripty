// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello world'); //we target the black button with clear tasks. If we have an element with default behaviour, we need to add an (e)vent in the function and prevent the default behaviour
//   e.preventDefault;
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick); //named functions look better

function onClick(e){
  // console.log('Clicked');
  
  let val;
  val = e;
  
  
  //event target element
  
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  e.target.innerText = 'Hello';

  //event type
  val = e.type;

  //timestamp
  val = e.timeStamp;

  //coordinates event relative to the window
  val = e.clientY;
  val = e.clientX;
  //coordinates event relative to the element i.e. the black button
  val = e.offsetY;
  val = e.offsetX;
  
  console.log(val);
}