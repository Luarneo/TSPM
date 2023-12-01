import { Component, OnInit } from '@angular/core';
import { Seccion } from '../../interfaces/seccion.interface';
import { DirectorioService } from '../../services/directorio.service';

@Component({
  selector: 'app-lista-secciones',
  templateUrl: './lista-secciones.component.html',
  styles: [`

  a{
    text-decoration: none;
  }

  `
  ]
})
export class ListaSeccionesComponent {

  public secciones: Seccion[] = [];
  
  constructor(private directorioService: DirectorioService){}

  ngOnInit(): void {
   
   var resultado = this.directorioService.getSeccion().subscribe(secciones => this.secciones = secciones);
 
  }
}
