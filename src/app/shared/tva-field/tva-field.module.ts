import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvaFieldComponent } from './tva-field.component';
import { FieldModule } from '../field/field.module';

@NgModule({
  declarations: [TvaFieldComponent],
  imports: [CommonModule, FieldModule],
  exports: [TvaFieldComponent]
})
export class TvaFieldModule {}
