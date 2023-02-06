import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlergiasModel } from '../entities/alergias.model';
import { DiscapacidadesModel } from '../entities/discapacidades.model';
import { CreatePacientesDto, PatientModel, UpdatePacientesDto } from '../entities/patients.model';

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

  getPacientesById(id: number): Observable<PatientModel[]>{
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<PatientModel[]>(url);
  }

  createPatient(paciente:CreatePacientesDto): Observable<CreatePacientesDto>{
    const url = `${this.API_URL}`;
    return this.httpClient.post<CreatePacientesDto>(url,paciente);

  }
  updatePatient(id:PatientModel['id_paciente'], product: UpdatePacientesDto) {
    const url = `${this.API_URL}/${id}`
    return this.httpClient.put(url, product);
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
