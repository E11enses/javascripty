// game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// assign UI min and max numbers
minNum.textContent = min;
maxNum.textContent = max;

// play again eventlistener
game.addEventListener('mousedown', function(e){ //not click because mousedown leaves us a chance to see what's happening
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
})

// Listen for guess 
guessBtn.addEventListener('click', function(){
 let guess = parseInt(guessInput.value);

 //Validate input if it is inside the range of minNum and maxNum
 if(isNaN(guess) || guess < min || guess > max){
  setMessage(`Please enter a number between ${min} and ${max}`, 'red');
 }

 //check if i won
 if(guess === winningNum){
   // game over - won
   gameOver(true, `${winningNum} is correct! YOU WIN!`)
  //  // disable input
  //  guessInput.disabled = true;
  //  // change border to green
  //  guessInput.style.borderColor = 'green';
  //  // Set message
  //  setMessage(`${winningNum} is correct! YOU WIN!`, 'green');
 } else {
   // Wrong number
   guessesLeft -= 1; // -= means subtract n 

   if(guessesLeft ===0){
     // game over - lost
    gameOver(false,`Game over, you lost. The correct number was ${winningNum}`);
  //    // disable input
  // guessInput.disabled = true;
  
  // // change border to red
  // guessInput.style.borderColor = 'red';
  
  // // Set message
  // setMessage(`Game over, you lost. The correct number was ${winningNum}`, 'red');
   } else {
     // game continues - answer wrong
     // tell user it's the wrong number
     setMessage (`${guess} is not correct, you have ${guessesLeft} guesses left`);
     
     // set border to red
     guessInput.style.borderColor = 'red';

     //set text color to red
     message.style.color = 'red';
     
     // clear input
     guessInput.value = '';
    } 
 }
});

// game over function
function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';

// disable input
guessInput.disabled = true;
// change border to green
guessInput.style.borderColor = color;
// set text color 
message.style.color = color;
// Set message
setMessage(msg);

// play again
guessBtn.value = 'Play again';
guessBtn.className += 'play-again';
}

// get winning number function
function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1) + min);
}

// set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}