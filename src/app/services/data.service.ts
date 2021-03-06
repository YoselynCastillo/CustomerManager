import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs'; // We have to import the observables from the RxJS library
import { Customer } from '../customer.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // ---------------CONSTRUCTOR--------------- //
  constructor() {}

  // ---------------VARIABLES--------------- //
  private messenger = new BehaviorSubject<any>('');

  // ---------------FUNCTIONS--------------- //
  public get(): Observable<Customer[]> {
    return this.messenger.asObservable();
  }

  public post(msj: Customer[]): void {
    this.messenger.next(msj);
  }
}
