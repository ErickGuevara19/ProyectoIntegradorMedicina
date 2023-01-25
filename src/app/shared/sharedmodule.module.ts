import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { SidebarComponent } from "./sidebar/sidebar.component";



@NgModule({
    declarations: [
        SharedComponent
    ],
    imports: [
        CommonModule,
        SidebarComponent
    ]
})
export class SharedmoduleModule { }
