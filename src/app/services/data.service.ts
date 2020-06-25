import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs'; // Tenemos que importar los observables de la librería RxJS
import { Customer } from '../customer.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  private mensajero = new BehaviorSubject<any>('');

  public escucha(): Observable<Customer[]> {
    return this.mensajero.asObservable();
  }
  public emite(msj: any): void {
    this.mensajero.next(msj);
  }
}
