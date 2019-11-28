import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activo: boolean  ): any {
    if (activo) {
      let nombre = ' ';
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0 ; i < value.length; i ++) {
        nombre += '*';
      }
      console.log('nombre', nombre);
      return nombre;
    } else  {
      console.log('value', value);
      return value;
    }
  }

}
