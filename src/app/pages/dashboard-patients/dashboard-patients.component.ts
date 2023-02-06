import { Component, OnInit,inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { PatientModel } from 'src/app/entities/patients.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-dashboard-patients',
  templateUrl: './dashboard-patients.component.html',
  styleUrls: ['./dashboard-patients.component.css']
})
export class DashboardPatientsComponent implements OnInit {
  usuario: Object = {}

  pacientes: PatientModel[] = [];
  private cookieService = inject(CookieService);
  constructor(private patientService:PatientService,
    ){}

  ngOnInit(): void {
    this.listarPacientes();
    this.usuario =  JSON.parse(this.cookieService.get('user'))
    console.log(this.usuario)
    
  }


  listarPacientes(){
    this.patientService.getAllPacientes().subscribe((res) =>{
      this.pacientes = res
        console.table(this.pacientes)
      }
    )
  }
  
}