import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyFieldComponent } from './currency-field.component';
import { FieldModule } from '../field/field.module';

@NgModule({
  declarations: [CurrencyFieldComponent],
  imports: [CommonModule, FieldModule],
  exports: [CurrencyFieldComponent]
})
export class CurrencyFieldModule {}
