import { Component } from "@angular/core";
import { async } from "@angular/core/testing";
import {
  NavController,
  ToastController,
  LoadingController
} from "ionic-angular";
import { Observable } from "rxjs";
import { Contact } from "../contact";
@Component({
  selector: "page-contact",
  templateUrl: "contact.html"
})
export class ContactPage {
  contact: Contact;
  constructor(
    public navCtrl: NavController,
    private toastctrl: ToastController,
    private loadingctrl: LoadingController
  ) {
    this.contact = new Contact();
  }

  async presentLoading() {
    const loader = await this.loadingctrl.create({
      content: "Saving..."
    });
    await loader.present();
    await this.presentToast().then(val => {
      loader.dismiss();
    });
  }

  async presentToast() {
    const toast = await this.toastctrl.create({
      message: "Data Saved..",
      duration: 3000
    });
    await toast.present();
  }

  SaveCont(contform) {
    //console.log(contform.value);
    this.presentLoading();
    contform.reset();
  }
}
