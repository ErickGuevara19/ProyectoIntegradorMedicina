import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EspecialidadesModel } from '../entities/especialities.model';


@Injectable({
  providedIn: 'root',
})

export class SpecialitiesService {

  readonly API_URL ='/api/specialities';

  constructor(private httpClient: HttpClient) {}

  getAll():Observable<EspecialidadesModel[]>
  {
    //obtenemos un aray
    const url=`${this.API_URL}`;
    return this.httpClient.get<EspecialidadesModel[]>(url);
  }
  
  getOne(id:EspecialidadesModel['id_especialidades']):Observable<EspecialidadesModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<EspecialidadesModel>(url);
  }

 
}
