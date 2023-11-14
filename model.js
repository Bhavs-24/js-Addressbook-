//  class Contact {
//     constructor(id, name, email,telephone,landline, webaddress, address) {
//       this.id = id;
//       this.name = name;
//       this.email = email;
//       this.telephone = telephone;
//       this.landline = landline;
//       this.webaddress = webaddress;
//       this.address = address;
//     }
//   }
class Contact {
  id;
  name;
  email;
  telephone;
  landline;
  webaddress;
  address;
  constructor(args) {
    this.id = args.id;
    this.name = args.name;
    this.email = args.email;
    this.telephone = args.telephone;
    this.landline = args.landline;
    this.webaddress = args.webaddress;
    this.address = args.address;
  }
}