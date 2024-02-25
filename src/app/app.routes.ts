import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DataComponent } from './pages/data/data.component';

export const routes: Routes = [
  // home route
  {
    path: '',
    component: HomeComponent,
  },

  // data route
  {
    path: 'data',
    component: DataComponent,
  },
];
