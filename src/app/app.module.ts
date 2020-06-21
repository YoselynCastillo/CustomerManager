import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//---------------COMPONENTES---------------//
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomersComponent } from './customers/customers.component';
import { UserCardComponent } from './user-card/user-card.component';


//---------------SERVICIOS---------------//
import { CustomerService } from './services/customer.service';



const routes: Routes = [
  // { path: 'contacto', component: ContactoComponent },
  // { path: 'equipo/:id', component: EquipoComponent },
  // { path: 'nosotros', component: NosotrosComponent },
  { path: 'customers', component: CustomersComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/customers', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomersComponent,
    UserCardComponent,
  ],
  imports: [BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule],
  exports: [RouterModule],
  providers: [CustomerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
