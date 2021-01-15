import {Component} from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  fieldText: string;

  constructor() {
    this.fieldText = 'write something in the input field to change this label';
  }
}
