import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  
  readonly API_URL ='http://localhost:3000';

  constructor(private httpClient: HttpClient) { }
}
