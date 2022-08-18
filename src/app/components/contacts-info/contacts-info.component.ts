import { Component, Input, Optional, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { ContactInputEnum } from 'src/app/app.constants';

@Component({
  selector: 'app-contacts-info',
  templateUrl: './contacts-info.component.html',
  styleUrls: ['./contacts-info.component.scss'],
})
export class ContactsInfoComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() type: ContactInputEnum = ContactInputEnum.Input;
  @Input() isSubmit!: boolean;

  public ContactInputEnum = ContactInputEnum;
  public value: unknown;

  public objKeys = Object.keys;

  constructor(@Optional() private readonly ngControl: NgControl) {
    this.ngControl ? (this.ngControl.valueAccessor = this) : null;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  public writeValue(val: string): void {
    this.value = val;
  }

  public get formControl(): FormControl {
    return <FormControl>this.ngControl?.control;
  }

  public onTouched = () => {};

  private onChange = (val: string | unknown) => {};
}
