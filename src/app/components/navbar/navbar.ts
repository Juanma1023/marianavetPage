import { Component } from '@angular/core';
import { RouterLink , RouterLinkActive} from '@angular/router';
interface MenuOptions {
  label: string;
  subLabel: string;
  icon: string;
  route: string;
}
@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  menuOptions: MenuOptions[] =[
    {
    label: 'Inicio',
    subLabel: 'Página principal',
    icon: 'home',
    route: '/'
  },
  {
    label: 'Servicios',
    subLabel: 'Nuestros servicios veterinarios',
    icon: 'medical_services',
    route: '/servicios'
  },
  {
    label: 'Sobre Nosotros',
    subLabel: 'Conoce nuestra veterinaria',
    icon: 'pets',
    route: '/sobre-nosotros'
  },
  {
    label: 'Citas',
    subLabel: 'Agenda tu cita',
    icon: 'calendar_month',
    route: '/citas'
  },
  {
    label: 'Contacto',
    subLabel: 'Información de contacto',
    icon: 'call',
    route: '/contacto'
  }]
}
