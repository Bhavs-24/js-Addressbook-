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
  var seelctedetails =null;
  function displayData(item){ 
    document.getElementById('selectedname').innerHTML = item.name;
    var itemDetails = document.getElementById('itemDetails');
    seelctedetails = item;
    document.getElementById('selectedetails').style.display = 'block';
  }
  function editItem() {
    document.getElementById('name').value = seelctedetails.name;
    document.getElementById('email').value = seelctedetails.email;
    document.getElementById('telephone').value = seelctedetails.telephone;
    document.getElementById('landline').value = seelctedetails.landline;
    document.getElementById('webaddress').value = seelctedetails.webaddress;
    document.getElementById('address').value = seelctedetails.address;

    document.getElementById('dialog').style.display = 'block';

    document.getElementById('updateButton').addEventListener('click', function() {
        if (selectedItem) {
            selectedItem.name = document.getElementById('name').value;
            selectedItem.email = document.getElementById('email').value;
            selectedItem.telephone = document.getElementById('telephone').value;
            selectedItem.landline = document.getElementById('landline').value;
            selectedItem.webaddress = document.getElementById('webaddress').value;
            selectedItem.address = document.getElementById('address').value;
            displayData(selectedItem);
        }
        document.getElementById('dialog').style.display = 'none';
    });
}
function deleteItem() {
    var deleteItem = seelctedetails;
    jsonList = jsonList.filter(function(item) {
      return item.name !== deleteItem.name;
    });
    jsonList.pop();
    myFunction();
  }
