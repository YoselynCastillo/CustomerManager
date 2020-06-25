import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
// ---------------MODELS--------------- //
import { Customer } from '../customer.model';
// ---------------SERVICES--------------- //
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css'],
})
export class CustomerInfoComponent implements OnInit, OnDestroy {
  // ---------------CONSTRUCTOR--------------- //
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}
  // ---------------VARIABLES--------------- //

  customers: Customer[];
  cust: Customer;
  private subscription: Subscription;

  // ---------------FUNCTIONS--------------- //
  ngOnInit(): void {
    this.getMessages();
    this.route.paramMap.subscribe((params) => {
      this.cust = this.customers[+params.get('customerId') - 1];
      console.log(this.cust);
    });
  }
  private getMessages(): void {
    this.subscription = this.dataService.get().subscribe((msj) => {
      console.log(
        'The array of customers has been received in customers-info.component'
      );
      console.log(msj);
      this.customers = msj;
    });
  }
  modificar() {
    console.log(this.cust);
    console.log(this.customers);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Cancelamos la suscripción cuando se destruya el componente
  }
}
