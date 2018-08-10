import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { PatientRegistrationComponent } from './pages/patient-registration/patient-registration.component';
import { HospitalRegistrationComponent } from './hospital-setup/hospital-registration/hospital-registration.component';

const appRoutes: Routes =[
  { path: '', component: HomeComponent},  
  { path: 'patient-registration', component: PatientRegistrationComponent},
  { path: 'hospital-registration', component: HospitalRegistrationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PatientRegistrationComponent,
    HospitalRegistrationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
