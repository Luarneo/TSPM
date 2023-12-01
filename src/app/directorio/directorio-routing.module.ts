import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSeccionesComponent } from './pages/lista-secciones/lista-secciones.component';
import { NuevoAnuncioComponent } from './pages/nuevo-anuncio/nuevo-anuncio.component';
import { NuevaSeccionComponent } from './pages/nueva-seccion/nueva-seccion.component';
import { LayoutDirectorioComponent } from './pages/layout-directorio/layout-directorio.component';
import { ListaAnunciosComponent } from './pages/lista-anuncios/lista-anuncios.component';
import { PaginaAnuncioComponent } from './pages/pagina-anuncio/pagina-anuncio.component';


const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorioRoutingModule { }
