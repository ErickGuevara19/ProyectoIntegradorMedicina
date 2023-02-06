import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { PatientModel } from 'src/app/entities/patients.model';
import { loginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  readonly API_URL = '/api/patients';
  private cookieService = inject(CookieService);
  constructor(private loginservice: loginService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.cookieService.getAll())
  }

  login(object: Object) {
    const response = this.loginservice.login(object).subscribe((response) => {
      if (response[0].id_paciente) {
        const usuario = response[0];
        const responseJson = JSON.stringify({
          id_paciente: usuario.id_paciente,
          nombre_paciente: usuario.nombre_paciente,
          apellido_paciente: usuario.apellido_paciente,
          telefono_paciente: usuario.telefono_paciente,
          email_paciente: usuario.email_paciente,
          password_paciente: usuario.password_paciente,
          tlf_familiar_paciente: usuario.tlf_familiar_paciente,
          fecha_nacimiento_paciente: usuario.fecha_nacimiento_paciente,
          genero_paciente: usuario.genero_paciente,
          id_alergias: usuario.id_alergias,
          id_discapacidades: usuario.id_discapacidades,
        });
        this.cookieService.set('user', responseJson);
        this.router.navigate(['dashboard/patient']);
      } else {
        if (response[0].id_doctor) {
          const usuario = response[0];
          const responseJson = JSON.stringify({
            id_doctor: usuario.id_doctor,
            nombre_d: usuario.nombre_d,
            apellidos_d: usuario.apellidos_d,
            email: usuario.email,
            password_d: usuario.password_d,
            id_especialidades: usuario.id_especialidades,
          });
          this.cookieService.set('user', responseJson);
          this.router.navigate(['dashboard/doctors']);
        } else {
          if (response[0].id_admin) {
            const usuario = response[0];
            const responseJson = JSON.stringify({
              id_admin: usuario.id_admin,
              nombre_admin: usuario.nombre_admin,
              apellido_admin: usuario.apellido_admin,
              email_admin: usuario.email_admin,
              password_admin: usuario.password_admin,
              isAdmin: usuario.isAdmin,
            });
            this.cookieService.set('user', responseJson);
            this.router.navigate(['admin/doctor-list']);
          } else {
            alert('El usuario ingresado no existe');
          }
        }
      }
      console.log(response);
    });
  }
  Object = {
    email: '',
    password: '',
  };
}
