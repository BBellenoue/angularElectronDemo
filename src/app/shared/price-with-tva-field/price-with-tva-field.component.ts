import { Component, OnInit, OnDestroy } from '@angular/core';
import { Field } from 'src/app/models/field.model';
import { Subscriber } from 'src/app/models/subscriber.model';
import { EventBusService } from 'src/app/services/event-bus.service';

@Component({
  selector: 'app-price-with-tva-field',
  templateUrl: './price-with-tva-field.component.html',
  styleUrls: ['./price-with-tva-field.component.css']
})
export class PriceWithTvaFieldComponent implements OnInit, OnDestroy {
  field: Field = {
    label: 'Price with TVA',
    name: 'price-with-tva',
    value: '0'
  };
  private eventBusSubscribers: Subscriber[] = [];
  private price: number = 0;
  private tva: number = 0;

  constructor(private eventBus: EventBusService) {}

  ngOnInit(): void {
    this.subscribeToEventBus();
  }

  ngOnDestroy(): void {
    this.eventBusSubscribers.forEach(element => element.unsubscribe());
  }

  private subscribeToEventBus(): void {
    const subscriber = this.eventBus.subscribe(
      'value-changed',
      this.onValueChanged.bind(this)
    );
    this.eventBusSubscribers.push(subscriber);
  }

  private onValueChanged(field: Field): void {
    if (field.name === 'price') {
      this.priceChanged(field);
    } else if (field.name === 'tva') {
      this.tvaChanged(field);
    }
  }

  private priceChanged(field: Field): void {
    this.price = this.convertStringToNumber(field.value);
    this.update();
  }

  private tvaChanged(field: Field): void {
    this.tva = this.convertStringToNumber(field.value);
    this.update();
  }

  private convertStringToNumber(str: string) {
    let num = parseFloat(str);
    return isNaN(num) ? 0 : num;
  }

  private update(): void {
    this.field.value = ((this.price * (100 + this.tva)) / 100).toString();
    this.dispatch();
  }

  private dispatch(): void {
    this.eventBus.dispatch('value-changed', this.field);
  }
}
