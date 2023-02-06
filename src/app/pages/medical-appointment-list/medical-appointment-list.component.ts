import { Component } from '@angular/core';
import { MedicalappointmentAsignationModel } from 'src/app/entities/medicallist.model';

import { MedicallistService } from 'src/app/services/medicallist.service';

@Component({
  selector: 'app-medical-appointment-list',
  templateUrl: './medical-appointment-list.component.html',
  styleUrls: ['./medical-appointment-list.component.css']
})
export class MedicalAppointmentListComponent {
medicales: any;
  constructor(private medicalserviceService: MedicallistService) {}
  Medicalappointment: MedicalappointmentAsignationModel[] = [];
  ngOnInit(): void {
    this.listarMedical();
    this.Prueba2();
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

