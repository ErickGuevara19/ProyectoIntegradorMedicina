import { Component,inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  ngOnInit(): void {
    this.comprobation()
  }

  isAdmin : boolean = false;
  isDoctor : boolean = false;
  isPacient : boolean = false;
  
  comprobation(){
    const usuario =  JSON.parse(this.cookieService.get('user'));
    console.log(usuario.id_paciente)
    if (usuario.id_paciente) {

      this.isPacient = true;
      
    } else  if (usuario.id_doctor) {

      this.isDoctor = true;
      console.log(this.isDoctor)
      
    } else if (usuario.id_admin) {

      this.isAdmin = true;
      
    } 


  }


  private cookieService = inject(CookieService);
  private router = inject(Router);
  nameDoctor:string = 'Jeims'

  logOut(){
    this.cookieService.deleteAll();
    console.log(this.cookieService.getAll())
  }

}

