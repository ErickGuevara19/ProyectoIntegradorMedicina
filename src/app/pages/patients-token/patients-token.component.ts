import { Component, inject, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { PatientModel } from 'src/app/entities/patients.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patients-token',
  templateUrl: './patients-token.component.html',
  styleUrls: ['./patients-token.component.css']
})
export class PatientsTokenComponent implements OnInit {
  usuario: PatientModel[]=[] 

  pacientes: PatientModel[] = [];
  
  private cookieService = inject(CookieService);
  constructor(private patientService:PatientService,){}

  ngOnInit(): void {
    const usuario =  JSON.parse(this.cookieService.get('user'))
    this.listarPacientesById(usuario.id_paciente);
    
  }


  listarPacientesById(id:number){
    console.log(id)
    this.patientService.getPacientesById(id).subscribe((res) =>{
      this.usuario= res
        console.table(this.usuario)
      }
    )
  }

}
