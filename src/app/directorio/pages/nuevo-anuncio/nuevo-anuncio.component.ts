import { Component, OnInit } from '@angular/core';
import { DirectorioService } from '../../services/directorio.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Seccion } from '../../interfaces/seccion.interface';

import { MatCheckboxChange } from '@angular/material/checkbox';
import { Observable, map, startWith } from 'rxjs';


@Component({
  selector: 'app-nuevo-anuncio',
  templateUrl: './nuevo-anuncio.component.html',
  styles: [
    `
    .imagen_principal{
      display: flex;
      justify-content: center;

    }

    .gallery-container{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    .gallery__img{
      width: 80px;
      height: 80px;
      object-fit:cover;
    }

    .invisible{
      display: block;
      visibility: hidden;
      height: 0;
      width: 0;
    }

    .imgc{
  
  display: flex;
  
  align-items: center;
  height: 800px;
 
  }

  .imgi{
    height: 800px;

  
  
  }
    
    `
  ]
})
export class NuevoAnuncioComponent implements OnInit{

  constructor(private directorioService: DirectorioService, private sanitizer: DomSanitizer, private snackbar: MatSnackBar, private router: Router){}

  opcionseccion: any;
  selectDireccion: any = new FormControl(true);

  barrios: string[] = [
    'Barrio El Cristo', 
    'Barrio San Pedro', 
    'Barrio San Miguel', 
    'Barrio San Bartolomé',
    'Barrio Santiago',
    'Barrio San Nicolás',
    'Barrio San Cosme',
    'Barrio San Sebastián',
    'Barrio La Santísima',
    'Barrio Tlaltepango',
    'Barrio San Isidro'    
  ];

  municipios: string[] = [
    'San Pablo del Monte'    
  ];

  filteredOptionsBarrios: any;
  filteredOptionsMunicipios: any;
 
  public formAnuncio = new FormGroup({
    titulof: new FormControl<string>('',[Validators.required]),
    descripcionf: new FormControl<string>('',[Validators.required]),
    telefonof: new FormControl<string>(''),
    callef: new FormControl({value: null, disabled: false},[Validators.required]),
    opcionseccion: new FormControl(null,[Validators.required]),
    numeroextf: new FormControl({value: null, disabled: false},[Validators.required]),
    coloniaf: new FormControl({value: null, disabled: false},[Validators.required]),
    municipiof: new FormControl({value: null, disabled: false},[Validators.required]),
    opcionestado: new FormControl({value: null, disabled: false},[Validators.required]),
   
    
  });

 

  public lista_secciones_base: Seccion[] = [];

  ngOnInit() {

     this.directorioService.getSeccion().subscribe(secciones => this.lista_secciones_base=secciones);

     //Inicializando valor de cuadro texto barrios
     this.filteredOptionsBarrios = this.formAnuncio['controls']['coloniaf'].valueChanges.pipe(
      startWith(''),
      map(value => this._filterb(value || '')),
    );

     //Inicializando valor de cuadro texto municipios
     this.filteredOptionsMunicipios = this.formAnuncio['controls']['municipiof'].valueChanges.pipe(
      startWith(''),
      map(value => this._filterm(value || '')),
    );

  }


  //función para filtrar las opciones de la lista de barrios
  private _filterb(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.barrios.filter(barrios => barrios.toLowerCase().includes(filterValue));
  }

  //función para filtrar las opciones de la lista de municipios
  private _filterm(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.municipios.filter(municipios => municipios.toLowerCase().includes(filterValue));
  }


  public archivos: any = []
  public previsualizacion:string = "";



   public previsualizacionGaleria: string[] = [];
  



  file: any;
  filesGallery: any = [];
 
 

   uploadFile(e: any){
    this.file = e.target.files[0];
    const achivoCapturado = e.target.files[0];
    this.extraerBase64(achivoCapturado).then((imagen: any) =>{
      this.previsualizacion=imagen.base;
    })
    }


    uploadFileGaleria(e: any){
     
        for(let i=0; i<e.target.files.length; i++){  
          var fileselect = e.target.files[i];      
          
          //  debugger;
          if(fileselect && fileselect.type.match('image.*')){
            this.filesGallery.push(e.target.files[i]);
            this.extraerBase64(fileselect).then((imagen: any) =>{
              this.previsualizacionGaleria.push(imagen.base);
            }) 
          }
          
          else{

            alert('Error: no se cargo archivo de imágen');
          }           
          
        }          
  
    }


    

    onChangeDireccion(ob: MatCheckboxChange) {
     

      if(ob.checked == true){

        console.log(ob.checked);

        this.formAnuncio.get('callef')?.enable();
        this.formAnuncio.get('numeroextf')?.enable();  
        this.formAnuncio.get('coloniaf')?.enable();
        this.formAnuncio.get('municipiof')?.enable();
        this.formAnuncio.get('opcionestado')?.enable();
       
       

      }
      else{
        console.log(ob.checked);

        this.formAnuncio.get('callef')?.disable();
        this.formAnuncio.get('numeroextf')?.disable();
        this.formAnuncio.get('coloniaf')?.disable();
        this.formAnuncio.get('municipiof')?.disable();
        this.formAnuncio.get('opcionestado')?.disable();
      
     
     
      }

   } 

    

  

 

      submitForm():void {
        if ( this.formAnuncio.invalid ) return;
          
          debugger;
        
            var formDataAnuncio: any = new FormData();
            formDataAnuncio.append('titulo', this.formAnuncio.get<string>('titulof')?.value);
            formDataAnuncio.append('descripcion', this.formAnuncio.get<string>('descripcionf')?.value);
            formDataAnuncio.append('portada',this.file);
            formDataAnuncio.append('telefono', this.formAnuncio.get<string>('telefonof')?.value);
            formDataAnuncio.append('idSeccion', this.formAnuncio['controls']['opcionseccion']?.value);     
            formDataAnuncio.append('direccion', this.formAnuncio.get<string>('callef')?.value);
            formDataAnuncio.append('numeroext', this.formAnuncio.get<string>('numeroextf')?.value); 
            formDataAnuncio.append('colonia', this.formAnuncio.get<string>('coloniaf')?.value); 
            formDataAnuncio.append('municipio', this.formAnuncio.get<string>('municipiof')?.value);    
            formDataAnuncio.append('estado', this.formAnuncio.get<string>('opcionestado')?.value);                    
            for(let i=0; i<this.filesGallery.length; i++){  
            formDataAnuncio.append('galeria',this.filesGallery[i]); 
            }   
            //formDataAnuncio.append('galeria',this.file);   
            
            debugger;
    
        this.directorioService.addAnuncio(formDataAnuncio)
        .subscribe( IAnuncioPost => {     
          this.router.navigate(['/directorio/list']);
          this.showSnackbar(`¡El anuncio ${IAnuncioPost.titulo } ha sido creado!`);
        });
    
      }
    

    extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({
            base: reader.result
          });
        };
        reader.onerror = error => {
          resolve({
            base: null
          });
        };
  
        return;
  
      } catch (e) {
        return null;
      }
    })

    showSnackbar(message:string):void{
      this.snackbar.open(message,'Aceptar',{
        duration:10000
      })
    }
  
}
