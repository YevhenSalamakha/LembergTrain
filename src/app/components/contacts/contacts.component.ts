import { Component, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactInputEnum } from 'src/app/app.constants';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  public ContactInputEnum = ContactInputEnum;
  public isSubmit = false;
  public contactsForm!: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.contactsForm = this.formbuilder.group({
      fullName: [undefined, [Validators.required, Validators.maxLength(20)]],
      companyName: [undefined, [Validators.required, Validators.maxLength(15)]],
      phoneNumber: [
        undefined,
        [Validators.required, Validators.pattern(/^(?:\+38)?(0[679]3\d{7})$/)],
      ],
      email: [undefined, [Validators.required, Validators.email]],
      message: [undefined, [Validators.required, Validators.maxLength(300)]],
    });
  }

  onCheck() {
    this.isSubmit = true;
  }
}
