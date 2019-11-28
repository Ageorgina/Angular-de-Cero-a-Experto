import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizadorPipe } from './pipes/capitalizador.pipe';


import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadorPipe,
    DomseguroPipe,
    ContrasenaPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers:  [ { provide: LOCALE_ID, useValue: 'es' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
