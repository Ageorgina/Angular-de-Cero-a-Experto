import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pelicula', component: PeliculasComponent},
  {path: 'busqueda', component: BusquedaComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
