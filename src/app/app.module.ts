import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Compnents/header/header.component';
import { FooterComponent } from './Compnents/footer/footer.component';
import { ProductsComponent } from './Compnents/products/products.component';
import { OrderParentComponent } from './Compnents/order-parent/order-parent.component';
import { SidebarComponent } from './Compnents/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainLayoutComponent } from './Compnents/main-layout/main-layout.component';
import { NotFoundComponent } from './Compnents/not-found/not-found.component';
import { ProductDetailsComponent } from './Compnents/product-details/product-details.component';
import { AddProductComponent } from './Compnents/add-product/add-product.component';
import{HttpClientModule} from '@angular/common/http';
import { InsertproductComponent } from './Compnents/Admin/insertproduct/insertproduct.component';
import { UserRegisterComponent } from './Compnents/user-register/user-register.component';
import { HomeComponent } from './Compnents/home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    OrderParentComponent,
    SidebarComponent,
    MainLayoutComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    AddProductComponent,
    InsertproductComponent,
    UserRegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
