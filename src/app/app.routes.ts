import { Routes } from '@angular/router';
import { ContactoComponent } from './shared/pages/contacto/contacto.component';
import { AcercaComponent } from './shared/pages/acerca/acerca.component';

export const routes: Routes = [
    {
      path:'directorio',
      loadChildren: () => import('./directorio/directorio.routes').then(m => m.routes_directorio)
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
