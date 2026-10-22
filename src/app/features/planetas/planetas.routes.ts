import { Routes } from '@angular/router';

export const PLANETAS_ROUTES: Routes = [
  {
    path: '',
    title: 'Planetas',
    loadComponent: () => import('./pages/planetas-page/planetas-page').then((m) => m.PlanetasPage),
  },
];
