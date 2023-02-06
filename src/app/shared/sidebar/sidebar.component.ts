import { Component,inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  private cookieService = inject(CookieService);
  nameDoctor:string = 'Jeims'

  logOut(){
    this.cookieService.deleteAll();
  }
}
