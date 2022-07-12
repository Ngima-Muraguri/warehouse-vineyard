import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaymentComponent } from './payment/payment.component';
import { TrackComponent } from './track/track.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductsComponent } from './products/products.component';
import { LogoutComponent } from './logout/logout.component';
import { SingleItemComponent } from './single-item/single-item.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LoginComponent } from './login/login.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CartComponent } from './cart/cart.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path: 'payment', component:PaymentComponent},
  {path: 'track', component:TrackComponent},
  {path: 'inventory', component:InventoryComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'logout', component:LogoutComponent},
  {path: 'single-item', component:SingleItemComponent},
  {path: 'update-product', component:UpdateProductComponent},
  {path: 'admin-login', component:AdminLoginComponent},
  {path: 'sign-up', component:SignUpComponent},
  {path: 'home', component:HomeComponent},
  {path: 'admin-panel', component:AdminPanelComponent},
  {path: 'login', component:LoginComponent},
  {path: 'manage-products', component:ManageProductsComponent},
  {path: 'single-product', component:SingleProductComponent},
  {path: 'add-product', component:AddProductComponent},
  {path: 'edit-profile', component:EditProfileComponent},
  {path: 'cart', component:CartComponent},
  {path: 'add-inventory', component:AddInventoryComponent},
  {path: 'profile', component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
