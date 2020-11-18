import { Component, ViewChild } from "@angular/core";
import { MenuController, Platform, Nav } from "ionic-angular";
import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";

import { TabsPage } from "../pages/tabs/tabs";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = TabsPage;
  pages: any;
  constructor(platform: Platform, public menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    });
    this.pages = [
      { title: "Home", component: TabsPage },
      { title: "About", component: AboutPage },
      { title: "Contact", component: ContactPage }
    ];
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
