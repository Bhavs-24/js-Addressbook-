// To open dialog box 
const showDialogButton = document.getElementById("showDialog");
const dialog = document.getElementById("dialog");
const closeDialogButton = document.getElementById("closeDialog");
var form = document.getElementById("myForm");

function openDialog() {
    dialog.style.display = "block";
}
showDialogButton.addEventListener("click", openDialog);

//validate mobile number
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

//validate email address
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

//data is passed to json data, which is pushed to jsonlist ana make it visible in html
var jsonList = [];
function onSubmit(){
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
    // Add the formData to your JSON array
    jsonList.push(formData);
    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telephone').value = '';
    document.getElementById('landline').value = '';
    document.getElementById('webaddress').value = '';
    document.getElementById('address').value = '';
    console.log('jsonList', jsonList);
    
    myFunction();
    document.getElementById('dialog').style.display= 'none'; 
}

//To display data in html
// function myFunction(){
//     var res = ''
//     jsonList.forEach(function(item)
//     {
//         res += "<li>"+item.name + "<br>" + item.email + "<br>" + item.telephone;
//     })
//     document.getElementById('field1').innerHTML = res;
// }

  function myFunction(){
    var list = document.getElementById('contactDetails');
    list.innerHTML = '';

    jsonList.forEach(function(item,index){
        var listItem = document.createElement("li");
        listItem.textContent = item.name + "\n" + item.email + "\n" + item.telephone;
        listItem.classList.add("list-item");

        if (index === 0) {
            listItem.classList.add("first-item");
        }else {
            listItem.classList.add("rest-items");
        }

        listItem.addEventListener("click",function(){
            displayData(item);
        });
        list.append(listItem);
    })
  }


  var selectedItem = null;
  function displayData(item){
    var itemDetails = document.getElementById('itemDetails');
    itemDetails.innerHTML = `
    <div>
    <button><img class="editimage" src="Assets/edit1.jpg">Edit</button>
    <button><img class="deleteimage"src="Assets/delete1.png">Delete</button>
    </div>
    <p>${item.name}</p>
    <p>Email:${item.email}</p>
    <p>Mobile:${item.telephone}</p>
    <p>Landline:${item.landline}</p>
    <p>Website:${item.webaddress}</p>
    <p>Address:${item.address}</p>
    
    `;
   
    // item.name + "<br>Email:" + item.email + "<br>Mobile:" + item.telephone +"<br>Website:" + item.webaddress + "<br>Address:"+item.address ;
    var editButton = document.querySelector('Assets/edit1.jpg');
    editButton.addEventListener('click', function() {
        // Handle edit action here
        editItem(item);
    });
  }
  function editItem(item) {
    debugger
    selectedItem = item;
    // Prepopulate the dialog box fields with the selected item's data
    document.getElementById('name').value = item.name;
    document.getElementById('email').value = item.email;
    document.getElementById('telephone').value = item.telephone;
    document.getElementById('landline').value = item.landline;
    document.getElementById('webaddress').value = item.webaddress;
    document.getElementById('address').value = item.address;

    // Display the dialog box
    document.getElementById('dialog').style.display = 'block';

    // Add an event listener for the Update button within the dialog
    document.getElementById('updateButton').addEventListener('click', function() {
        // Update the item with the edited details
        if (selectedItem) {
            selectedItem.name = document.getElementById('name').value;
            selectedItem.email = document.getElementById('email').value;
            selectedItem.telephone = document.getElementById('telephone').value;
            selectedItem.landline = document.getElementById('landline').value;
            selectedItem.webaddress = document.getElementById('webaddress').value;
            selectedItem.address = document.getElementById('address').value;
            // Display the updated details
            displayData(selectedItem);
        }

        // Close the dialog box after updating
        document.getElementById('dialog').style.display = 'none';
    });
}