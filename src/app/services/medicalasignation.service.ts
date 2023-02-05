import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CreateMedicalAsignationModel, MedicalappointmentAsignationModel, UpdateMedicalAsignationModel } from '../entities/medicallist.model';
import { MedicalsectionModel } from '../entities/medicalselection.model';
import { ProductHttpService } from './product-http.service';

@Injectable({
  providedIn: 'root'
})
export class MedicalasignationService {
  readonly API_URL ='/api/medical-assignments';

  constructor(private httpClient: HttpClient) { 
  }
  store(doctor:CreateMedicalAsignationModel): Observable<CreateMedicalAsignationModel> {
    const url = `${this.API_URL}`;
    return this.httpClient.post<CreateMedicalAsignationModel>(url, doctor);
    }
  update(id:UpdateMedicalAsignationModel['id_asignacion_medica'], product: UpdateMedicalAsignationModel) {
      const url = `${this.API_URL}/${id}`
      return this.httpClient.put(url, product);
    }
  destroy(id:MedicalappointmentAsignationModel['id_asignacion_medica']):Observable<any> {
      const url = `${this.API_URL}/${id}`
      return this.httpClient.delete<any>(url).
      pipe(map((response:{rta:boolean})=>{return response.rta;}));
    }

  getOne(id:UpdateMedicalAsignationModel['id_asignacion_medica']):Observable<UpdateMedicalAsignationModel[]> {
      const url = `/api/medical-assignmentsby/${id}`;
      return this.httpClient.get<UpdateMedicalAsignationModel[]>(url);
    }
  
}
