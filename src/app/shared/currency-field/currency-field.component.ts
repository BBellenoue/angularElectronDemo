import { Component, OnInit, OnDestroy } from '@angular/core';
import { Field } from 'src/app/models/field.model';
import { EventBusService } from 'src/app/services/event-bus.service';
import { Subscriber } from 'src/app/models/subscriber.model';
import { currenciesByCountry } from './currencies-by-country';

@Component({
  selector: 'app-currency-field',
  templateUrl: './currency-field.component.html',
  styleUrls: ['./currency-field.component.css']
})
export class CurrencyFieldComponent implements OnInit, OnDestroy {
  field: Field = {
    label: 'Currency',
    name: 'currency',
    value: 'EUR'
  };
  private eventBusSubscribers: Subscriber[] = [];

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
    if (field.name === 'country') {
      this.countryChanged(field);
    }
  }

  private countryChanged(field: Field): void {
    const currency = this.getCurrencyByCountry(field.value);
    if (currency && currency !== field.value) {
      this.updateCurrency(currency);
    }
  }

  private getCurrencyByCountry(country: string): string | undefined {
    return currenciesByCountry[country];
  }

  private updateCurrency(currency: string): void {
    this.field.value = currency;
    this.dispatchCurrency();
  }

  private dispatchCurrency(): void {
    this.eventBus.dispatch('value-changed', this.field);
  }
}
