import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlergiasModel } from 'src/app/entities/alergias.model';
import { DiscapacidadesModel } from 'src/app/entities/discapacidades.model';
import { PatientModel } from 'src/app/entities/patients.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-register-patients',
  templateUrl: './register-patients.component.html',
  styleUrls: ['./register-patients.component.css']
})
export class RegisterPatientsComponent implements OnInit {

  constructor(private patientService:PatientService ) {

   }
  ngOnInit(): void {
    this.listarAlergias(),
    this.listarDiscapacidades()
  }
  
  paciente: PatientModel= {
    id_paciente :0,
    nombre_paciente:'',
    apellido_paciente :'',
    direccion_paciente :'',
    telefono_paciente :'',
    email_paciente :'',
    password_paciente :'',
    tlf_familiar_paciente :'',
    fecha_nacimiento_paciente : '',
    genero_paciente: true,
    alergias: {id_alergia: 0 , nombre_alergia:'',descripcion_alergia:''},
    discapacidades: {id_discapacidades : 0, nombre_discapacidad : '',descripcion_discapacidad :''},
  };
  alergias : AlergiasModel[]=[]
  discapacidades : DiscapacidadesModel[]=[]

  listarAlergias(){
    this.patientService.getAllergies().subscribe((res) =>{
      this.alergias = res
        console.log(res)
      }
    )
  }
  listarDiscapacidades(){
    this.patientService.getDiscapacidades().subscribe((res) =>{
      this.discapacidades = res
        console.log(res)
      }
    )
  }
  guardarPaciente(){
    this.patientService.createPatients(this.paciente).subscribe((res) =>{
      this.paciente = res
        console.log(res)
      }
    )

  }
  
 
}
