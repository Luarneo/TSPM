import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Seccion } from '../interfaces/seccion.interface';
import { environments } from 'src/environments/environments';
import { Anuncio } from '../interfaces/anuncio.interface';
import { ISeccionPost } from '../interfaces/seccionPost.interface';
import { IAnuncioPost } from '../interfaces/anuncioPost.interface';
import { Galeria } from '../interfaces/galeria.interface';

@Injectable({providedIn: 'root'})

export class DirectorioService {

  private baseUrl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient) { }
  
  getSeccion():Observable<Seccion[]>
  {
    
    let result1 =   this.httpClient.get<Seccion[]>(`${this.baseUrl}/secciones`);
    return result1;
  }


  addSeccion( seccionPost: ISeccionPost ): Observable<ISeccionPost> {   
    return this.httpClient.post<ISeccionPost>(`${ this.baseUrl }/secciones`, seccionPost );
  }


  addAnuncio( anuncioPost: IAnuncioPost ): Observable<IAnuncioPost> {   
   return this.httpClient.post<IAnuncioPost>(`${ this.baseUrl }/anuncios`, anuncioPost );
 }

  getAnuncio(idIngresado: number):Observable<Anuncio[]>
  {
    let resultado = this.httpClient.get<Anuncio[]>(`${this.baseUrl}/anuncios?id_seccion=${idIngresado}`);  
    return resultado;
  }

  getAnunciosSeccion(idSeccion: number):Observable<Anuncio[]>
  {
    let resultado = this.httpClient.get<Anuncio[]>(`${this.baseUrl}/anuncios/idSeccion?idSeccion=${idSeccion}`);  
    return resultado;
  }

  getSeccionById(idIngresado: number):Observable<Seccion>
  {
    let resultado = this.httpClient.get<Seccion>(`${this.baseUrl}/secciones/${idIngresado}`);  
    return resultado;
  }


  getAnuncioById(id: string):Observable<Anuncio|undefined>
  {
    return this.httpClient.get<Anuncio>(`${this.baseUrl}/anuncios/id?id=${id}`)
    .pipe(
      catchError (error => of(undefined))
    );
  }

  getGaleria(idAnuncio: number): Observable<Galeria[]|undefined>
  {
    return this.httpClient.get<Galeria[]>(`${this.baseUrl}/galeria?idanuncio=${idAnuncio}`)
    .pipe(
      catchError(error => of(undefined))
    );
  }  

}

 