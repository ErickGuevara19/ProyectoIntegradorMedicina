import { Injectable,inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DoctorGuard implements CanActivate {
  private cookieService = inject(CookieService)
  private router = inject(Router)
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const Jsonusuario =  this.cookieService.get('user')
      if (Jsonusuario) {
        const usuario = JSON.parse(this.cookieService.get('user'))
        if (usuario.id_doctor) {
          return true
        }else if(usuario.id_admin) {
          this.router.navigate(['admin/doctor-list'])
          return false
        }else if(usuario.id_paciente) {
          this.router.navigate(['dashboard/patients'])
          return false
        }else {
          this.router.navigate(['login'])
          return false
        }
      }else {
        this.router.navigate(['login'])
        return false
      }
  }
  
}
