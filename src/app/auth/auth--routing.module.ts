import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterPatientsComponent } from './register-patients/register-patients.component';
import { RouterModule, Routes } from '@angular/router';

const routes :Routes =[
  {path:'login',component:LoginComponent},
  {path:'registerPatient',component:RegisterPatientsComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
