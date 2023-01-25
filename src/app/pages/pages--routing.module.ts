import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardDoctorsComponent } from './dashboard-doctors/dashboard-doctors.component';
import { DashboardPatientsComponent } from './dashboard-patients/dashboard-patients.component';
import { PagesComponent } from './pages.component';
import { AuthmoduleModule } from '../auth/authmodule.module';


const routes: Routes = [
  {
    path: 'dashboard', component: PagesComponent,
    children: [
      { path:'', component: DashboardDoctorsComponent},
      { path: 'doctors', component: DashboardDoctorsComponent},
      { path: 'patients', component: DashboardPatientsComponent },
      { path: 'doctors-token', component: DashboardPatientsComponent },
      { path: 'medical-appoinment-list', component: DashboardPatientsComponent },
      { path: 'medical-appoinment-selection', component: DashboardPatientsComponent },
      { path: 'patients-token', component: DashboardPatientsComponent },
      {path:'',redirectTo:'/dashboard',pathMatch:'full'},
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AuthmoduleModule,
  ]
})
export class PagesRoutingModule { }
