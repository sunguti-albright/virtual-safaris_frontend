import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import {TouristProfileComponent} from './tourist-profile/tourist-profile.component';
import {TouristRegisterComponent} from './tourist-register/tourist-register.component';
import {TouristLoginComponent} from './tourist-login/tourist-login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pay', component: PaymentComponent },
  { path: 'tourist/profile', component:TouristProfileComponent},
  { path: 'tourist/register', component:TouristRegisterComponent },
  { path: 'tourist/login', component:TouristLoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
