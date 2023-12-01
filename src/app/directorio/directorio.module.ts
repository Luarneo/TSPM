import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorioRoutingModule } from './directorio-routing.module';
import { ListaSeccionesComponent } from './pages/lista-secciones/lista-secciones.component';
import { LayoutDirectorioComponent } from './pages/layout-directorio/layout-directorio.component';
import { CardSeccionComponent } from './components/card-seccion/card-seccion.component';
import { MaterialModule } from '../material/material.module';
import { ListaAnunciosComponent } from './pages/lista-anuncios/lista-anuncios.component';
import { CardAnuncioComponent } from './components/card-anuncio/card-anuncio.component';
import { PaginaAnuncioComponent } from './pages/pagina-anuncio/pagina-anuncio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NuevaSeccionComponent } from './pages/nueva-seccion/nueva-seccion.component';
import { NuevoAnuncioComponent } from './pages/nuevo-anuncio/nuevo-anuncio.component';
import { NgImageSliderModule } from 'ng-image-slider';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    NuevaSeccionComponent,
    ListaSeccionesComponent,
    LayoutDirectorioComponent,
    CardSeccionComponent,
    ListaAnunciosComponent,
    CardAnuncioComponent,
    PaginaAnuncioComponent,
    NuevaSeccionComponent,
    NuevoAnuncioComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DirectorioRoutingModule,
    MaterialModule,
    HttpClientModule,
    NgImageSliderModule,
    NgbModule,
  
  ],

})
export class DirectorioModule { }
