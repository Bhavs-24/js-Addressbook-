const Contact = require('./contact');

const contacts = [];

function addContact(Contact){
    debugger
    const contact = new Contact(id,name,email,telephone,landline,website,address);
    contacts.push(contact);
    return contact;
}

function getContactById(id){
    return contacts.find(contact =>contact.id === id);
}
    
module.exports = {
    addContact,
    getContactById,
  };

