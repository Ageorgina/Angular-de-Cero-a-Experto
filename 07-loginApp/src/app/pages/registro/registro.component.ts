import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel;
  recordarme = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
   }
   onSubmit(form: NgForm) {

     if (form.invalid) { return ; }
     Swal.fire(
      'Espere por favor',
      '',
      'info',
    );
     Swal.showLoading();
     console.log('Formulario enviado', this.usuario , 'form->', form );
     this.auth.registrar(this.usuario).subscribe(data => {
       Swal.close();
       console.log(data);
       if ( this.recordarme ) {
         localStorage.setItem('email', this.usuario.email);
       }
       this.router.navigateByUrl('/home');
      }, (error) => {
        Swal.fire(
          error.error.error.message,
          '',
          'error',
        );
        console.log(error.error.error.message);
      });
   }


}
