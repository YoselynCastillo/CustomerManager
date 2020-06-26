import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs'; // We have to import the observables from the RxJS library
// ---------------MODELS--------------- //
// import { Customer } from '../customer.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // ---------------CONSTRUCTOR--------------- //
  constructor() {}

  // ---------------VARIABLES--------------- //
  private messenger = new BehaviorSubject<any>('');

  // ---------------FUNCTIONS--------------- //
  public get(): Observable<any> {
    return this.messenger.asObservable();
  }
  public post(msj: any): void {
    this.messenger.next(msj);
  }
}
