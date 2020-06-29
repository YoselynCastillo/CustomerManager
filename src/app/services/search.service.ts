import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs'; // We have to import the observables from the RxJS library
import { Customer } from '../customer.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  // ---------------CONSTRUCTOR--------------- //
  constructor() {}

  // ---------------VARIABLES--------------- //
  private messenger = new BehaviorSubject<any>('');

  // ---------------FUNCTIONS--------------- //
  public getFunction(): Observable<Function> {
    return this.messenger.asObservable();
  }

  public postFunction(msj: any): void {
    this.messenger.next(msj);
    console.log('se envio funcion');
    // console.log(msj);
  }
}
