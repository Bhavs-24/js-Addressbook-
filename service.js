const contacts = [];

function addContact(formValue){
    const {id,name,email,telephone,landline,webaddress,address} = formValue
    console.log('in add contact')
    const contact = new Contact(id,name,email,telephone,landline,webaddress,address);
    contacts.push(contact);
    return contact;
}

function getContactById(id){
    return contacts.find(contact =>contact.id === id);
}

function updateContact(id, name, email, telephone, landline, webaddress, address) {
    const contactToUpdate = contacts.find(contact => contact.id === id);

    if (contactToUpdate) {
        contactToUpdate.name = name;
        contactToUpdate.email = email;
        contactToUpdate.telephone = telephone;
        contactToUpdate.landline = landline;
        contactToUpdate.webaddress = webaddress;
        contactToUpdate.address = address;
        return contactToUpdate;
    }
    
}

function deleteContactById(id) {
    const indexToDelete = contacts.findIndex(contact => contact.id === id);
    if (indexToDelete !== -1) {
        contacts.splice(indexToDelete, 1);
        return true;
    }
    return false; 
}

