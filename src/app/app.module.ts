import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//---------------COMPONENTS---------------//
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomersComponent } from './customers/customers.component';
import { UserCardComponent } from './user-card/user-card.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';

//---------------SERVICES---------------//
import { CustomerService } from './services/customer.service';
import { DataService } from './services/data.service';
import { ListViewComponent } from './list-view/list-view.component';
import { CardViewComponent } from './card-view/card-view.component';

const routes: Routes = [
  {
    path: 'customers',
    component: CustomersComponent,
    children: [
      {
        path: 'cardview',
        component: CardViewComponent,
      },
      {
        path: 'listview',
        component: ListViewComponent,
      },
    ],
  },
  { path: 'customers/:customerId', component: CustomerInfoComponent },
  { path: '**', redirectTo: '/customers/cardview'},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomersComponent,
    UserCardComponent,
    CustomerInfoComponent,
    ListViewComponent,
    CardViewComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  exports: [RouterModule],
  providers: [CustomerService, DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
