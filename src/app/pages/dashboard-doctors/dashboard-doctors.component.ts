import { Component, OnInit,inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard-doctors',
  templateUrl: './dashboard-doctors.component.html',
  styleUrls: ['./dashboard-doctors.component.css']
})
export class DashboardDoctorsComponent implements OnInit{
  private cookieService = inject(CookieService);
  constructor() { }

  ngOnInit(): void {
    const usuario =  JSON.parse(this.cookieService.get('user'))
    console.log(usuario)
  }

}
