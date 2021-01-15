import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TextInputValidation} from '../utils/text-input-validation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  textControl: FormControl;

  constructor() {
    this.textControl = new FormControl('', [TextInputValidation.validateText]);
  }
}
