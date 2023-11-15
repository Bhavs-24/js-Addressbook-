const contactService = new ContactService();
// To open dialog box
const showDialogButton = document.getElementById("showDialog");
const dialog = document.getElementById("dialog");
const closeDialogButton = document.getElementById("closeDialog");
updateButton.classList.add("hidden");

function openDialog() {
  dialog.classList.remove("hidden");
  addbutton.classList.remove("hidden");
  updateButton.classList.add("hidden");
  selectedetails.classList.add("options");
}
showDialogButton.onclick = openDialog;
window.onload = () => {
  myFunction();
};

//validate mobile number
function phonecheck() {
  var mobilenumber = document.getElementById("telephone");
  var message = document.getElementById("message");

  if (mobilenumber.value.length > 10 || mobilenumber.value.length < 10) {
    message.innerText = "Must be 10 digits";
    return false;
  } else {
    message.innerText = " ";
    return true;
  }
}

//validate email address
function fieldfocus() {
  var emailValue = document.getElementById("email").value;

  const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailpattern.test(emailValue)) {
    document.getElementById("validationMessage").innerText =
      "Please enter valid email";
  } else {
    document.getElementById("validationMessage").innerText = "";
  }
}

//data is passed to json data, which is pushed to jsonlist ana make it visible in html
function onSubmit() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var telephone = document.getElementById("telephone").value;
  var landline = document.getElementById("landline").value;
  var webaddress = document.getElementById("webaddress").value;
  var address = document.getElementById("address").value;

  if (name.trim() === "" || email.trim() === "") {
    document.getElementById("error_message").innerText =
      "Please fill all the details!";
  } else {
    document.getElementById("error_message").innerText = "";
   
    var formData = {
      name: name,
      email: email,
      telephone: telephone,
      landline: landline,
      webaddress: webaddress,
      address: address,
    };
   var updatedContact = contactService.addContact(formData);
   //var contactElement = createContactElement(formData);
    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telephone").value = "";
    document.getElementById("landline").value = "";
    document.getElementById("webaddress").value = "";
    document.getElementById("address").value = "";
    console.log("Retrieved item with ID:", formData);
    dialog.classList.add("hidden");
    myFunction();
  }
}

function myFunction() {
    var list = document.getElementById("contactDetails");
    list.innerHTML = "";
    var contacts = contactService.getAllContacts();
    contacts.forEach(function (item) {
    var listItem = document.createElement("li");
    var nameParagraph = document.createElement("p");
    nameParagraph.textContent =  item.name;
    nameParagraph.classList.add("capitalize" , "largefont")
    listItem.appendChild(nameParagraph);

    var emailParagraph = document.createElement("p");
    emailParagraph.textContent = item.email;
    listItem.appendChild(emailParagraph);

    var telephoneParagraph = document.createElement("p");
    telephoneParagraph.textContent =  item.telephone;
    listItem.appendChild(telephoneParagraph);

    listItem.onclick = function () {
    displayData(item);
    list.querySelectorAll('li').forEach(function (li) {
        li.classList.remove('active');
    });
    listItem.classList.add('active');
    };
    list.append(listItem);
  });
}

var selectedItem = null;
var seelctedetails = null;
function displayData(item) {
  if (item && item.id) {
    document.getElementById("selectedname").innerText = item.name;
    document.getElementById("selectedemail").innerText = item.email;
    document.getElementById("selectedmobile").innerText = item.telephone;
    document.getElementById("selectedlandline").innerText = item.landline;
    document.getElementById("selectedwebsite").innerText = item.webaddress;
    document.getElementById("selectedaddress").innerText = item.address;

    seelctedetails = contactService.getContactById(item.id);
    let data = JSON.parse(localStorage.getItem("jsonList")) || [];
    let displayItem = data.find((x) => x.id == item.id);
    if (displayItem) {
      console.log("Updated contact:", displayItem);
    } else {
      console.log("Contact not found");
    }
    var itemDetails = document.getElementById("itemDetails");
    selectedetails.classList.remove("options");
  }
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
    updatedName = document.getElementById("name").value;
    updatedEmail = document.getElementById("email").value;
    updatedTelephone = document.getElementById("telephone").value;
    updatedLandline = document.getElementById("landline").value;
    updatedWebaddress = document.getElementById("webaddress").value;
    updatedAddress = document.getElementById("address").value;
  
    seelctedetails = contactService.updateContact({
    id: seelctedetails.id,
    name: updatedName,
    email: updatedEmail,
    telephone: updatedTelephone,
    landline: updatedLandline,
    webaddress: updatedWebaddress,
    address: updatedAddress
    });
  displayData(seelctedetails);
  dialog.classList.add("hidden");
  }
  clearFormFields();
  myFunction();
}
  
function deleteItem(button) {
  var deleteItem = seelctedetails;
  const isDeleted = contactService.deleteContactById(deleteItem.id);
  if (isDeleted) {
    console.log(`Contact with ID ${deleteItem.id} deleted successfully.`);
  } else {
    console.log(`Contact with ID ${deleteItem.id} not found.`);
  }
  selectedetails.classList.add("options");
  myFunction();

}

function closeDialog() {
  dialog.classList.add("hidden");
  document.getElementById("error_message").innerText = "";
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
