import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Calculator } from './pages/calculator/calculator';
import { Converter } from './pages/converter/converter';
import { About } from './pages/about/about';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'calculator', component: Calculator },
  { path: 'converter', component: Converter },
  { path: 'about', component: About },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '404', component: NotFound },
  { path: '**', component: NotFound },
];
