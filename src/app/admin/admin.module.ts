import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsRegisterComponent } from './doctors-register/doctors-register.component';
import { MedicalAppointmentRegistrationComponent } from './medical-appointment-registration/medical-appointment-registration.component';



@NgModule({
  declarations: [DoctorsRegisterComponent,MedicalAppointmentRegistrationComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    DoctorsRegisterComponent,MedicalAppointmentRegistrationComponent
  ]
})
export class AdminModule { }
