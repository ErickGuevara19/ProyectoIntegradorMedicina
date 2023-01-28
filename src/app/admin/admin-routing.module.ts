import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsRegisterComponent } from './doctors-register/doctors-register.component';
import { AdminComponent } from './admin.component';
import { MedicalAppointmentRegistrationComponent } from './medical-appointment-registration/medical-appointment-registration.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';

const routes: Routes = [
  {path: 'admin',component: AdminComponent, children: [
    {path: 'doctor-register', component: DoctorsRegisterComponent},
    {path: 'medical-appointment-registration', component: MedicalAppointmentRegistrationComponent},
    {path: 'doctor-list', component: DoctorsListComponent},
    {path: '', redirectTo:'/dashboard', pathMatch:'full'}
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
export class AdminRoutingModule { }
