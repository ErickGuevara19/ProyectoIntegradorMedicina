import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { NoFoundpagesComponent } from './noFound/no-foundpages.component';
import { AuthRoutingModule } from './auth/auth--routing.module';
import { PagesRoutingModule } from './pages/pages--routing.module';

const routes :Routes =[

  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'**',component:NoFoundpagesComponent},


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PagesRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
