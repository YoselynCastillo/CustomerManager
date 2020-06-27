import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
// ---------------MODELS--------------- //
import { Customer } from '../customer.model';
// ---------------SERVICES--------------- //
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit, OnDestroy {
  // ---------------CONSTRUCTOR--------------- //
  constructor(private dataService: DataService) {}
  // ---------------VARIABLES--------------- //
  customers: Customer[];
  cust: Customer = {
    id: 0,
    name: '',
    address: {
      street: '',
      city: '',
    },
  };
  customer: Customer;
  private subscription: Subscription;
  filterCustomer: string;

  // ---------------FUNCTIONS--------------- //

  ngOnInit(): void {
    this.getMessages();
  }

  private getMessages(): void {
    this.subscription = this.dataService.get().subscribe((msj) => {
      this.customers = msj;
    });
  }

  addCustomer() {
    this.cust.id = this.customers.length + 1;
    console.log(this.cust);
    this.customers.push({
      name: this.cust.name,
      id: this.cust.id,
      address: {
        city: this.cust.address.city,
        street: this.cust.address.street,
      },
    });
    this.cust.name = '';
    this.cust.address.city = '';
    this.cust.address.street = '';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}
