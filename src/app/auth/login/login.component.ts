import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PatientModel } from 'src/app/entities/patients.model';
import { loginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  readonly API_URL ='/api/patients';

  constructor(private loginservice:loginService, private router:Router) { }

  ngOnInit():void{

  }

  login(object:Object){
    console.log(this.Object)
    const response = this.loginservice
    .login(object)
    .subscribe((response) => {
      console.log("antes")
      if (response[0].id_paciente) { this.router.navigate(['dashboard/patient'])
      console.log("end")
            
      } else {
        if (response[0].id_doctor) { this.router.navigate(['dashboard/doctors'])
          
        } else {
          if (response[0].id_admin) {this.router.navigate(['admin/doctor-list'])
            
          } else {
            alert ("El usuario ingresado no existe")
          }
          
        }
          
      }
      console.log(response);
    });
    
  }
  Object={
    email:"",
    password:"" 
  }
  


}
