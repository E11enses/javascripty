document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText(){
  fetch('test.txt') // fetch api returns promises
  .then(res => res.text())
  .then(data => { //if we want to fetch a certain item, we go further fetching a concrete data or smth
    console.log(data);
    document.getElementById('output').innerHTML = data;
  })
  .catch(err => console.log(err));
}

// get local json data
function getJson(){
  fetch('posts.json') // fetch api returns promises 
  .then(function(res){ //that's why we need to use .then for the functions after it and we can change it to arrow functions too
    return res.json();
  })
  .then(function(data) { //if we want to fetch a certain item, we go further fetching a concrete data or smth
    console.log(data);
    let output = '';
    data.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err){
    console.log(err);
  });
}

// get external api data
function getExternal(){
  fetch('https://api.github.com/users') // fetch api returns promises
  .then(function(res){ //that's why we need to use .then for the functions after it
    return res.json();
  })
  .then(function(data) { //if we want to fetch a certain item, we go further fetching a concrete data or smth
    console.log(data);
    let output = '';
    data.forEach(function(user){
      output += `<li>${user.login}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err){
    console.log(err);
  });
}