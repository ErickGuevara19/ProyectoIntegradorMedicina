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
    id_cita_medica: {
      id_cita_medica: 1,
      id_paciente: {    id_paciente:9,
        nombre_paciente:'lolo',
        apellido_paciente:'lolo',
        direccion_paciente:'lolo',
        telefono_paciente:'lolo',
        email_paciente:'lolo',
        password_paciente:'lol',
        tlf_familiar_paciente:'lolo',
        fecha_nacimiento_paciente: new Date,
        genero_paciente: true,
        alergias: {    id_alergia:0,
          nombre_alergia:  'lolo',
          descripcion_alergia:'lolo',},
        discapacidades:{    
          id_discapacidades:5,
          nombre_discapacidad: 'lolo',
          descripcion_discapacidad: 'lolo'}},
      id_doctor:{  id_doctor:9,
        nombre_d:'lolo',
        apellidos_d:'lolo',
        email:'lolo',
        dirreccion_d:'lolo',
        password_d:'lolo',
        especialidades: 'a'},
      fecha_asignada: new Date(),
      hora_inicio: '12:00',
      hora_fin:'loli',},
    id_consultorio: {	
      id_consultorio: 1,
      nombre_consultorio: 'lola',
      referencia: 'lola',
      nombre_doctor:{  id_doctor:1,
      nombre_d:'lolita',
        apellidos_d:'johan',
        email:'jose@',
        dirreccion_d:'lola',
        password_d:'lolaaa',
        especialidades: 'a' }},

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

