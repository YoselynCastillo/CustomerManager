import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { DataService } from '../services/data.service';
import { SearchService } from '../services/search.service';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private dataService: DataService,
    private searchService: SearchService
  ) {}
  formGroup: FormGroup;
  dato = {
    name: 'Pedro Albarracin',
    age: 23,
  };
  datosfilter;
  datos = [
    {
      name: 'pedro',
      age: 23,
    },
    {
      name: 'Maria',
      age: 13,
    },
    {
      name: 'Joseito',
      age: 45,
    },
    {
      name: 'Javier',
      age: 11,
    },
    {
      name: 'Petra',
      age: 54,
    },
    {
      name: 'Carbonatado',
      age: 55,
    },
    {
      name: 'Clementina',
      age: 23,
    },
    {
      name: 'Lucia',
      age: 23,
    },
  ];
  customers: Customer[];
  filterCustomer: string;
  customersfilter;
  ngOnInit() {
    this.formGroup = this.fb.group({
      Search: [''],
    });
    this.customerService.getApi().subscribe((res) => {
      console.log('Ejecutando ngOnInit');
      this.customers = res;
      this.dataService.post(this.customers);
      this.searchService.postFunction(this.OnChanges);
    });
    // Subscribe to valueChanges observable
    this.formGroup.get('Search').valueChanges.subscribe((value) => {
      console.log(value);
      // console.log(this.dato.name.toLowerCase().includes(value));
      this.OnChanges(value);
    });
  }

  filtrar(search: string) {
    // console.log('Valor Recibido: ', value);
    // this.datosfilter = this.datos.filter((dato) => {
    //   return dato.name.toLowerCase().includes(value);
    // });
    // console.log('Totales: ', this.datos);
    // console.log('Datos Filtrados', this.datosfilter);
    console.log('Valor de Busqueda: ', search);

    this.customersfilter = this.customers.filter((customer) => {
      return customer.name.toLowerCase().includes(search);
    });
    console.log('Customers TOTAL :', this.customers);
    console.log('Customers Filter :', this.customersfilter);
  }

  OnChanges(search: string) {
    console.log('Valor de Busqueda: ', search);

    this.customersfilter = this.customers.filter((customer) => {
      return customer.name.toLowerCase().includes(search);
    });
    console.log('Customers TOTAL :', this.customers);
    console.log('Customers Filter :', this.customersfilter);
    this.dataService.post(this.customersfilter);
  }
}
