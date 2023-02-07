import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlergiasModel } from 'src/app/entities/alergias.model';
import { DiscapacidadesModel } from 'src/app/entities/discapacidades.model';
import { CreatePacientesDto, PatientModel, UpdatePacientesDto } from 'src/app/entities/patients.model';
import { PatientService } from 'src/app/services/patient.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'app-register-patients',
  templateUrl: './register-patients.component.html',
  styleUrls: ['./register-patients.component.css']
})
export class RegisterPatientsComponent implements OnInit {


  nombreCtrl= new FormControl('',[
    Validators.required, 
    Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/),
  ]);
  apellidoCtrl= new FormControl('',[
    Validators.required,
    Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/)
  ]);
  telefonoCtrl= new FormControl('',[
    Validators.required, 
    Validators.pattern(/^[0-9]+$/),
    Validators.maxLength(10),
    Validators.minLength(10)
  ])
    
  emailCtrl= new FormControl('',[
    Validators.required,
    Validators.email
  ]);
  /*direccionCtrl= new FormControl('',[
    Validators.required,
    Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\d\s\-]+$/)
  ]);*/
  passwordCtrl= new FormControl('',[
    Validators.required,
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*?&-]{8,}$/),
  ]);

  confirmarpasswordCtrl =new FormControl('',[
    Validators.required,
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*?&-]{8,}$/),
    
  ]);
  
  

  


  form:any;








  constructor(private patientService:PatientService, private formBuilder:FormBuilder) {

    this.nombreCtrl.valueChanges
    .pipe(debounceTime(350))
    .subscribe(value => {
      console.log(value);
    });
  
    
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
  
  paciente: CreatePacientesDto= {
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
    id_discapacidades: 0,
  };

  alergias : AlergiasModel[]=[]
  discapacidades : DiscapacidadesModel[]=[]

  registerPaciente(paciente: CreatePacientesDto) {
    console.log(paciente)
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
  confirmarPassword :string =""
 
}
