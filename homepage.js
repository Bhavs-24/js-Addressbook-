const showDialogButton = document.getElementById("showDialog");
const dialog = document.getElementById("dialog");
const closeDialogButton = document.getElementById("closeDialog");
var form = document.getElementById("myForm");

function openDialog() {
    dialog.style.display = "block";
}
function closeDialog() {
    dialog.style.display = "none";
}

showDialogButton.addEventListener("click", openDialog);

// Event listener to close the dialog


// Prevent the form from submitting (for demonstration purposes)
// form.addEventListener("submit", function (event) {
//     debugger
//     event.preventDefault();
//     alert("Form submitted! (This is a demo. Data was not actually submitted.)");
// });


function phonecheck(){

    var mobilenumber = document.getElementById('telephone');
    var message = document.getElementById('message');

    var goodcolor = "#0C6";
    var badcolor = "red";

    if(mobilenumber.value.length>10 || mobilenumber.value.length<10){
        message.style.color = badcolor;
        message.innerHTML = "must be 10 digits";
        return false;
    }
    else{
        message.innerHTML = " ";
        return true;
    }
}

function fieldfocus(){
    var emailValue = document.getElementById("email").value;

    const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   
    if(!emailpattern.test(emailValue)){
        document.getElementById('validationMessage').innerHTML = "Please enter valid email";
    }
    else{
        document.getElementById('validationMessage').innerHTML = "";
    }
}

var jsonList = [];
function onSubmit(){

   // Prevent the default form submission
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value; 
    var telephone = document.getElementById('telephone').value;
    var landline = document.getElementById('landline').value;
    var webaddress = document.getElementById('webaddress').value;
    var address = document.getElementById('address').value;

    var formData = {
        name: name,
        email: email,
        telephone: telephone,
        landline: landline,
        webaddress: webaddress,
        address: address
    };
   
    jsonList.push(formData); // Add the formData to your JSON array
    
    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telephone').value = '';
    document.getElementById('landline').value = '';
    document.getElementById('webaddress').value = '';
    document.getElementById('address').value = '';
    console.log('jsonList', jsonList);
    
    myFunction();
    // document.getElementById('field1').innerHTML = jsonList.map('name');
    // Close the dialog if you have the dialog element
    // For example, if you have a dialog element with an ID 'myDialog', you can close it like this:
     document.getElementById('myDialog').style.display= 'none';
    // dialog.close(); // This assumes your dialog supports the close() method
}



function myFunction(){
    var res = ''
    jsonList.forEach(function(item)
    {
        res += "<li>"+item.name + "<br>" + item.email + "<br>" + item.telephone;

    })
    document.getElementById('field1').innerHTML = res;
}

// let text = "";
// for (let i = 0; i < jsonList.length; i++) {
//     document.getElementById('field1').innerHTML += jsonList[i].name + "<br>";
//   }
  
  

