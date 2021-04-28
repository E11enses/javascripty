const firstname = 'J';
const age = 30;
const job = 'Web dev';
const city = 'Miami';
let html;

// inserting html without template strings
html = '<ul><li>Name: ' + firstname + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

html = '<ul>' + 
      '<li>Name: ' + firstname + '</li>' +    // same stuff without template literals (strings)
      '<li>Age: ' + age + '</li>' +
      '<li>Job: ' + job + '</li>' +
      '<li>City: ' + city + '</li>' +
      '</ul>'


function hello(){
  return 'hello';
}

      // with template strings using backticks `` we can write general html with no problem
html = `   
  <ul>
  <li>Name: ${firstname}</li>  
  <li>Age: ${age}</li>
  <li>City: ${job}</li>
  <li>Job: ${city}</li>
  <li>${2+2}</li>   
  <li>${hello()}</li>
  <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;