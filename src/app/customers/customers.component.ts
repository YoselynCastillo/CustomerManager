import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  constructor(private customerService: CustomerService) {}
  users: any;
  filterCustomer: string;
  ngOnInit() {
    this.customerService.getApi().subscribe((res) => {
      this.users = res;
      console.log(this.users);
    });
  }
}
