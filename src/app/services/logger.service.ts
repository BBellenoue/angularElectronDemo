import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  constructor() {}

  log(...message: any) {
    if (!environment.production) {
      console.log(...message);
    }
  }

  warn(...message: any) {
    if (!environment.production) {
      console.warn(...message);
    }
  }

  error(...message: any) {
    if (!environment.production) {
      console.error(...message);
    }
  }
}
