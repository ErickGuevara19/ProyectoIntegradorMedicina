import { Component, Inject, OnInit } from '@angular/core';
import { CreateDoctorDto, DoctorModel,UpdateDoctorDto } from 'src/app/entities/doctor.model';
import { EspecialidadesModel } from 'src/app/entities/especialities.model';
import { DoctorsService } from 'src/app/services/doctors.service';
import { SpecialitiesService } from 'src/app/services/specialities.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'app-doctors-register',
  templateUrl: './doctors-register.component.html',
  styleUrls: ['./doctors-register.component.css'],
})
export class DoctorsRegisterComponent implements OnInit {
  nombreCtrl= new FormControl('',[
    Validators.required, 
    Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/),
  ]);
  apellidoCtrl= new FormControl('',[
    Validators.required,
    Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/)
  ]);
  emailCtrl= new FormControl('',[
    Validators.required,
    Validators.email
  ]);
  direccionCtrl= new FormControl('',[
    Validators.required,
    Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\d\s\-]+$/)
  ]);
  passwordCtrl= new FormControl('',[
    Validators.required,
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*?&-]{8,}$/)
  ]);
  form:any;
  constructor(private doctorsService:DoctorsService,private specialitiesService:SpecialitiesService, private formBuilder:FormBuilder){
    this.nombreCtrl.valueChanges
    .pipe(debounceTime(350))
    .subscribe(value => {
      console.log(value);
    });
  }
  specialities: any[] = [];
  doctors: DoctorModel[] = [];
  updating: boolean = false;
  ngOnInit(): void {
    this.getSpecialities()
    if (history.state.id_doctor) {
      if (typeof history.state === typeof this.doctorModel ) {
        delete history.state.navigationId 
        this.doctorModel = history.state   
        this.updating = true
      }
    }
  }

  /*private buildForm(){
    this.form = this.formBuilder.group ({
      txtNpmbre:['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
    });
  }*/
  doctorModel: UpdateDoctorDto = {
    id_doctor: 0,
    nombre_d: '',
    apellidos_d: '',
    email: '',
    password_d: '',
    dirreccion_d: '',
    id_especialidades: 0,
  }
  doctor: CreateDoctorDto = {
    nombre_d: '',
    apellidos_d: '',
    email: '',
    password_d: '',
    dirreccion_d: '',
    id_especialidades: 0,
  };
  
  registerDoctor(doctor: CreateDoctorDto) {
    console.log(doctor)
    console.log('registro')
    const response = this.doctorsService
      .store(doctor)
      .subscribe((response) => {
        console.log(response);
      });
  }
  print(){
    console.log(this.doctorModel.nombre_d)
    const input = document.getElementById('txtEspecialidad') as HTMLInputElement
    console.log(input.value);
    
  }

  async getSpecialities(){
    const response = this.specialitiesService.getAll().subscribe((response) => {
      this.specialities = response;
    });
  }
  
  updateDoctor(doctor: UpdateDoctorDto) {
    console.log(doctor)
    console.log('update')
    const response = this.doctorsService
      .update(doctor.id_doctor, doctor)
      .subscribe((response) => {
        console.log(response);
      });
  }

  
}
