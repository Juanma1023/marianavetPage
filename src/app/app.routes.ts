import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import Home from './pages/home/home';
import { Services } from './pages/vetservices/vetservices';
import { About } from './pages/about/about';
import { Appointments } from './pages/appointments/appointments';
import { Contact } from './pages/contact/contact';

import { ConsultaMedica } from './pages/vetservices/services_types/consulta_medica/consulta_medica';
import { Desparasitacion } from './pages/vetservices/services_types/desparasitacion/desparasitacion';
import { ExamenesLaboratorio } from './pages/vetservices/services_types/examenes-laboratorio/examenes-laboratorio';
import { ManejoAmbulatorio } from './pages/vetservices/services_types/manejo-ambulatorio/manejo-ambulatorio';
import { Nebulizacion } from './pages/vetservices/services_types/nebulizacion/nebulizacion';
import { Vacunacion } from './pages/vetservices/services_types/vacunacion/vacunacion';

type RouteConfig = {
  path: string;
  component: Type<any>;
};

const pages: RouteConfig[] = [
  { path: 'home', component: Home },
  { path: 'sobre-nosotros', component: About },
  { path: 'citas', component: Appointments },
  { path: 'contacto', component: Contact }
];

const services: RouteConfig[] = [
  { path: 'consulta-medica', component: ConsultaMedica },
  { path: 'desparasitacion', component: Desparasitacion },
  { path: 'examenes-laboratorio', component: ExamenesLaboratorio },
  { path: 'manejo-ambulatorio', component: ManejoAmbulatorio },
  { path: 'nebulizacion', component: Nebulizacion },
  { path: 'vacunacion', component: Vacunacion }
];

export const routes: Routes = [
  ...pages.map(page => ({
    path: page.path,
    loadComponent: () => page.component
  })),
  {
    path: 'servicios',
    loadComponent: () => Services
  },

  ...services.map(service => ({
    path: `servicios/${service.path}`,
    loadComponent: () => service.component
  })),
  {
    path: '**',
    redirectTo: 'home'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}