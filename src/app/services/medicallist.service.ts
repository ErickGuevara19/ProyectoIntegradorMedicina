import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MedicalappointmentAsignationModel } from '../entities/medicallist.model';


@Injectable({
  providedIn: 'root'
})
export class MedicallistService {  
  getMedicalAssignment() {
    throw new Error('Method not implemented.');
  }

  readonly API_URL ='/api/medical-assignments';

  constructor(private httpClient: HttpClient) { }

  getAllMedicales(): Observable<MedicalappointmentAsignationModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<MedicalappointmentAsignationModel[]>(url);
  }
  createMedicals(paciente:MedicalappointmentAsignationModel): Observable<MedicalappointmentAsignationModel>{
    const url = `${this.API_URL}`;
    return this.httpClient.post<MedicalappointmentAsignationModel>(url,paciente);

  }
  
  /*getAllergies(): Observable<AlergiasModel[]> {
    const API_URL ='/api/allergies';
    return this.httpClient.get<AlergiasModel[]>(API_URL); 
  }

  getDiscapacidades(): Observable<DiscapacidadesModel[]> {
    const API_URL ='/api/disabilities';
    return this.httpClient.get<DiscapacidadesModel[]>(API_URL); 
  }
*/
}
