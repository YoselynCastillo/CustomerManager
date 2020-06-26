import { Injectable } from '@angular/core';
import { Customer } from '../customer.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  url: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}
  getApi() {
    return this.http.get<Customer[]>(this.url);
  }

  getCustomer(id) {
    return this.http.get(`${this.url}/${id}`);
  }

  postCustomer(customer) {
    return this.http.post(this.url, customer);
  }
  updateCustomer(id, updatedCustomer) {
    return this.http.put(`${this.url}/${id}`, updatedCustomer);
  }
}
// ``
