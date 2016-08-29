import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WidgetService {

  getNextWidget(): Observable<number> {
    return Observable.of(1000 + Math.round(Math.random() * 1000)).delay(500);
  }

}