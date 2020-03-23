import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FieldComponent } from './field.component';

@NgModule({
  declarations: [FieldComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [FieldComponent]
})
export class FieldModule {}
