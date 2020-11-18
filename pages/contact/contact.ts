import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Contact } from "../contact";
@Component({
  selector: "page-contact",
  templateUrl: "contact.html"
})
export class ContactPage {
  contact: Contact;
  constructor(public navCtrl: NavController) {
    this.contact = new Contact();
  }
  SaveCont(contform) {}
}
