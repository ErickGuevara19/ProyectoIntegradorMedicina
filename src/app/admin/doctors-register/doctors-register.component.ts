import { Component,Inject } from '@angular/core';
import { DoctorModel } from 'src/app/entities/doctor.model';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-doctors-register',
  templateUrl: './doctors-register.component.html',
  styleUrls: ['./doctors-register.component.css']
})
export class DoctorsRegisterComponent {
  private doctorService = Inject(DoctorsService)
  specialities: any[] = []
  doctors: DoctorModel[] = [];

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
}
