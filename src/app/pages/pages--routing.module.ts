import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardDoctorsComponent } from './dashboard-doctors/dashboard-doctors.component';
import { DashboardPatientsComponent } from './dashboard-patients/dashboard-patients.component';
import { PagesComponent } from './pages.component';
import { AuthmoduleModule } from '../auth/authmodule.module';
import { DoctorsTokenComponent } from './doctors-token/doctors-token.component';
import { MedicalAppointmentListComponent } from './medical-appointment-list/medical-appointment-list.component';
import { MedicalAppointmentSelectionComponent } from './medical-appointment-selection/medical-appointment-selection.component';
import { PatientsTokenComponent } from './patients-token/patients-token.component';
import { MedicalAppointmentAsignationComponent } from './medical-appointment-asignation/medical-appointment-asignation.component';


const routes: Routes = [
  {
    path: 'dashboard', component: PagesComponent,
    children: [
      
      { path: 'doctors', component: DashboardDoctorsComponent},
      { path: 'patient', component: DashboardPatientsComponent},
      { path: 'doctors-token', component: DoctorsTokenComponent },
      { path: 'medical-appoinment-list', component: MedicalAppointmentListComponent },
      { path: 'medical-appoinment-selection', component: MedicalAppointmentSelectionComponent  },
      { path: 'patients-token', component: PatientsTokenComponent },
      { path: 'medical-appoinment-asignation', component: MedicalAppointmentAsignationComponent },
      {path:'',redirectTo:'/dashboard',pathMatch:'full'},
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
