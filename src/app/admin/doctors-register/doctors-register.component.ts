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
  doctor: DoctorModel = {
    id_doctor: 0,
    nombre_d: '',
    apellidos_d: '',
    email: '',
    contrasenia_d: '',
    dirreccion_d: '',
    especialidades: { id_especialidades: 0, descripcion_especialidad: '' },
  };
  ngOnInit(): void {
    this.getSpecialities()
    console.log(history.state)
    this.doctor = history.state  
  }

  registerDoctor(doctor: DoctorModel) {
    const response = this.doctorsService
      .store(doctor)
      .subscribe((response) => {
        console.log(response);
      });
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
