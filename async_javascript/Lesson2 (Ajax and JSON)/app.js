document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);

// load customeR
function loadCustomer(e){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function (){
    if(this.status===200){
      // console.log(this.responseText);

      const customer = JSON.parse(this.responseText); // we need to parse to get access to each element of the object

      const output = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.compamy}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;

      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr.send();
}

// load customerS
function loadCustomers(e){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function (){
    if(this.status===200){
      // console.log(this.responseText);

      const customers = JSON.parse(this.responseText); // we need to parse to get access to each element of the object

      let output ='';

      customers.forEach(function(customer){

        output += `
          <ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.compamy}</li>
            <li>Phone: ${customer.phone}</li>
          </ul>
        `;
      });


      document.getElementById('customers').innerHTML = output;
    }
  }

  xhr.send();
}