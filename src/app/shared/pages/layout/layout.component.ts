import { Component } from '@angular/core';


@Component({
  selector: 'shared-layout',
  templateUrl: './layout.component.html',
  styles: [
  ]
})
export class LayoutComponent {

  public sidebarItems = [
    { label: 'Home', icon: 'home', url: './home' },
    { label: 'Directorio', icon: 'store_mall_directory', url: './directorio' },
    { label: 'Agregar Sección', icon: 'add', url: './directorio/nueva_seccion' },
    { label: 'Agregar Anuncio', icon: 'add', url: './directorio/nuevo_anuncio' },
    { label: 'Bolsa de trabajo', icon: 'work', url: '#' },
    { label: 'Mercado', icon: 'shopping_cart', url: '#' },
    { label: 'Escuelas', icon: 'school', url: '#' }
    
  ];



}
