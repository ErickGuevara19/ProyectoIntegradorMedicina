import { Component } from '@angular/core';
import { DoctorModel } from 'src/app/entities/doctor.model';
import { CreateMedicalSection, MedicalsectionModel } from 'src/app/entities/medicalselection.model';
import { PatientModel } from 'src/app/entities/patients.model';
import { DoctorsService } from 'src/app/services/doctors.service';
import { MedicalselectionService } from 'src/app/services/medicalselection.service';
import { PatientService } from 'src/app/services/patient.service';
import { SpecialitiesService } from 'src/app/services/specialities.service';


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
  }
  pacientes: PatientModel[]=[]
  doctors : DoctorModel[]=[]
  nombrepaciente: string = ''
  nombredoctor: string = ''

  /*private doctorService = Inject(DoctorsService);
  doctor: DoctorModel = {
    id_doctor: 0,
    nombre_d: '',
    apellidos_d: '',
    email: '',
    contrasenia_d: '',
    dirreccion_d: '',
    especialidades: { id_especialidades: 0, descripcion_especialidad: '' },
  };
  specialities: any[] = [];
  doctors: DoctorModel[] = [];
  print(){
    console.log(this.doctor)
  }*/

  //async getDoctors(){
  //  const response = this.doctorService.getAll().subscribe((response) => {
  //    this.doctors = response;
  //    console.log(response);
  //  });
  //}
  //getDoctor(id: number) {
  //  const response = this.doctorService.getOne(id).subscribe((response) => {
  //    console.log(response);
  //  });
  //}
  //registerDoctor(doctor: DoctorModel) {
  //  const response = this.doctorService
  //    .store(doctor)
  //    .subscribe((response) => {
  //      console.log(response);
  //    });
  //}
  //updateDoctor(doctor: DoctorModel) {
  //  const response = this.doctorService
  //    .update(doctor.id, doctor)
  //    .subscribe((response) => {
  //      console.log(response);
  //    });
  //}
  //deleteDoctor(id: number) {
  //  const response = this.doctorService.destroy(id).subscribe((response) => {
  //    this.doctors = this.doctorService.filter(doctor => doctor.id != id)
  //    console.log(response);
  //  });
  //}
  MedicalAppoinment:CreateMedicalSection = {    
      id_paciente: 0,
      id_doctor: 0,
      fecha_asignada: new Date(),
      hora_inicio: '',
      hora_fin:'',}
 
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
        medical.hora_inicio= medical.hora_inicio + ':00'
        medical.hora_fin= medical.hora_fin + ':00'
        console.log(medical)
        const response = this.medicalselectionService
          .store(medical)
          .subscribe((response) => {
            console.log(response);
          });
      }
}
