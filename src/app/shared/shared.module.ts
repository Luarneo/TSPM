import { NgModule } from '@angular/core';
import { LayoutComponent } from './pages/layout/layout.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations:[
        LayoutComponent,
        AcercaComponent,
        HomeComponent,
        LayoutComponent
    ],
    imports:[
        CommonModule,
        AppRoutingModule,
        MaterialModule,

    ],
    exports:[
        HomeComponent,
        LayoutComponent
    ]
})

export class SharedModule { }
