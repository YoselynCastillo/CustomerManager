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
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: 0,
        lng: 0,
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  };
  private subscription: Subscription;
  filterCustomer: string;

  // ---------------FUNCTIONS--------------- //

  ngOnInit(): void {
    this.getMessages();
  }

  private getMessages(): void {
    this.subscription = this.dataService.get().subscribe((msj) => {
      console.log(
        'The array of customers has been received in customers.component'
      );
      this.customers = msj;
      console.log(this.customers);
    });
  }

  addCustomer() {
    this.cust.id = this.customers.length + 1;
    console.log(this.cust);
    this.customers.push(this.cust);
  }

  // Cancelamos la suscripción cuando se destruya el componente
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
