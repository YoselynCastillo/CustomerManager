import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
// ---------------MODELS--------------- //
import { Customer } from '../customer.model';
// ---------------SERVICES--------------- //
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
})
export class ListViewComponent implements OnInit {
  // ---------------CONSTRUCTOR--------------- //
  constructor(private dataService: DataService) {}
  // ---------------VARIABLES--------------- //
  customers: Customer[];
  filterCustomer: string;
  cust: Customer;
  private subscription: Subscription;

  // ---------------FUNCTIONS--------------- //

  ngOnInit(): void {
    this.getMessages();
    console.log('entre a list view component');
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

  // Cancelamos la suscripción cuando se destruya el componente
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
