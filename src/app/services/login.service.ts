import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class loginService {

    readonly API_URL ='/api/login';

    constructor(private httpClient: HttpClient){

    }
    login(Object:any): Observable<any>{
        const url = `${this.API_URL}`;
        return this.httpClient.post<any>(url,Object);
        
      }

}