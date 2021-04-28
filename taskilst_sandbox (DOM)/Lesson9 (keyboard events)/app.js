const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

taskInput.value = ''; // a way to clear the input. the 'value' is coded in the html

// form.addEventListener('submit', runEvent);
// taskInput.addEventListener('keydown', runEvent); //fires off when we hit the key down
// taskInput.addEventListener('keyup', runEvent); //fires off when we release the pressed key
// taskInput.addEventListener('keypress', runEvent); //fires off when we press the key
// taskInput.addEventListener('focus', runEvent); //fires off when we set the form into focus
// taskInput.addEventListener('blur', runEvent); //fires off when we set the form out of focus
// taskInput.addEventListener('cut', runEvent); //fires off when we cut something out of the form
// taskInput.addEventListener('paste', runEvent); //fires off when paste something in the form


function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  console.log(e.target.value); // gives the value of the target

  // heading.innerText = e.target.value;  //like this we change the heading text to what we are typing on the form 

  // console.log(taskInput.value); // we can get the input value 

  // e.preventDefault(); // if we have the keydown function then preventdefault will not let me type in smth
}