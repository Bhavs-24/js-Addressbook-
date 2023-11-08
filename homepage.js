//const contactService = require('./service.js');
// To open dialog box
const showDialogButton = document.getElementById("showDialog");
const dialog = document.getElementById("dialog");
const closeDialogButton = document.getElementById("closeDialog");

updateButton.classList.add("hidden");
function openDialog() {
  dialog.classList.remove("hidden");
}
showDialogButton.onclick = openDialog;

//validate mobile number
function phonecheck() {
  var mobilenumber = document.getElementById("telephone");
  var message = document.getElementById("message");

  if (mobilenumber.value.length > 10 || mobilenumber.value.length < 10) {
    message.innerHTML = "Must be 10 digits";
    return false;
  } else {
    message.innerHTML = " ";
    return true;
  }
}

//validate email address
function fieldfocus() {
  var emailValue = document.getElementById("email").value;

  const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailpattern.test(emailValue)) {
    document.getElementById("validationMessage").innerHTML =
      "Please enter valid email";
  } else {
    document.getElementById("validationMessage").innerHTML = "";
  }
}

//data is passed to json data, which is pushed to jsonlist ana make it visible in html
var jsonList = [];
var id = 0;
function onSubmit() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var telephone = document.getElementById("telephone").value;
  var landline = document.getElementById("landline").value;
  var webaddress = document.getElementById("webaddress").value;
  var address = document.getElementById("address").value;

  if (name.trim() === "" || email.trim() === "") {
    document.getElementById("error_message").innerHTML =
      "Please fill all the details";
  } else {
    document.getElementById("error_message").innerHTML = "";
    id++;
    var formData = {
      id: id,
      name: name,
      email: email,
      telephone: telephone,
      landline: landline,
      webaddress: webaddress,
      address: address,
    };
    // Add the formData to your JSON array
    jsonList.push(formData);
    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telephone").value = "";
    document.getElementById("landline").value = "";
    document.getElementById("webaddress").value = "";
    document.getElementById("address").value = "";
    console.log("jsonList", jsonList);
    console.log("Retrieved item with ID:", formData);
    updateLocalStorage();
    dialog.classList.add("hidden");
    myFunction();
  }
}

var storedData = localStorage.getItem("jsonList");
if (storedData) {
  jsonList = JSON.parse(storedData);
}

function updateLocalStorage() {
  localStorage.setItem("jsonList", JSON.stringify(jsonList));
}

function myFunction() {
  var list = document.getElementById("contactDetails");
  list.innerHTML = "";

  jsonList.forEach(function (item) {
    var listItem = document.createElement("li");
    listItem.textContent =
      item.name + "\n" + item.email + "\n" + item.telephone;
    listItem.classList.add("list-item");
    listItem.onclick = function () {
      displayData(item);
    };
    list.append(listItem);
  });
}

var selectedItem = null;
var seelctedetails = null;
function displayData(item) {
  document.getElementById("selectedname").innerHTML = item.name;
  document.getElementById("selectedemail").innerHTML = item.email;
  document.getElementById("selectedmobile").innerHTML = item.telephone;
  document.getElementById("selectedlandline").innerHTML = item.landline;
  document.getElementById("selectedwebsite").innerHTML = item.webaddress;
  document.getElementById("selectedaddress").innerHTML = item.address;

  var itemDetails = document.getElementById("itemDetails");
  seelctedetails = item;
  selectedetails.classList.remove("options");
}

function editItem() {
  if (seelctedetails) {
    document.getElementById("name").value = seelctedetails.name;
    document.getElementById("email").value = seelctedetails.email;
    document.getElementById("telephone").value = seelctedetails.telephone;
    document.getElementById("landline").value = seelctedetails.landline;
    document.getElementById("webaddress").value = seelctedetails.webaddress;
    document.getElementById("address").value = seelctedetails.address;

    dialog.classList.remove("hidden");
    addbutton.classList.add("hidden");
    updateButton.classList.remove("hidden");
  }
}

function onUpdate() {
  if (seelctedetails) {
    seelctedetails.name = document.getElementById("name").value;
    seelctedetails.email = document.getElementById("email").value;
    seelctedetails.telephone = document.getElementById("telephone").value;
    seelctedetails.landline = document.getElementById("landline").value;
    seelctedetails.webaddress = document.getElementById("webaddress").value;
    seelctedetails.address = document.getElementById("address").value;

    updateLocalStorage();
    dialog.classList.add("hidden");
  }
  clearFormFields();
  myFunction();
}

function deleteItem(button) {
  var deleteItem = seelctedetails;
  jsonList = jsonList.filter(function (item) {
    return item.name !== deleteItem.name;
  });
  updateLocalStorage();
  myFunction();
}

function closeDialog() {
  dialog.classList.add("hidden");
  clearFormFields();
}

function clearFormFields() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telephone").value = "";
  document.getElementById("landline").value = "";
  document.getElementById("webaddress").value = "";
  document.getElementById("address").value = "";
}


contactService.addContact(1, 'John Doe', 'john@gmail.com', '123 Main St', 'Main');
contactService.addContact(2, 'Jane Smith', 'jane@gmail.com', '456 Elm St', 'Main');

const contact = contactService.getContactById(1);

if (contact) {
  console.log('Found contact:', contact);
} else {
  console.log('contact not found');
}