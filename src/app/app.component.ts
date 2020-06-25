import { Component, OnInit } from '@angular/core';

// ---------------MODELS--------------- //
import { Customer } from './customer.model';

// ---------------SERVICES--------------- //
import { CustomerService } from './services/customer.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // ---------------CONSTRUCTOR--------------- //
  constructor(
    private customerService: CustomerService,
    private dataService: DataService
  ) {}

  // ---------------VARIABLES--------------- //
  title = 'Customer Manager ';
  customers: Customer[];

  // ---------------FUNCTIONS--------------- //

  ngOnInit() {
    this.customerService.getApi().subscribe((res) => {
      this.customers = res;
      this.dataService.post(this.customers);
    });
  }
}
