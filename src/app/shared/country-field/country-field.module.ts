import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryFieldComponent } from './country-field.component';
import { FieldModule } from '../field/field.module';

@NgModule({
  declarations: [CountryFieldComponent],
  imports: [CommonModule, FieldModule],
  exports: [CountryFieldComponent]
})
export class CountryFieldModule {}
