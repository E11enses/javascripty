const posts = [
  {title: 'Post One', body : 'This is post one'},
  {title: 'Post Two', body : 'This is post two'}
]

// function createPost(post) {
//   setTimeout (function(){
//     posts.push(post);}, 2000);
// }

// function getPosts() {
//   setTimeout (function(){
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost ({title: 'Post Three', body: 'This is post three'});

// getPosts();

// because the first post took 2 seconds to load, the third post didn't have time to load due to the fact that the functions are synced, to make it work we must make it async and add callback functions

function createPost(post, callback) { 
  setTimeout (function(){
    posts.push(post);
    callback();
  }, 
  2000);
    

}

function getPosts() {
  setTimeout (function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost ({title: 'Post Three', body: 'This is post three'}, getPosts); //this function takes in the object AND the callback function, so it gets called within the 2 seconds of the server loadtime