import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {

  getNextCategory(): Observable<number> {
    return Observable.of(100 + Math.round(Math.random() * 100)).delay(500);
  }

}