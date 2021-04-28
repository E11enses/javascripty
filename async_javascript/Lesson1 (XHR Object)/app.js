document.getElementById('button').addEventListener('click', loadData);

function loadData(){
  // Create an XHR Object
  const xhr = new XMLHttpRequest(); 

  // Open
  xhr.open('GET','data.txt', true); //we describe the action, the file where we get info from, and true/false for async/sync

  console.log('Readystate', xhr.readyState); // here we are on state 1
  
  // optional readystate for loaders
  xhr.onprogress = function(){  // state 3 here because it is fetching the response from the server
    console.log('READYSTATE', xhr.readyState);
  }

  xhr.onload = function(){ // first we check the status to see if it is okay and it is already step 4 of readyState values
    if(this.status === 200){
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = //it allows us to display info by adding html to the website
      `<h1>${this.responseText}</h1>`
    }
  }

  // xhr.onreadystatechange = function(){ // we can the state we are on right now with the readystate
  //   if(this.status === 200 && this.readyState === 4){
  //     // console.log(this.responseText);
  //     console.log('Readystate', xhr.readyState);
  //   }
  // }

  // in case of errors
  xhr.onerror = function(){
    console.log('Request error...')
  }

  // Send
  xhr.send();

  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request recieved
  // 3: processing request
  // 4: request finished and the response is ready

  // HTTP STATUSES:
  // 200 : OK
  // 403 : Forbidden
  // 404: Not found
}