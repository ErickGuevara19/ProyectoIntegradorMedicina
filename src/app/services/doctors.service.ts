import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateDoctorDto, DoctorModel, UpdateDoctorDto } from '../entities/doctor.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  
  readonly API_URL ='http://localhost:3000/doctors';

  constructor(private httpClient: HttpClient) {}
  getAll():Observable<DoctorModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<DoctorModel[]>(url);
  }/*
  getOne(id:DoctorModel['id']):Observable<DoctorModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<DoctorModel>(url);
  }
  store(product:CreateDoctorDto) {
    const url = `${this.API_URL}`;
    return this.httpClient.post(url, product);
  }
  update(id:DoctorModel['id'], product: UpdateDoctorDto) {
    const url = `${this.API_URL}/${id}`
    return this.httpClient.put(url, product);
  }
  destroy(id:DoctorModel['id']):Observable<any> {
    const url = `${this.API_URL}/${id}`
    return this.httpClient.delete<any>(url).
    pipe(map((response:{rta:boolean})=>{return response.rta;}));
  }*/
}
