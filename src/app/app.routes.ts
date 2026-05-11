import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import Home from './pages/home/home';
import { Services } from './pages/services/services';
import { About } from './pages/about/about';
import { Testimonials } from './pages/testimonials/testimonials';
import { Appointments } from './pages/appointments/appointments';
import { Contact} from './pages/contact/contact';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent:() => Home 
  },
  {
    path: 'servicios',
    loadComponent:() => Services 
  },
  {
    path: 'sobre-nosotros',
    loadComponent:() => About 
  },
  {
    path: 'testimonios',
    loadComponent:() => Testimonials 
  },
  {
    path: 'citas',
    loadComponent:() => Appointments 
  },
  {
    path: 'contacto',
    loadComponent:() => Contact 
  },
  {
    path: '**',
    redirectTo: () => {
      return 'home'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }