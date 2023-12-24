import { Component, Input, OnInit } from '@angular/core';
import { Anuncio } from '../../interfaces/anuncio.interface';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'card-anuncio',
  standalone: true,
  imports:[
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    NgbModule,
    MatButtonModule,
  ],
  templateUrl: './card-anuncio.component.html',
  styles: [
    `
   mat-card-title {
    font-size: 15px;
    height: 60px;
    line-height: 20px;
    text-align:center;
   
  }

  mat-card img{
 
  width: 250px; 
  height: 200px;
}

  .btnver:hover{
    background-color:#673AB7;
    transition: 0.2s;
    color: white;

  }

  ngb-rating{
    color: #FFC107;
    font-size: 30px;
  }
    
    `
  ]
})
export class CardAnuncioComponent implements OnInit{

  @Input()
  public anuncio!: Anuncio;
 
  public starnumber: any = 0;

  constructor (private readonly router: Router){}

  ngOnInit(): void {
    if(!this.anuncio) throw Error("La propiedad anuncio es requerida")

    this.starnumber =this.anuncio.valoracion;

  }

  goToAnuncio(anuncio: Anuncio): void{
    this.router.navigate(['directorio/anuncio',anuncio.id]);
  }


}
