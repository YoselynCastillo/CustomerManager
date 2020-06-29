import {
  Component,
  OnChanges,
  OnInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
// ---------------MODELS--------------- //
import { Customer } from '../customer.model';
// ---------------SERVICES--------------- //
import { DataService } from '../services/data.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit, OnDestroy {
  // ---------------CONSTRUCTOR--------------- //
  constructor(
    private dataService: DataService,
    private searchService: SearchService,
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
  private subscriptionSearch: Subscription;
  OnChange: any;
  formGroup: FormGroup;
  // ---------------FUNCTIONS--------------- //

  ngOnInit(): void {
    this.getMessages();

    this.formGroup = this.fb.group({
      Search: [''],
    });
    // Subscribe to valueChanges observable
    this.formGroup.get('Search').valueChanges.subscribe((value) => {
      console.log(value);
      console.log('customers dentros de cardview: ', this.customers);
      this.OnChange(value);
    });
  }

  private getMessages(): void {
    this.subscription = this.dataService.get().subscribe((msj) => {
      this.customers = msj;
      console.log('dentro de getMess: ', this.customers);
    });
    this.subscriptionSearch = this.searchService
      .getFunction()
      .subscribe((msj) => {
        this.OnChange = msj;
        console.log('funcion que llega: ',this.OnChange);
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
    this.subscriptionSearch.unsubscribe();
  }
}
