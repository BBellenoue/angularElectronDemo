import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldModule } from './field/field.module';
import { CountryFieldModule } from './country-field/country-field.module';
import { CurrencyFieldModule } from './currency-field/currency-field.module';
import { PriceFieldModule } from './price-field/price-field.module';
import { TvaFieldModule } from './tva-field/tva-field.module';
import { PriceWithTvaFieldModule } from './price-with-tva-field/price-with-tva-field.module';

const modules = [
  FieldModule,
  CountryFieldModule,
  CurrencyFieldModule,
  PriceFieldModule,
  TvaFieldModule,
  PriceWithTvaFieldModule
];

@NgModule({
  imports: [CommonModule, ...modules],
  exports: [...modules]
})
export class SharedModule {}
