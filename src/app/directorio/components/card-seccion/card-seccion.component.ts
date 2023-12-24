import { Component, Input, OnInit } from '@angular/core';
import { Seccion } from '../../interfaces/seccion.interface';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'card-seccion',
  standalone: true,
  imports:[
    CommonModule,
    HttpClientModule,
    NgbModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
    
  ],
  templateUrl: './card-seccion.component.html',
  styles: [
    `
   mat-card-title {
    font-size: 15px;
    height: 60px;
    line-height: 20px;
    text-align:center;
  }

  .btnver:hover{
    background-color:#673AB7;
    transition: 0.2s;
    color: white;

  }
    mat-card img{
 
    width: 250px; 
    height: 200px;
 }

 .tarjeta{
 
    min-width: 200px;
    max-width: 300px;
}
  
    `
  ]
})
export class CardSeccionComponent implements OnInit{
  
  @Input()
  public seccion!: Seccion;

  
  constructor(private readonly router:Router){}

  ngOnInit(): void {
    if(!this.seccion) throw Error('La propiedad seccion es requerida');
  }

  goToAnuncios(seccion: Seccion): void{
    this.router.navigate(['directorio/seccion',seccion.id]);
  }

 


}
