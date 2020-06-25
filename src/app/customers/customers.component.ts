import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { DataService } from '../services/data.service';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  constructor(
    private customerService: CustomerService,
    private dataService: DataService
  ) {}
  customers: Customer[];
  filterCustomer: string;
  cust: Customer;

  ngOnInit() {
    this.customerService.getApi().subscribe((res) => {
      this.customers = res;
      this.dataService.emite(this.customers);
    });
  }

  addCustomer() {
    this.customers.push(this.cust);
  }
}
