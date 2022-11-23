import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Compnents/add-product/add-product.component';
import { InsertproductComponent } from './Compnents/Admin/insertproduct/insertproduct.component';
import { HomeComponent } from './Compnents/home/home.component';
import { MainLayoutComponent } from './Compnents/main-layout/main-layout.component';
import { NotFoundComponent } from './Compnents/not-found/not-found.component';
import { OrderParentComponent } from './Compnents/order-parent/order-parent.component';
import { ProductDetailsComponent } from './Compnents/product-details/product-details.component';
import { ProductsComponent } from './Compnents/products/products.component';
import { UserRegisterComponent } from './Compnents/user-register/user-register.component';

const routes: Routes = [
  {path:'', component:MainLayoutComponent,children:[
    {path:'',redirectTo:'Order',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path: 'Products', component:ProductsComponent},
    {path:'Products/:pid',component:ProductDetailsComponent},
    {path:'Order', component:OrderParentComponent},
    {path:"NewProduct",component:AddProductComponent},
    {path:"admin/insertproduct",component:InsertproductComponent},
    {path:"register",component:UserRegisterComponent}
    
]},
{path:'**',component:NotFoundComponent},//wildcard

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
