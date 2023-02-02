import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardDoctorsComponent } from './dashboard-doctors/dashboard-doctors.component';
import { DashboardPatientsComponent } from './dashboard-patients/dashboard-patients.component';
import { DoctorsTokenComponent } from './doctors-token/doctors-token.component';
import { MedicalAppointmentListComponent } from './medical-appointment-list/medical-appointment-list.component';
import { MedicalAppointmentSelectionComponent } from './medical-appointment-selection/medical-appointment-selection.component';
import { PatientsTokenComponent } from './patients-token/patients-token.component';
import { FormsModule, NgForm } from '@angular/forms';
import { MedicalAppointmentAsignationComponent } from './medical-appointment-asignation/medical-appointment-asignation.component';
import { NgSelectModule } from '@ng-select/ng-select';




@NgModule({
  declarations: [
    DashboardDoctorsComponent,
    DashboardPatientsComponent,
    DoctorsTokenComponent,
    MedicalAppointmentListComponent,
    MedicalAppointmentSelectionComponent,
    PatientsTokenComponent,
    MedicalAppointmentAsignationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule
  ],
  exports: [
    DashboardDoctorsComponent,
    DashboardPatientsComponent,
    DoctorsTokenComponent,
    MedicalAppointmentListComponent,
    MedicalAppointmentSelectionComponent,
    PatientsTokenComponent,
    MedicalAppointmentAsignationComponent
    
  ],
})
export class PagesmoduleModule { }
