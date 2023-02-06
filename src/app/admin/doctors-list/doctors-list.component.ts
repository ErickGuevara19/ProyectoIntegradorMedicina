import { Component, inject, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DoctorModel } from 'src/app/entities/doctor.model';
import { DoctorsService } from 'src/app/services/doctors.service';
@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css'],
})
export class DoctorsListComponent implements OnInit {
  private cookieService = inject(CookieService);
  constructor(private doctorsService: DoctorsService) {}
  doctorList: DoctorModel[] = [];
  filterName: string = '';
  filterEmail: string = '';
  filterEspecialidad: string = '';

  ngOnInit(): void {
    this.listarDoctores();
    const usuario =  JSON.parse(this.cookieService.get('user'))
    console.log(usuario)
  }
  nada(){
    
  }

  listarDoctores() {
    this.doctorsService.getAll().subscribe((res) => {
      this.doctorList = res
      console.log(this.doctorList)
    });
  }
  deleteDoctor(id: number) {
    const response = this.doctorsService.destroy(id).subscribe(response => {
      this.doctorList = this.doctorList.filter(doctor => doctor.id_doctor != id)
      console.log(response);
    });
  }
}
