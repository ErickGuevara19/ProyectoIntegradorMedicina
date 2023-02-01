import { Component, Inject, OnInit } from '@angular/core';
import { CreateDoctorDto, DoctorModel } from 'src/app/entities/doctor.model';
import { EspecialidadesModel } from 'src/app/entities/especialities.model';
import { DoctorsService } from 'src/app/services/doctors.service';
import { SpecialitiesService } from 'src/app/services/specialities.service';

@Component({
  selector: 'app-doctors-register',
  templateUrl: './doctors-register.component.html',
  styleUrls: ['./doctors-register.component.css'],
})
export class DoctorsRegisterComponent implements OnInit {
  constructor(private doctorsService:DoctorsService,private specialitiesService:SpecialitiesService){}
  specialities: any[] = [];
  doctors: DoctorModel[] = [];
  updating: boolean = false;
  doctorModel: DoctorModel = {
    id_doctor: 0,
    nombre_d: '',
    apellidos_d: '',
    email: '',
    contrasenia_d: '',
    dirreccion_d: '',
    especialidades: {
      id_especialidades: 0,
      descripcion_especialidad: ''
    }
  }
  doctor: CreateDoctorDto = {
    nombre_d: '',
    apellidos_d: '',
    email: '',
    contrasenia_d: '',
    dirreccion_d: '',
    id_especialidades: 0,
  };
  ngOnInit(): void {
    this.getSpecialities()
    if (history.state.length> 0) {
      if (typeof history.state === typeof this.doctorModel ) {
        this.doctorModel = history.state  
        console.log(history.state)
        this.updating = true
      }
    }
  }
  registerDoctor(doctor: CreateDoctorDto) {
    console.log(this.doctor)
    const response = this.doctorsService
      .store(doctor)
      .subscribe((response) => {
        console.log(response);
      });
  }
  print(){
    console.log(this.doctor.id_especialidades)
  }

  async getSpecialities(){
    const response = this.specialitiesService.getAll().subscribe((response) => {
      this.specialities = response;
    });
  }
  
  updateDoctor(doctor: DoctorModel) {
    const response = this.doctorsService
      .update(doctor.id_doctor, doctor)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
