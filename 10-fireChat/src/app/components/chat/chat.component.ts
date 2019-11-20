import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje = '';
  elemento: any;

  // tslint:disable-next-line: variable-name
  constructor( public _chat: ChatService) {
    this._chat.cargarMensajes().subscribe( () => {
      setTimeout( () => this.elemento.scrollTop = this.elemento.scrollHeight, 50 );
 
    } );
  }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
  }
  enviar_mensaje() {
    console.log(this.mensaje);
    if (this.mensaje.length === 0) {
      return ;
    }
    this._chat.agregarMensaje(this.mensaje)
              .then(() => { this.mensaje = '',   console.log('Mensaje Enviado!'); } )
              .catch((err) => { console.error('No se pudo enviar el mensaje', err); });
  }
}
