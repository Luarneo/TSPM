import { Component, OnInit } from '@angular/core';
import { Seccion } from '../../interfaces/seccion.interface';
import { DirectorioService } from '../../services/directorio.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { CardSeccionComponent } from "../../components/card-seccion/card-seccion.component";
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-lista-secciones',
    standalone: true,
    templateUrl: './lista-secciones.component.html',
    styles: [`

  a{
    text-decoration: none;
  }

  `
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        NgbModule,
        MatCardModule,        
        CardSeccionComponent,
        RouterModule,

    ],
    providers:[
      DirectorioService
    ]
})
export class ListaSeccionesComponent {

  public secciones: Seccion[] = [];
  
  constructor(private directorioService: DirectorioService){}

  ngOnInit(): void {
   
   var resultado = this.directorioService.getSeccion().subscribe(secciones => this.secciones = secciones);
 
  }
}
