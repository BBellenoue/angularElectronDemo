import { Component, OnInit } from '@angular/core';
import { Field } from 'src/app/models/field.model';

@Component({
  selector: 'app-country-field',
  templateUrl: './country-field.component.html',
  styleUrls: ['./country-field.component.css']
})
export class CountryFieldComponent implements OnInit {
  field: Field = {
    label: 'Country',
    name: 'country',
    value: 'FRANCE'
  };

  constructor() {}

  ngOnInit(): void {}
}
