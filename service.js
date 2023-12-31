"use strict";
class ContactService {
    constructor() {
        this.localStorageKey = "Contacts";
        this.contacts = [
            {
                id: 1,
                name: "Chandermani Arora",
                email: "chandermani@technovert.com",
                telephone: 9876543211,
                landline: 678888,
                webaddress: "www.technovert.com",
                address: "Ongole",
            },
            {
                id: 2,
                name: "Sashi Pagadala",
                email: "vijay@technovert.com",
                telephone: 6543234412,
                landline: 986568,
                webaddress: "www.technovert.com",
                address: "Kerala",
            },
        ];
    }
    addContact(contact) {
        const newContact = new Contact(Object.assign(Object.assign({}, contact), { id: this.getRandomNumber() }));
        this.contacts.push(newContact);
        this.saveContactsToLocalStorage(this.contacts);
        return contact;
    }
    getAllContacts() {
        var storedData = localStorage.getItem(this.localStorageKey);
        if (storedData) {
            this.contacts = JSON.parse(storedData);
        }
        else {
            this.saveContactsToLocalStorage(this.contacts);
        }
        return this.contacts;
    }
    getContactById(id) {
        return this.contacts.find((contact) => contact.id === id);
    }
    updateContact(contact) {
        this.contacts = this.contacts.map((c) => c.id == contact.id ? Object.assign({}, contact) : c);
        this.saveContactsToLocalStorage(this.contacts);
        return contact;
    }
    deleteContactById(id) {
        try {
            this.contacts = [...this.contacts.filter((contact) => contact.id !== id)];
            this.saveContactsToLocalStorage(this.contacts);
            return true;
        }
        catch (ex) {
            return false;
        }
    }
    saveContactsToLocalStorage(contacts) {
        localStorage.setItem(this.localStorageKey, JSON.stringify(contacts));
    }
    getRandomNumber() {
        var id = Math.floor(Math.random() * 1000);
        return id;
    }
}
