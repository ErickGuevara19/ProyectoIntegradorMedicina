import { Component,inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DoctorModel } from 'src/app/entities/doctor.model';
import { MedicalappointmentAsignationModel } from 'src/app/entities/medicallist.model';

import { MedicallistService } from 'src/app/services/medicallist.service';

@Component({
  selector: 'app-medical-appointment-list',
  templateUrl: './medical-appointment-list.component.html',
  styleUrls: ['./medical-appointment-list.component.css']
})
export class MedicalAppointmentListComponent {
medicales: any;
usuario: DoctorModel = {
  nombre_d: '',
  apellidos_d: '',
  dirreccion_d: '',
  email: '',
  password_d: '',
  id_doctor: 0,
  especialidades: ''
}
private cookieService = inject(CookieService)

  constructor(private medicalserviceService: MedicallistService) {}
  Medicalappointment: MedicalappointmentAsignationModel[] = [];
  doctorPipe = this.usuario.nombre_d
  ngOnInit(): void {
    this.listarMedical();
    this.Prueba2();
    this.recibirUsuario();
  }
  recibirUsuario(){
    const Jsonusuario =  this.cookieService.get('user')
    this.usuario = JSON.parse(this.cookieService.get('user'))
    console.log(this.usuario)
  }
  
  listarMedical() { 
    this.medicalserviceService.getAllMedicales().subscribe((res) => {
      this.Medicalappointment = res
      console.table(this.Medicalappointment)
    });
  }

  Prueba:MedicalappointmentAsignationModel = {    
    id_asignacion_medica: 1,
    id_cita_medica: 0,
    id_consultorio: 0,
    fecha_asignada: '',
    horario: '',
    id_consultoriol: '',
    nombre_doctor: '',
    apellido_doctor: '',
    nombre_paciente: '',
    apellido_paciente: ''  
  }
Prueba2(){
  this.Medicalappointment.push(this.Prueba)
  console.log(this.Medicalappointment)
}
}


 /* deleteDoctor(id: number) {
    const response = this.medicalserviceService.destroy(id).subscribe(response => {
      this.doctorList = this.doctorList.filter(doctor => cita_medica.id_citamedica != id)
      console.log(response);
    });
  }*/

