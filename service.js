class ContactService {
    constructor() {
        this.contacts = [];
         
    }

    getRandomNumber(){
      var id =  Math.floor(Math.random()*1000);
      return id;
    }
    addContact(formValue) {
        const { id, name, email, telephone, landline, webaddress, address } = formValue;
        console.log('in add contact');
        const contact = new Contact(id, name, email, telephone, landline, webaddress, address);
        this.contacts.push(contact);
        return contact;
    }

    getContactById(id) {
        return this.contacts.find(contact => contact.id === id);
    }

    updateContact(id, name, email, telephone, landline, webaddress, address) {
        const contactToUpdate = this.contacts.find(contact => contact.id === id);

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

    deleteContactById(id) {
        const indexToDelete = this.contacts.findIndex(contact => contact.id === id);
        if (indexToDelete !== -1) {
            this.contacts.splice(indexToDelete, 1);
            return true;
        }
        return false;
    }
}