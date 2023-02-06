import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { SidebarComponent} from "./sidebar/sidebar.component";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';




@NgModule({
    declarations: [
      FooterComponent,
      HeaderComponent,
      SidebarComponent,
      SharedComponent,
    ],
    imports: [
      CommonModule,
      RouterModule
    ],
    exports: [
      FooterComponent,
      HeaderComponent,
      SidebarComponent,
      SharedComponent
    ]
})
export class SharedmoduleModule { }
