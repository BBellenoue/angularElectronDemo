import { Component, Input } from '@angular/core';
import { Field } from 'src/app/models/field.model';
import { EventBusService } from 'src/app/services/event-bus.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {
  @Input() field: Field;

  constructor(private eventBus: EventBusService) {}

  dispatchField() {
    this.eventBus.dispatch('value-changed', this.field);
  }
}
