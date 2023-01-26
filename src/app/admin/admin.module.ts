import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsRegisterComponent } from './doctors-register/doctors-register.component';
import { MedicalAppointmentRegistrationComponent } from './medical-appointment-registration/medical-appointment-registration.component';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [DoctorsRegisterComponent,MedicalAppointmentRegistrationComponent],
  imports: [
    CommonModule,
    NgSelectModule
  ],
  exports: [
    DoctorsRegisterComponent,MedicalAppointmentRegistrationComponent
  ]
})
export class AdminModule { }
