import { Component, Input, OnInit } from '@angular/core';
import { Anuncio } from '../../interfaces/anuncio.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'card-anuncio',
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
    
    `
  ]
})
export class CardAnuncioComponent implements OnInit{

  @Input()
  public anuncio!: Anuncio;
  public starprueba: any = 5;

  constructor (private readonly router: Router){}

  ngOnInit(): void {
    if(!this.anuncio) throw Error("La propiedad anuncio es requerida")
  }

  goToAnuncio(anuncio: Anuncio): void{
    this.router.navigate(['directorio/anuncio',anuncio.id]);
  }


}
