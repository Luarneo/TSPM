import { Component } from '@angular/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'shared-layout',
  standalone: true,
  imports:[MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatCheckboxModule,
    RouterModule,
    CommonModule
   
  ],
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
