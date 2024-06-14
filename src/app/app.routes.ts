import { Routes } from '@angular/router';
import path from 'path';
import { CharacterComponent } from './pages/comic/character.component';
import { ComicDetailsComponent } from './pages/comic/comic-details/comic-details.component';
import { PagenotfoundComponent } from './pages/comic/pagenotfound/pagenotfound.component';

export const routes: Routes = [
  {
    path: '',
    component: CharacterComponent,
  },
  {
    path: 'comic',
    component: CharacterComponent,
  },
  {
    path: 'comicDetails',
    component: ComicDetailsComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PagenotfoundComponent,
  },
];
