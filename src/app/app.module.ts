import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//---------------COMPONENTES---------------//
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomersComponent } from './customers/customers.component';
import { UserCardComponent } from './user-card/user-card.component';

//---------------SERVICIOS---------------//
import { CustomerService } from './services/customer.service';
import { CustomerInfoComponent } from './customer-info/customer-info.component';

const routes: Routes = [
  // { path: 'contacto', component: ContactoComponent },
  // { path: 'equipo/:id', component: EquipoComponent },
  { path: 'customers/info', component: CustomerInfoComponent },
  { path: 'customers', component: CustomersComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/customers/info', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomersComponent,
    UserCardComponent,
    CustomerInfoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  exports: [RouterModule],
  providers: [CustomerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
