import { Routes} from '@angular/router';

import { ArtistaComponent } from './components/artista/artista.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'artist/:id', component: ArtistaComponent },
    { path: 'search', component: SearchComponent },
    { path: '', pathMatch:'full',redirectTo: 'home'},
    { path: '**', pathMatch:'full',redirectTo: 'home'}
];
