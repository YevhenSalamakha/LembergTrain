import { Component, Input } from '@angular/core';
import { ContactInputEnum } from 'src/app/app.constants';

@Component({
  selector: 'app-contacts-info',
  templateUrl: './contacts-info.component.html',
  styleUrls: ['./contacts-info.component.scss'],
})
export class ContactsInfoComponent {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() isError = false;
  @Input() errorMessage!: string;
  @Input() type: ContactInputEnum = ContactInputEnum.Input;

  public ContactInputEnum = ContactInputEnum;

  constructor() {}
}
