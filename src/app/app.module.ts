import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactsInfoComponent } from './components/contacts-info/contacts-info.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [];
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    MainContentComponent,
    ContactsComponent,
    ContactsInfoComponent,
    ScrollToTopComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      anchorScrolling: 'enabled',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
