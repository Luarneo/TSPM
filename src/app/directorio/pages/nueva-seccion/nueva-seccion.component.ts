import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DirectorioService } from '../../services/directorio.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ISeccionPost } from '../../interfaces/seccionPost.interface';

@Component({
  selector: 'app-nueva-seccion',
  templateUrl: './nueva-seccion.component.html',
  styles: [
  `
  .imgc{
  
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  }

  .imgi{
    height: 500px;
  
  
  }
  
  
  `
  ]
})
export class NuevaSeccionComponent implements OnInit{

 

  constructor(private directorioService: DirectorioService, private sanitizer: DomSanitizer, private snackbar: MatSnackBar, private router: Router){}

  public formSeccion = new FormGroup({
    nombreSeccion1: new FormControl<string>('')
  });

  ngOnInit() {}


  public archivos: any = []
  public previsualizacion:string = "";

  file: any;

   uploadFile(e: any){
    this.file = e.target.files[0];
    const achivoCapturado = e.target.files[0];
    this.extraerBase64(achivoCapturado).then((imagen: any) =>{
      this.previsualizacion=imagen.base;
    })

    }

  submitForm():void {
    if ( this.formSeccion.invalid ) return;

        var formData: any = new FormData();
        formData.append('nombreSeccion', this.formSeccion.get<string>('nombreSeccion1')?.value);
        formData.append('imagen',this.file);    

        debugger;

    this.directorioService.addSeccion(formData )
    .subscribe( ISeccionPost => {     
      this.router.navigate(['/directorio/list']);
      this.showSnackbar(`¡La sección ${ISeccionPost.nombreSeccion } ha sido creada!`);
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
