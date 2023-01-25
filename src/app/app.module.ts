import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardDoctorsComponent } from './pages/dashboard-doctors/dashboard-doctors.component';
import { DashboardPatientsComponent } from './pages/dashboard-patients/dashboard-patients.component';
import { NoComponent } from './noFound/no/no.component';
import { NoFoundPagesComponent } from './noFound/no-found-pages/no-found-pages.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterPatientsComponent } from './auth/register-patients/register-patients.component';
import { PatientsTokenComponent } from './pages/patients-token/patients-token.component';
import { DoctorsTokenComponent } from './pages/doctors-token/doctors-token.component';
import { MedicalAppointmentSelectionComponent } from './pages/medical-appointment-selection/medical-appointment-selection.component';
import { MedicalAppointmentListComponent } from './pages/medical-appointment-list/medical-appointment-list.component';
import { NoFoundpagesComponent } from './noFound/no-foundpages.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardDoctorsComponent,
    DashboardPatientsComponent,
    NoComponent,
    NoFoundPagesComponent,
    LoginComponent,
    RegisterPatientsComponent,
    PatientsTokenComponent,
    DoctorsTokenComponent,
    MedicalAppointmentSelectionComponent,
    MedicalAppointmentListComponent,
    NoFoundpagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
