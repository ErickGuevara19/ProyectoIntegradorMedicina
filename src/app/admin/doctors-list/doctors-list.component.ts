import { Component, Inject, OnInit } from '@angular/core';
import { DoctorModel } from 'src/app/entities/doctor.model';
import { DoctorsService } from 'src/app/services/doctors.service';
@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css'],
})
export class DoctorsListComponent implements OnInit {
  constructor(private doctorsService: DoctorsService) {}
  doctorList: DoctorModel[] = [];
  ngOnInit(): void {
    this.listarDoctores();
  }

  listarDoctores() {
    this.doctorsService.getAll().subscribe((res) => {
      this.doctorList = res
    });
  }
}
