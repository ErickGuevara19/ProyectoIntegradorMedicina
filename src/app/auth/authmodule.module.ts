import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterPatientsComponent } from './register-patients/register-patients.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterPatientsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoginComponent,
    RegisterPatientsComponent,
    AuthComponent
  ]
})
export class AuthmoduleModule { }
