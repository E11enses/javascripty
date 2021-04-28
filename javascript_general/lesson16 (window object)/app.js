// window in console in the browser opens all the options that can be done 

//window methods objects properties
// console.log(123);

// alerts
// window.alert ('hello world'); //makes a pop-up

// prompt (takes an input)
// const input = prompt(); // it needs a const
// alert(input); // and then you insert your own text for the alert

// confirm 
// if(confirm('Are you sure')){ // for the confirm we need the if function with the confirm statement
//   console.log('YES'); // if we press okay on the popup
// } else {
//   console.log('NO');
// }

let val;

//inner height and width
val = window.innerHeight; // this reads the inner height of the browser (inside of scrollbars)
val = window.innerWidth; // this reads the inner width of the browser ( inside of scrollbars)

//inner height and width
val = window.innerHeight; // this reads the inner height of the browser (inside of scrollbars)
val = window.innerWidth; // this reads the inner width of the browser ( inside of scrollbars)

// scroll points
val = window.scrollY; // looks where we are at in terms of scrolling vertically
val = window.scrollX; // looks where we are at in terms of scrolling horizontally


// location object
val = window.location; // shows the ip, address, port, pathname, href, origin, etc
val = window.location.hostname; // we concretize the hostname 
val = window.location.href; // we concretize the link anchor  
val = window.location.port; // we concretize the port 
val = window.location.search; // we concretize the search if we add a ?smth in the searchbar 

// Redirect 
// window.location.href = 'http://google.com'; //lets us redirect to other sites or anchors

// reload
// window.location.reload(); //reloads permanently

//history object
window.history.go(-1);
val = window.history.length;

// navigator object
val = window.navigator; //gives info about the useragent, geo, language, etc
val = window.navigator.appName;
val = window.navigator.appVersion;


console.log(val);

