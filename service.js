class ContactService {
  contacts;

  constructor() {
      this.contacts = this.getAllContactsFromLocal() || [
        {id:1,name:"Chandermani Arora",email:"chandermani@technovert.com",telephone:9876543211,landline:678888,webaddress:"www.technovert.com",address:"Ongole"},
        {id:2,name:"Sashi Pagadala",email:"vijay@technovert.com",telephone:6543234412,landline:986568,webaddress:"www.technovert.com",address:"Kerala"},
      ];
      this.saveContactsToLocalStorage();
  }

  getRandomNumber() {
    var id = Math.floor(Math.random() * 1000);
    return id;
  }
  getAllContactsFromLocal(){
    var storedData = localStorage.getItem("jsonList");
    return storedData ? JSON.parse(storedData) : null;
  }
  saveContactsToLocalStorage() {
    localStorage.setItem("jsonList", JSON.stringify(this.contacts));
  }
  addContact(values) {
    //  const { id, name, email, telephone, landline, webaddress, address } = values;
    console.log("in add contact");
    const contact = new Contact({...values,
      id: this.getRandomNumber(),
    });
    this.contacts.push(contact);
    this.saveContactsToLocalStorage();
    return contact;
  }

  getAllContacts() {
    const storedData = this.getAllContactsFromLocal();
    if (storedData) {
      this.contacts = storedData;
    }else{
      this.contacts = this.getAllContactsFromLocal() || [
        {id:1,name:"Chandermani Arora",email:"chandermani@technovert.com",telephone:9876543211},
        {id:2,name:"Sashi Pagadala",email:"vijay@technovert.com",telephone:6543234412},
      ];
      this.saveContactsToLocalStorage();
    }
    return this.contacts;
  }

  getContactById(id) {
    return this.contacts.find((contact) => contact.id === id);
  }

  updateContact(values) {
    const { id, name, email, telephone, landline, webaddress, address } = values;
    this.contacts = this.contacts.map((contact) =>
      contact.id === id
        ? { ...contact, name, email, telephone, landline, webaddress, address }
        : contact
    );
    this.saveContactsToLocalStorage();
    const contactToUpdate = this.contacts.find((contact) => contact.id === id);
    return contactToUpdate;
  }
  
  deleteContactById(id) {
    const initialLength = this.contacts.length;
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
    const isDeleted = this.contacts.length < initialLength;
    if(isDeleted){
      this.saveContactsToLocalStorage();
    }
    return isDeleted;
  }
}
