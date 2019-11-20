import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser'

@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {

  constructor (private _dom: DomSanitizer){

  }

  transform(value: string, ): any {
    let url ='https://open.spotify.com/embed?uri=';
    return this._dom.bypassSecurityTrustResourceUrl( url + value );
  }

}
