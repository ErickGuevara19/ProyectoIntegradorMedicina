import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesComponent } from './pages/pages.component';
import { NoFoundpagesComponent } from './noFound/no-foundpages.component';
import { AdminModule } from './admin/admin.module';
import { PagesmoduleModule } from './pages/pagesmodule.module';
import { SharedmoduleModule } from './shared/sharedmodule.module';
import { AuthmoduleModule } from './auth/authmodule.module';
import { AdminComponent } from './admin/admin.component';
import { MedicalRecordComponent } from './medical-record/medical-record.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    AdminComponent,
    NoFoundpagesComponent,
    MedicalRecordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    PagesmoduleModule,
    SharedmoduleModule,
    AuthmoduleModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
