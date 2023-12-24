import { Routes } from '@angular/router';
import { LayoutDirectorioComponent } from './pages/layout-directorio/layout-directorio.component';
import { ListaSeccionesComponent } from './pages/lista-secciones/lista-secciones.component';
import { NuevaSeccionComponent } from './pages/nueva-seccion/nueva-seccion.component';
import { NuevoAnuncioComponent } from './pages/nuevo-anuncio/nuevo-anuncio.component';
import { ListaAnunciosComponent } from './pages/lista-anuncios/lista-anuncios.component';
import { PaginaAnuncioComponent } from './pages/pagina-anuncio/pagina-anuncio.component';
import { NgModule } from '@angular/core';

export const routes_directorio: Routes = [
    {
      path:'',
      component: LayoutDirectorioComponent,
      children:[
        {path:'list', component: ListaSeccionesComponent},
        {path:'nueva_seccion', component: NuevaSeccionComponent},
        {path:'nuevo_anuncio', component: NuevoAnuncioComponent},
        {path: 'seccion/:id', component: ListaAnunciosComponent },
        {path: 'anuncio/:id', component: PaginaAnuncioComponent },
        {path:'', component: ListaSeccionesComponent},
        { path: '**', redirectTo: 'list' },
      ]
    }
    ];


   