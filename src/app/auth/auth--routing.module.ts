import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterPatientsComponent } from './register-patients/register-patients.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { RegisterGuard } from '../guards/register.guard';

const routes :Routes =[
  {path:'login',component:LoginComponent,canActivate: [AuthGuard]},
  {path:'registerPatient',component:RegisterPatientsComponent,canActivate:[RegisterGuard]},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
