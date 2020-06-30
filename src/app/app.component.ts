import { Component, OnInit } from '@angular/core';

// ---------------MODELS--------------- //
import { Customer } from './customer.model';

// ---------------SERVICES--------------- //
import { CustomerService } from './services/customer.service';
import { DataService } from './services/data.service';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // ---------------CONSTRUCTOR--------------- //
  constructor(
    private customerService: CustomerService,
    private dataService: DataService,
    private searchService: SearchService
  ) {}

  // ---------------VARIABLES--------------- //
  title = 'Customer Manager ';
  // customers: Customer[];
  // filterCustomer: string;
  // customersfilter;
  // ---------------FUNCTIONS--------------- //

  ngOnInit() {
    // this.customerService.getApi().subscribe((res) => {
    //   console.log('Ejecutando ngOnInit');
    //   this.customers = res;
    //   this.dataService.post(this.customers);
    //   this.searchService.postFunction(this.OnChanges);
    // });
  }

  // OnChanges(search: string) {
  //   console.log('Valor de Busqueda: ', search);
  //   this.customersfilter = this.customers.filter((customer) => {
  //     return customer.name.toLowerCase().includes(search);
  //   });
  //   console.log('APP TOTAL :', this.customers);
  //   console.log('APP Filter :', this.customersfilter);
  //   this.dataService.post(this.customersfilter);
  // }
}
