// bubbling is listening to parent elements
// delegation is vice versa

// //bubbling
// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });

// because we clicked on the card-title, everything else bubbled and fired off as well


//event deligation 
// const delItem = document.querySelector('.delete-item'); //we need event delegation for example in scenarios when we add a new list item that wasn't there initially and we need to target it somehow (dynamically)

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

// function deleteItem(e){
//   // console.log(e.target); // if we leave it as is, we will log any element we click on in the card, but we need to log and work only with the crosses, which have the i class before the link itself, so we need to make an if statement to clarify it
//   if(e.target.className ==='fa fa-remove'){
//     console.log('delete item');
//   }
// }

  function deleteItem(e){
    // if(e.target.parentElement.className === 'delete-item secondary-content'){ // if we are pressing the element, the parent of which has those two classes, it is going to log. Each i class has a parent link with those two classes, so it is going to work no matter how many crosses with those i classes we create 
    //   console.log('delete item');
    // }
    if(e.target.parentElement.classList.contains('delete-item')){ // a better way to do it is to use classlist instead of classname because it doesn't limit us to fit the whole string of classes in the html 
      e.target.parentElement.parentElement.remove(); //if we want to delete the whole element from the list we have to target not just the link element, but the list item element in the list, so when we delete the whole list item we target the parent of the parent of the i icon and it actually deletes the whole li
      console.log('delete item');
    }
  }