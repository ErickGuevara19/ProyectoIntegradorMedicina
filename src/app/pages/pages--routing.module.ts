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
import { PacienteGuard } from '../guards/paciente.guard';
import { DoctorGuard } from '../guards/doctor.guard';
import { AdminGuard } from '../guards/admin.guard';


const routes: Routes = [
  {
    path: 'dashboard', component: PagesComponent,
    children: [
      
      { path: 'doctors', component: DashboardDoctorsComponent,canActivate: [DoctorGuard]},
      { path: 'patient', component: DashboardPatientsComponent,canActivate: [PacienteGuard]},
      { path: 'doctors-token', component: DoctorsTokenComponent,canActivate: [DoctorGuard] },
      { path: 'medical-appoinment-list', component: MedicalAppointmentListComponent,canActivate: [DoctorGuard] },
      { path: 'medical-appoinment-selection', component: MedicalAppointmentSelectionComponent,canActivate: [PacienteGuard]  },
      { path: 'patients-token', component: PatientsTokenComponent,canActivate: [PacienteGuard] },
      { path: 'medical-appoinment-asignation', component: MedicalAppointmentAsignationComponent,canActivate: [AdminGuard] },
      {path:'',redirectTo:'/dashboard/patient',pathMatch:'full'},
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
