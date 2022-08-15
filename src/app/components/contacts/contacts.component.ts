import { Component, Input, OnInit } from '@angular/core';
import { ContactInputEnum } from 'src/app/app.constants';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  public ContactInputEnum = ContactInputEnum;

  constructor() {}

  ngOnInit() {}
}
