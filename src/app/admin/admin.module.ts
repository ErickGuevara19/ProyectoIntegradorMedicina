import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsRegisterComponent } from './doctors-register/doctors-register.component';
import { MedicalAppointmentRegistrationComponent } from './medical-appointment-registration/medical-appointment-registration.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DoctorsRegisterComponent,MedicalAppointmentRegistrationComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule
  ],
  exports: [
    DoctorsRegisterComponent,MedicalAppointmentRegistrationComponent
  ]
})
export class AdminModule { }
