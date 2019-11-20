import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma: FormGroup;

  usuario: Object = {

    nombrecompleto: {
      nombre: 'Ana',
      apellido: 'Ortega'
    },
    correo: 'aort@gmail.com',
  //  pasatiempos: ["Correr","Dormir","Comer"]
  };
  controls: any;

  constructor() {

    console.log(this.usuario);

    this.forma = new FormGroup({

      nombrecompleto: new FormGroup({
        nombre: new FormControl('' ,  [
                                          Validators.required,
                                          Validators.minLength(3)
                                        ]),
        apellido: new FormControl('', [
                                          Validators.required, this.noortega
                                        ])
      }),
      correo: new FormControl('',   [
                                        Validators.required,
                                        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                      ]),
      pasatiempos: new FormArray([ new FormControl('Correr', Validators.required)]),
      username: new FormControl('', Validators.required),
      password1: new FormControl('', Validators.required),
      password2: new FormControl()

  });
    // this.forma.setValue(this.usuario);
    this.forma.controls['password2'].setValidators([Validators.required, this.noIgual.bind(this.forma)]);
}


  ngOnInit() {
  }


  agregarPasatiempo() {
    (this.forma.controls.pasatiempos as FormArray).push(new FormControl('', Validators.required));
  }

  noortega(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'ortega') {
      return {
        noortega : true
      };
    }
    return null;
  }
  noIgual(control: FormControl): { [s: string]: boolean } {
    if (control.value !== this.controls['password1'].value ) {
      return {
        noiguales : true
      };
    }
    return null;
  }
  existeUsuario( control: FormControl ): Promise<any>|Observable<any>{

    let promesa = new Promise(
      ( resolve, reject )=>{

        setTimeout( ()=>{
          if( control.value === "strider" ){
            resolve( {existe:true} )
          }else{
            resolve( null )
          }

        },3000 )

      }
    )

    return promesa;

  }


  guardarCambios() {
    console.log('cambios', this.forma.value);
    this.forma.reset({
      usuariocompleto: {
        nombre: '',
        apellido: ''
      },
      correo: ''
    });
  }
}
