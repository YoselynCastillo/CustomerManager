import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css'],
})
export class CustomerInfoComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  arrayCustomer: Customer[];
  cust: Customer;
  private escuchaMensajes(): void {
    this.suscripcionMensajes = this.dataService.escucha().subscribe((msj) => {
      console.log('Se ha recibido el array de customers');
      console.log(msj);
      this.arrayCustomer = msj;
    });
  }
  private suscripcionMensajes: Subscription; // Aquí almacenaremos la suscripción

  ngOnInit(): void {
    this.escuchaMensajes();
    this.route.paramMap.subscribe((params) => {
      this.cust = this.arrayCustomer[+params.get('customerId') - 1];
      console.log(this.cust);
    });
  }
  ngOnDestroy(): void {
    this.suscripcionMensajes.unsubscribe(); // Cancelamos la suscripción cuando se destruya el componente
  }
  modificar() {
    console.log(this.cust);
    console.log(this.arrayCustomer);
  }
}
