import {
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { Subscription } from 'rxjs';
// ---------------MODELS--------------- //
import { Customer } from '../customer.model';
// ---------------SERVICES--------------- //
import { DataService } from '../services/data.service';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit, OnDestroy {
  // ---------------CONSTRUCTOR--------------- //
  constructor(
    private dataService: DataService,
    private customerService: CustomerService,
    private fb: FormBuilder
  ) {}
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
  OnChange: any;
  formGroup: FormGroup;
  customersfilter;
  // ---------------FUNCTIONS--------------- //

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      Search: [''],
    });
    this.customerService.getApi().subscribe((res) => {
      this.customers = res;
      this.dataService.post(this.customers);
    });
    this.formGroup.get('Search').valueChanges.subscribe((value) => {
      // console.log(value);
      this.OnChanges(value);
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
  OnChanges(search: string) {
    // console.log('Valor de Busqueda: ', search);
    this.customersfilter = this.customers.filter((customer) => {
      return customer.name.toLowerCase().includes(search);
    });
    // console.log('Customers TOTAL :', this.customers);
    // console.log('Customers Filter :', this.customersfilter);
    this.dataService.post(this.customersfilter);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
