import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactsInfoComponent } from './components/contacts-info/contacts-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { ScrollDownComponent } from './components/scroll-down/scroll-down.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    MainContentComponent,
    ContactsComponent,
    ContactsInfoComponent,
    ScrollToTopComponent,
    ScrollDownComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
