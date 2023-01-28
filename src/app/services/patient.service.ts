import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
