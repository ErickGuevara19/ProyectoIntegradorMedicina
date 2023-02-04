import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsultorioModel } from '../entities/consultorio.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultorioService {
  readonly API_URL ='/api/medical-assignments';
  constructor(private httpClient: HttpClient) { }

  getAll():Observable<ConsultorioModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<ConsultorioModel[]>(url);
  }
}
