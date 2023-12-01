import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './shared/pages/contacto/contacto.component';
import { AcercaComponent } from './shared/pages/acerca/acerca.component';
import { LayoutComponent } from './shared/pages/layout/layout.component';
import { HomeComponent } from './shared/pages/home/home.component';

const routes: Routes = [
  {
    path:'directorio',
    loadChildren: () => import('./directorio/directorio.module').then(m => m.DirectorioModule)
  },
  {
    path:'home',
    // component: HomeComponent
    redirectTo: 'directorio'
  },
  {
    path:'contacto',
    component: ContactoComponent
  },
  {
    path:'acerca',
    component: AcercaComponent
  },
  {
    path:'**',
    redirectTo: 'directorio'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
