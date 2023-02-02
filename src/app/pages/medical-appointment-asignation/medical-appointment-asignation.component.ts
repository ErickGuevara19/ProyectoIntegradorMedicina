import { Component, OnInit } from '@angular/core';
import { ConsultorioModel } from 'src/app/entities/consultorio.model';
import { CreateMedicalAsignationModel, UpdateMedicalAsignationModel } from 'src/app/entities/medicallist.model';
import { MedicalsectionModel } from 'src/app/entities/medicalselection.model';
import { ConsultorioService } from 'src/app/services/consultorio.service';
import { MedicalasignationService } from 'src/app/services/medicalasignation.service';
import { MedicalselectionService } from 'src/app/services/medicalselection.service';

@Component({
  selector: 'app-medical-appointment-asignation',
  templateUrl: './medical-appointment-asignation.component.html',
  styleUrls: ['./medical-appointment-asignation.component.css']
})
export class MedicalAppointmentAsignationComponent implements OnInit {
  ngOnInit(): void {
    this.AsignationMedical()
    this.Consultorio.push(this.Objeto)
   /*this.AsignationCosultorio()*/
    if (history.state.id_asignacion_medica) {
      if (typeof history.state === typeof this.Create ) {
        delete history.state.navigationId 
        this.Update = history.state   
        this.Updating = true
      }
    }
  }
  constructor(private medicalAsignationService:MedicalasignationService, private medicalselectionService:MedicalselectionService, private consultorioService:ConsultorioService){}
  MedicalCita: MedicalsectionModel[]=[]
  Consultorio : ConsultorioModel[]=[]
  Updating: boolean= false

  registerMedical(medicalAsignation: CreateMedicalAsignationModel) {
    console.log(medicalAsignation)
    console.log('registro')
    const response = this.medicalAsignationService
      .store(medicalAsignation)
      .subscribe((response) => {
        console.log(response);
      });
  }

  updateMedical(medicalAsignation: UpdateMedicalAsignationModel) {
    console.log(medicalAsignation)
    console.log('update')
    const response = this.medicalAsignationService
      .update(medicalAsignation.id_asignacion_medica, medicalAsignation)
      .subscribe((response) => {
        console.log(response);
      });
  }

  Create:CreateMedicalAsignationModel = {    
    id_citamedica: 0,
    id_consultorio:0,
  }

  Update:UpdateMedicalAsignationModel = {   
    id_asignacion_medica:0 ,
    id_citamedica: 0,
    id_consultorio:0,
  }

  AsignationMedical() { 
    this.medicalselectionService.getAll().subscribe((res) => {
      this.MedicalCita= res
      console.table(this.MedicalCita)
    });
  }

  AsignationCosultorio() { 
    this.consultorioService.getAll().subscribe((res) => {
      this.Consultorio= res
      console.table(this.Consultorio)
    });
  }

  Objeto:any = {	id_consultorio: 1,
    nombre_consultorio:'Laboratirio1',
    referencia:'Lab1',
    nombre_doctor:'Hernesto'}

}
