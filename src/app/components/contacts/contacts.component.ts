import { Component } from '@angular/core';
import { ContactInputEnum } from 'src/app/app.constants';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  public ContactInputEnum = ContactInputEnum;

  constructor() {}

  ngOnInit() {}
}
