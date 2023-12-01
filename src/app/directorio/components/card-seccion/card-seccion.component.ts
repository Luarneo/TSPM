import { Component, Input, OnInit } from '@angular/core';
import { Seccion } from '../../interfaces/seccion.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'card-seccion',
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
