import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlergiasModel } from '../entities/alergias.model';
import { DiscapacidadesModel } from '../entities/discapacidades.model';
import { PatientModel } from '../entities/patients.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  
  readonly API_URL ='/api/patients';

  constructor(private httpClient: HttpClient) { }

  getAllPacientes(): Observable<PatientModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<PatientModel[]>(url);
  }
  createPatients(paciente:PatientModel): Observable<PatientModel>{
    const url = `${this.API_URL}`;
    return this.httpClient.post<PatientModel>(url,paciente);

  }
  
  getAllergies(): Observable<AlergiasModel[]> {
    const API_URL ='/api/allergies';
    return this.httpClient.get<AlergiasModel[]>(API_URL); 
  }

  getDiscapacidades(): Observable<DiscapacidadesModel[]> {
    const API_URL ='/api/disabilities';
    return this.httpClient.get<DiscapacidadesModel[]>(API_URL); 
  }

}
