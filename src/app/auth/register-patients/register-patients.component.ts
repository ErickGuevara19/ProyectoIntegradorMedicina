import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlergiasModel } from 'src/app/entities/alergias.model';
import { DiscapacidadesModel } from 'src/app/entities/discapacidades.model';
import { CreatePacientesDto, PatientModel, UpdatePacientesDto } from 'src/app/entities/patients.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-register-patients',
  templateUrl: './register-patients.component.html',
  styleUrls: ['./register-patients.component.css']
})
export class RegisterPatientsComponent implements OnInit {

  constructor(private patientService:PatientService ) {
    

   }
   patientModel: UpdatePacientesDto={
    id_paciente :0,
    nombre_paciente:'',
    apellido_paciente :'',
    direccion_paciente :'',
    telefono_paciente :'',
    email_paciente :'',
    password_paciente :'',
    tlf_familiar_paciente :'',
    fecha_nacimiento_paciente : new Date,
    genero_paciente: true,
    id_alergias: 0,
    alergia_nombre:'',
    id_discapacidades:0,
    discapacidad_nombre: '',
    
   }
   updating : boolean = false
  ngOnInit(): void {
    this.listarAlergias(),
    this.listarDiscapacidades()
    if (history.state.id_paciente) {
      if (typeof history.state === typeof this.patientModel ) {
        this.updating = true
        this.patientModel = history.state
        console.log(history.state)
        delete history.state.navigationId  
      }
    }
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
    fecha_nacimiento_paciente : new Date,
    genero_paciente: true,
    alergias: {id_alergia: 0 , nombre_alergia:'',descripcion_alergia:''},
    alergia_nombre:'',
    discapacidades: {id_discapacidades : 0, nombre_discapacidad : '',descripcion_discapacidad :''},
    discapacidad_nombre: '',
  };

  alergias : AlergiasModel[]=[]
  discapacidades : DiscapacidadesModel[]=[]

  registerPaciente(paciente: CreatePacientesDto) {
    
    const response = this.patientService
      .createPatient(paciente)
      .subscribe((response) => {
        console.log(response);
      });
  }
  updateDoctor(paciente: UpdatePacientesDto) {
    const response = this.patientService
      .updatePatient(paciente.id_paciente, paciente)
      .subscribe((response) => {
        console.log(response);
      });
  }

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
  
 
}
