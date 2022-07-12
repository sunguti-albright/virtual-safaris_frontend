import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PaymentComponent } from './payment/payment.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { TouristProfileComponent } from './tourist-profile/tourist-profile.component';
import { TouristRegisterComponent } from './tourist-register/tourist-register.component';
import { TouristLoginComponent } from './tourist-login/tourist-login.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    HomeComponent,
    TouristProfileComponent,
    TouristRegisterComponent,
    TouristLoginComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
