import { Component } from '@angular/core';
import { Field } from 'src/app/models/field.model';

@Component({
  selector: 'app-price-field',
  templateUrl: './price-field.component.html',
  styleUrls: ['./price-field.component.css']
})
export class PriceFieldComponent {
  field: Field = {
    label: 'Price',
    name: 'price',
    value: '0'
  };

  constructor() {}
}
