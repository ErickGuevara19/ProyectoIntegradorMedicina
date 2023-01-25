import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {DashboardPatientsComponent} from './dashboard-patients/dashboard-patients.component';
import { DashboardDoctorsComponent } from './dashboard-doctors/dashboard-doctors.component';
import { DoctorsTokenComponent } from './doctors-token/doctors-token.component';
import { MedicalAppointmentListComponent } from './medical-appointment-list/medical-appointment-list.component';
import { MedicalAppointmentSelectionComponent } from './medical-appointment-selection/medical-appointment-selection.component';
import { PatientsTokenComponent } from './patients-token/patients-token.component';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardPatientsComponent,
    DashboardDoctorsComponent,
    DoctorsTokenComponent,
    MedicalAppointmentListComponent,
    MedicalAppointmentSelectionComponent,
    PatientsTokenComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DashboardPatientsComponent, DashboardDoctorsComponent, PagesComponent, DoctorsTokenComponent,
    MedicalAppointmentListComponent,
    MedicalAppointmentSelectionComponent,
    PatientsTokenComponent],
})
export class PagesmoduleModule { }
