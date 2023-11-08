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

function updateContact(id, name, email, telephone, landline, website, address) {
    const contactToUpdate = contacts.find(contact => contact.id === id);

    if (contactToUpdate) {
        contactToUpdate.name = name;
        contactToUpdate.email = email;
        contactToUpdate.telephone = telephone;
        contactToUpdate.landline = landline;
        contactToUpdate.website = website;
        contactToUpdate.address = address;
        return contactToUpdate;
    }

    return null; // Return null if the contact with the specified ID doesn't exist
}

module.exports = {
    addContact,
    getContactById,
    updateContact
  };

