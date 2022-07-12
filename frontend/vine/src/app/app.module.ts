import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CartComponent } from './cart/cart.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SingleItemComponent } from './single-item/single-item.component';
import { TrackComponent } from './track/track.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { SingleProductComponent } from './single-product/single-product.component';

@NgModule({
  declarations: [
    AppComponent,
    AddInventoryComponent,
    AddProductComponent,
    AdminLoginComponent,
    AdminPanelComponent,
    CartComponent,
    EditProfileComponent,
    HomeComponent,
    InventoryComponent,
    LoginComponent,
    LogoutComponent,
    ManageProductsComponent,
    PaymentComponent,
    ProductsComponent,
    ProfileComponent,
    SignUpComponent,
    SingleItemComponent,
    TrackComponent,
    UpdateProductComponent,
    SingleProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
