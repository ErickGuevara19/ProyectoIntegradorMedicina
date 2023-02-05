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
    this.AsignationCosultorio()
    this.Model()
    
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
  Updatelist: UpdateMedicalAsignationModel[]=[]
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
    id_cita_medica: 0,
    id_consultorio:0,
  }

  Update:UpdateMedicalAsignationModel = {   
    id_asignacion_medica:0 ,
    id_cita_medica: 0,
    id_consultorio:0,
  }

  AsignationMedical() { 
    this.medicalselectionService.getAll().subscribe((res) => {
      this.MedicalCita= res
    });
  }

  AsignationCosultorio() { 
    this.consultorioService.getAll().subscribe((res) => {
      this.Consultorio= res
      console.table(this.Consultorio)
      console.log('Consultorio')
    });
  }

  Objeto:any = {	id_consultorio: 1,
    nombre_consultorio:'Laboratirio1',
    referencia:'Lab1',
    nombre_doctor:'Hernesto'}

    Model(){
      const myModal = document.getElementById('myModel') as HTMLElement
      const myInput = document.getElementById('myInput') as HTMLInputElement
      
      myModal.addEventListener('shown.bs.modal', () => {
        myInput.focus()
      })
      
    }
    
    cleanmodel(id:number){
      this.Create.id_consultorio =1,
      this.Create.id_cita_medica=id
    }

    GetByMedical(id:number) { 
      console.log(id)
      this.medicalAsignationService.getOne(id).subscribe((res) => {
        this.Updatelist = res
      });
    }

    Editar(id:number){      
      this.Update.id_cita_medica= id  
      this.Update.id_asignacion_medica= this.Updatelist[0].id_asignacion_medica
      this.Update.id_consultorio= this.Updatelist[0].id_consultorio

    }
}
