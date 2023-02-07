import { Component, OnInit } from '@angular/core';
import { ConsultorioModel } from 'src/app/entities/consultorio.model';
import { CreateMedicalAsignationModel, UpdateMedicalAsignationModel } from 'src/app/entities/medicallist.model';
import { CreateMedicalSection, MedicalsectionModel } from 'src/app/entities/medicalselection.model';
import { ConsultorioService } from 'src/app/services/consultorio.service';
import { MedicalasignationService } from 'src/app/services/medicalasignation.service';
import { MedicalselectionService } from 'src/app/services/medicalselection.service';

@Component({
  selector: 'app-medical-appointment-asignation',
  templateUrl: './medical-appointment-asignation.component.html',
  styleUrls: ['./medical-appointment-asignation.component.css']
})
export class MedicalAppointmentAsignationComponent implements OnInit {
  asignaciones: boolean = true
  ngOnInit(): void {
    this.AsignationMedical()
    this.AsignationCosultorio()
    this.listarconsultorio();
    
  }

  constructor(private medicalAsignationService:MedicalasignationService, private medicalselectionService:MedicalselectionService, private consultorioService:ConsultorioService){}
  MedicalCita: MedicalsectionModel[]=[]
  Consultorio : ConsultorioModel[]=[]
  consultorio : ConsultorioModel[]=[]
  Updatelist: UpdateMedicalAsignationModel[]=[]
  Updating: boolean= false
  Create:CreateMedicalAsignationModel = {    
    id_cita_medica: 0,
    id_consultorio:0,
    
  }

  Update:UpdateMedicalAsignationModel = {   
    id_asignacion_medica:0 ,
    id_cita_medica: 0,
    id_consultorio:0,
  }
  Objeto:any = {	id_consultorio: 1,
    nombre_consultorio:'Laboratirio1',
    referencia:'Lab1',
    nombre_doctor:'Hernesto'}

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

  AsignationMedical() { 
    this.medicalselectionService.getAll().subscribe((res) => {
      this.MedicalCita= res
      console.table(this.MedicalCita)
    });
  }

  AsignationCosultorio() { 
    this.consultorioService.getAll().subscribe((res) => {
      this.Consultorio= res
    });
  }

  

    
    cleanmodel(id:number){
      this.Create.id_consultorio = 1,
      this.Create.id_cita_medica=id
    }

    GetByMedical(id:number) { 
      console.log(id)
      this.medicalAsignationService.getOne(id).subscribe((res) => {
        if (res.length > 0) {
          this.asignaciones = true
          this.Updatelist = res
          this.Editar(id)
          console.log(this.Updatelist)
        }else {
          this.asignaciones = false
        }
      });
      
    }

    Editar(id:number){      
      this.Update.id_cita_medica= id  
      this.Update.id_asignacion_medica= this.Updatelist[0].id_asignacion_medica
      this.Update.id_consultorio= this.Updatelist[0].id_consultorio
      console.log(this.Update)
    }

    listarconsultorio(){
      this.consultorioService.getAll().subscribe((res) =>{
        this.consultorio = res
          console.log(res)
        }
      )
    }
}
