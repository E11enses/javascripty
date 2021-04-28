const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector ('h5');

// // click
// clearBtn.addEventListener('click', runEvent);
// //double click
// clearBtn.addEventListener('dblclick', runEvent);
// // mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// // mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// // mouseenter
// card.addEventListener('mouseenter', runEvent); //these events fire off when you go in/out the main element
// // mouseleave
// card.addEventListener('mouseleave', runEvent);
// // mouseover
// card.addEventListener('mouseover', runEvent); //these events fire off when you go in/out any element even inside the parent element (e.g. the button inside the parent card element)
// // mouseout
// card.addEventListener('mouseout', runEvent);
// mousemove
card.addEventListener('mousemove', runEvent);

// Event handler
function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}