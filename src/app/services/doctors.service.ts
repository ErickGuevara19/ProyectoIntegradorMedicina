import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateDoctorDto, DoctorModel, UpdateDoctorDto } from '../entities/doctor.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  
  readonly API_URL ='/api/doctors';

  constructor(private httpClient: HttpClient) {}
  getAll():Observable<DoctorModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<DoctorModel[]>(url);
  }
  store(doctor:DoctorModel): Observable<DoctorModel> {
  const url = `${this.API_URL}`;
  return this.httpClient.post<DoctorModel>(url, doctor);
  
  }
  getOne(id:DoctorModel['id_doctor']):Observable<DoctorModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<DoctorModel>(url);
  }
  update(id:DoctorModel['id_doctor'], product: UpdateDoctorDto) {
    const url = `${this.API_URL}/${id}`
    return this.httpClient.put(url, product);
  }
  destroy(id:DoctorModel['id_doctor']):Observable<any> {
    const url = `${this.API_URL}/${id}`
    return this.httpClient.delete<any>(url).
    pipe(map((response:{rta:boolean})=>{return response.rta;}));
  }
}
