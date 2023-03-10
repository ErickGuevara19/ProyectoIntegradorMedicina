import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DoctorModel } from 'src/app/entities/doctor.model';
import { HorarioModel } from 'src/app/entities/horario.model';
import { CreateMedicalSection, MedicalsectionModel } from 'src/app/entities/medicalselection.model';
import { PatientModel } from 'src/app/entities/patients.model';
import { DoctorsService } from 'src/app/services/doctors.service';
import { MedicalselectionService } from 'src/app/services/medicalselection.service';
import { PatientService } from 'src/app/services/patient.service';


@Component({
  selector: 'app-medical-appointment-selection',
  templateUrl: './medical-appointment-selection.component.html',
  styleUrls: ['./medical-appointment-selection.component.css']
})
export class MedicalAppointmentSelectionComponent {
  constructor(private medicalselectionService:MedicalselectionService, private patientService:PatientService, private doctorsService:DoctorsService){}
  ngOnInit(): void {
    this.listarDoctores();
    this.listarPacientes();
    this.listarHorario();
    this.listardoctor();
  }
  pacientes: PatientModel[]=[]
  doctors : DoctorModel[]=[]
  horario : HorarioModel[]=[]
  doctor : DoctorModel[]=[]
  nombrepaciente: string = ''
  nombredoctor: string = ''


  MedicalAppoinment:CreateMedicalSection = {    
      id_paciente:0,
      id_doctor: 0,
      fecha_asignada: new Date(),
      id_horario:0,

    }


 
      print (){console.table(this.MedicalAppoinment)}


      listarPacientes(){
        this.patientService.getAllPacientes().subscribe((res) =>{
          this.pacientes = res
            console.table(this.pacientes)
          }
        )
      }

      listarDoctores() {
        this.doctorsService.getAll().subscribe((res) => {
          this.doctors = res
          console.table(this.doctors)
        });
      }

      comparepatients(){
        console.log(this.MedicalAppoinment)
        this.pacientes.forEach(paciente => {
          if (this.nombrepaciente === paciente.nombre_paciente) {
            this.MedicalAppoinment.id_paciente = paciente.id_paciente
          }
        });
      }

      comparedoctors(){
        this.doctors.forEach(doctor => {
          if (this.nombredoctor === doctor.nombre_d) {
            this.MedicalAppoinment.id_doctor = doctor.id_doctor
          }
        });
      }

      registermedical(medical: CreateMedicalSection) {
        console.log(medical)
        const response = this.medicalselectionService
          .store(medical)
          .subscribe((response) => {
            console.log(response);
          });

      }

      listarHorario(){
        this.medicalselectionService.getHorario().subscribe((res) =>{
          this.horario = res
            console.log(res)
          }
        )
      }

      listardoctor(){
        this.doctorsService.getAll().subscribe((res) =>{
          this.doctor = res
            console.log(res)
          }
        )
      }

    

}
