import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-layout-directorio',
  standalone: true,
  imports:[
    RouterModule,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './layout-directorio.component.html',
  styles: [
  ]
})
export class LayoutDirectorioComponent {

}
