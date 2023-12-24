import { Component, OnInit } from '@angular/core';
import { DirectorioService } from '../../services/directorio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Anuncio, ImagenCarrusel } from '../../interfaces/anuncio.interface';
import { Galeria } from '../../interfaces/galeria.interface';
import { Seccion } from '../../interfaces/seccion.interface';
// import { NgImageSliderModule } from 'ng-image-slider/lib/ng-image-slider.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pagina-anuncio',
  templateUrl: './pagina-anuncio.component.html',
  standalone:true,
  imports:[
    // NgImageSliderModule,
    NgbModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    CommonModule
  ],
  providers:[
    DirectorioService
  ],
  styles: [
    `   

    .gallery-container{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }

    .gallery__img{
      width: 400px;
      height: 400px;
      object-fit:cover;
    }    

    a {
      text-decoration: none;
  }
    
    `
  ]
})
export class PaginaAnuncioComponent implements OnInit{
  
  
  public anuncioV: Anuncio ;
  galeriaVcarrusel: Array<ImagenCarrusel> = []
  public nomseccionselect: string = "";

 

  constructor(
    private directorioService: DirectorioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){
   this.anuncioV={
    id:0,
    titulo:'',
    descripcion:'',
    portada:'',
    telefono:'',
    idSeccion: 0,  
    direccion:'',
    valoracion:0,
    visitas: 0
   }
  }
  
  
  ngOnInit(): void {
    this.activatedRoute.params 
    .pipe(
      switchMap(({id}) => this.directorioService.getAnuncioById(id)),
    )
    .subscribe (anuncio => {
      if(!anuncio) return this.router.navigate(['/directorio']);      
         this.anuncioV = anuncio;

         this.directorioService.getSeccionById(this.anuncioV.idSeccion)
         .subscribe(seccion => this.nomseccionselect = seccion.nombreSeccion);  
  
         return 
                 
    }      
    );

        // this.activatedRoute.params 
        // .pipe(
        //   switchMap(({id}) => this.directorioService.getGaleria(id)),
        // )
        // .subscribe ((galeria:any) => {     
        //      this.galeriaVcarrusel = galeria;
        //      return this.galeriaVcarrusel                 
        // }      
        // );


      
   
     
        
    
    }

    


}
