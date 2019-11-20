import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineaComponent } from './components/linea/linea.component';
import { DonaComponent } from './components/dona/dona.component';
import { RadarComponent } from './components/radar/radar.component';
import { BarrasComponent } from './components/barras/barras.component';


const routes: Routes = [
  {path: 'linea', component: LineaComponent},
  {path: 'dona', component: DonaComponent},
  {path: 'radar', component: RadarComponent},
  {path: 'barras', component: BarrasComponent},
  {path: '**', redirectTo: 'linea'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
