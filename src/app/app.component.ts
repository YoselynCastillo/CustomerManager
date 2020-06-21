import { Component, OnInit } from '@angular/core';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Customer Manager ';
  constructor(private customerService: CustomerService) {}
  users: any;

  ngOnInit() {
    console.log('EnAppComponent');
    this.customerService.getApi().subscribe((res) => {
      this.users = res;
    });
  }
}
