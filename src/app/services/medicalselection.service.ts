import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UpdateDoctorDto } from '../entities/doctor.model';
import { CreateMedicalSection, MedicalsectionModel } from '../entities/medicalselection.model';

@Injectable({
  providedIn: 'root'
})
export class MedicalselectionService {
  readonly API_URL ='/api/medical-apointments';

  constructor(private httpClient: HttpClient) {}
  getAll():Observable<MedicalsectionModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<MedicalsectionModel[]>(url);
  }
  store(medicalselection:CreateMedicalSection): Observable<CreateMedicalSection> {
  const url = `${this.API_URL}`;
  return this.httpClient.post<CreateMedicalSection>(url, medicalselection);
  
  }
  getOne(id:MedicalsectionModel['id_citamedica']):Observable<MedicalsectionModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<MedicalsectionModel>(url);
  }
  update(id:MedicalsectionModel['id_citamedica'], product: UpdateDoctorDto) {
    const url = `${this.API_URL}/${id}`
    return this.httpClient.put(url, product);
  }
  destroy(id:MedicalsectionModel['id_citamedica']):Observable<any> {
    const url = `${this.API_URL}/${id}`
    return this.httpClient.delete<any>(url).
    pipe(map((response:{rta:boolean})=>{return response.rta;}));
  }
}
