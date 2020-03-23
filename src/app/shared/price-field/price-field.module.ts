import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceFieldComponent } from './price-field.component';
import { FieldModule } from '../field/field.module';

@NgModule({
  declarations: [PriceFieldComponent],
  imports: [CommonModule, FieldModule],
  exports: [PriceFieldComponent]
})
export class PriceFieldModule {}
