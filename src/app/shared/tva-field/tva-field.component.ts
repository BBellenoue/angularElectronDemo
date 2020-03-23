import { Component } from '@angular/core';
import { Field } from 'src/app/models/field.model';

@Component({
  selector: 'app-tva-field',
  templateUrl: './tva-field.component.html',
  styleUrls: ['./tva-field.component.css']
})
export class TvaFieldComponent {
  field: Field = {
    label: 'TVA',
    name: 'tva',
    value: '0'
  };

  constructor() {}
}
