import { Component, OnInit } from '@angular/core';
import { Seccion } from '../../interfaces/seccion.interface';
import { DirectorioService } from '../../services/directorio.service';
import { Anuncio } from '../../interfaces/anuncio.interface';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/internal/operators/switchMap';

@Component({
  selector: 'app-lista-anuncios',
  templateUrl: './lista-anuncios.component.html',
  styles: [
    ` a {
      text-decoration: none;
  }

    `
  ]
})
export class ListaAnunciosComponent implements OnInit {
  
  public anuncios:Anuncio[] = [];
  public nombreseccion: string = "";

  constructor (private directorioService: DirectorioService, private activateRoute: ActivatedRoute){}

  

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(switchMap(({id}) => this.directorioService.getAnunciosSeccion(id)))
    .subscribe(anuncios => this.anuncios = anuncios);


    this.activateRoute.params
    .pipe(switchMap(({id}) => this.directorioService.getSeccionById(id)))
    .subscribe(seccion => this.nombreseccion = seccion.nombreSeccion);
    
  }
  

}

