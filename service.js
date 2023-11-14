class ContactService {
    constructor() {
        this.contacts = [];
    }

    getRandomNumber(){
      var id =  Math.floor(Math.random()*1000);
      return id;
    }
    addContact(formValue) {
       // const { id, name, email, telephone, landline, webaddress, address } = formValue;
        console.log('in add contact');
        const contact = new Contact(formValue);
        this.contacts.push(contact);
        return contact;
    }

    getAllContacts(){
        var storedData = localStorage.getItem("jsonlist");
        if(storedData){
            this.contacts = JSON.parse(storedData);
        }
        return this.contacts;
    }

    getContactById(id) {
        return this.contacts.find(contact => contact.id === id);
    }

    updateContact(id, name, email, telephone, landline, webaddress, address) {
        this.contacts = this.contacts.map(contact =>
            contact.id === id
                ? { ...contact, name, email, telephone, landline, webaddress, address }
                : contact
        );
    
        const contactToUpdate = this.contacts.find(contact => contact.id === id);
        return contactToUpdate;
    }

    deleteContactById(id) {
        const initialLength = this.contacts.length;
        this.contacts = this.contacts.filter(contact => contact.id !== id);
        const isDeleted = this.contacts.length < initialLength;
    
        return isDeleted;
    }
}