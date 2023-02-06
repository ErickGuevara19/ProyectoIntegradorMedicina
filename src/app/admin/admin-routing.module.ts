import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsRegisterComponent } from './doctors-register/doctors-register.component';
import { AdminComponent } from './admin.component';
import { MedicalAppointmentRegistrationComponent } from './medical-appointment-registration/medical-appointment-registration.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { AdminGuard } from '../guards/admin.guard';

const routes: Routes = [
  {path: 'admin',component: AdminComponent, children: [
    {path: 'doctor-register', component: DoctorsRegisterComponent,canActivate: [AdminGuard]},
    {path: 'medical-appointment-registration', component: MedicalAppointmentRegistrationComponent},
    {path: 'doctor-list', component: DoctorsListComponent,canActivate: [AdminGuard]},
    {path: '', redirectTo:'/admin/doctor-list', pathMatch:'full'}
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
