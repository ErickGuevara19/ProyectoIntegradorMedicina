import { Component } from '@angular/core';
import { DoctorModel } from 'src/app/entities/doctor.model';
import { MedicalsectionModel } from 'src/app/entities/medicalselection.model';
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

  }
  pacientes: PatientModel[]=[]
  doctors : DoctorModel[]=[]

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
  MedicalAppoinment:MedicalsectionModel = {    
      id_citamedica: 0,
      id_paciente: {    id_paciente:0,
        nombre_paciente:'',
        apellido_paciente:'',
        direccion_paciente:'',
        telefono_paciente:'',
        email_paciente:'',
        password_paciente: '',
        tlf_familiar_paciente:'',
        fecha_nacimiento_paciente: '',
        genero_paciente: true,
        alergias: {    id_alergia:0,
          nombre_alergia:  '0',
          descripcion_alergia:'',},
        discapacidades:{     
          id_discapacidades:0,
          nombre_discapacidad: '',
          descripcion_discapacidad: ''}},
      id_doctor:{  id_doctor:0,
        nombre_d:'',
        apellidos_d:'',
        email:'',
        dirreccion_d:'',
        password_d:'',
        especialidades: {    
          id_especialidades: 0,
          descripcion_especialidad: ''}},
      fecha_asignada: new Date(),
      hora_inicio: '',
      hora_finalizacion:'',}
 
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
        this.pacientes.forEach(paciente => {
          if (this.MedicalAppoinment.id_paciente.nombre_paciente === paciente.nombre_paciente) {
            this.MedicalAppoinment.id_paciente = paciente
          }
        });
      }

      comparedoctors(){
        this.doctors.forEach(doctor => {
          if (this.MedicalAppoinment.id_doctor.nombre_d === doctor.nombre_d) {
            this.MedicalAppoinment.id_doctor = doctor
          }
        });
      }

      registermedical(medical: MedicalsectionModel) {
        const response = this.medicalselectionService
          .store(medical)
          .subscribe((response) => {
            console.log(response);
          });
      }
}
