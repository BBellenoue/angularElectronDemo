import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Subscriber } from '../models/subscriber.model';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private subscriptions = {};
  private currentId = 0;

  constructor(private logger: LoggerService) {}

  subscribe(eventType: string, callback: any) {
    this.addSubscription(eventType, callback);
    return this.createSubscriber(eventType);
  }

  private addSubscription(eventType: string, callback: any) {
    this.getNextId();
    this.setDefaultEvent(eventType);
    this.subscriptions[eventType][this.currentId] = callback;
  }

  private setDefaultEvent(eventType: string): void {
    if (!this.subscriptions[eventType]) this.subscriptions[eventType] = {};
  }

  private getNextId(): number {
    return ++this.currentId;
  }

  private createSubscriber(eventType): Subscriber {
    return {
      unsubscribe: (): void => {
        delete this.subscriptions[eventType][this.currentId];
        if (Object.keys(this.subscriptions[eventType]).length === 0)
          delete this.subscriptions[eventType];
      }
    };
  }

  dispatch(eventType: string, ...args: any[]) {
    this.logDispatch(eventType, ...args);
    if (!this.subscriptions[eventType]) return;
    Object.keys(this.subscriptions[eventType]).forEach(key =>
      this.subscriptions[eventType][key](...args)
    );
  }

  private logDispatch(eventType: string, ...args: any[]) {
    this.logger.log(
      '[Event Bus] Dispatch ',
      eventType,
      ' with arguments ',
      ...args
    );
  }
}
