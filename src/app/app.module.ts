import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { productcomponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { customerdetail } from './customer/customerdetail/customerdetail.component';

@NgModule({
  declarations: [
    AppComponent,productcomponent, CustomerComponent,customerdetail
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
