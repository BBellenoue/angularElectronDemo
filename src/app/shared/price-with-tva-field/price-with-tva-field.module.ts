import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceWithTvaFieldComponent } from './price-with-tva-field.component';
import { FieldModule } from '../field/field.module';

@NgModule({
  declarations: [PriceWithTvaFieldComponent],
  imports: [CommonModule, FieldModule],
  exports: [PriceWithTvaFieldComponent]
})
export class PriceWithTvaFieldModule {}
