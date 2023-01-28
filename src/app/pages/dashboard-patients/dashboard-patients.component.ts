import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-dashboard-patients',
  templateUrl: './dashboard-patients.component.html',
  styleUrls: ['./dashboard-patients.component.css']
})
export class DashboardPatientsComponent implements OnInit {
  constructor(private patientService:PatientService){}
  ngOnInit(): void {
    this.listarPacientes();
  }

  listarPacientes(){
    this.patientService.getAllPacientes().subscribe(
      res=>{
        console.log(res)
      }
    )
  }
}