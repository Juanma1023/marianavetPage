import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { ConsultaMedica } from "./services_types/consulta_medica/consulta_medica";

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './vetservices.html',
  styleUrl: './vetservices.css',
})



export class Services implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta)


  servicios = [
    {
      title: 'Consulta Médica',
      description: 'Evaluación general de la salud de tu mascota.',
      path: 'consulta-medica'
    },
    {
      title: 'Desparasitación',
      description: 'Control y prevención de parásitos internos y externos.',
      path: 'desparasitacion'
    },
    {
      title: 'Exámenes de Laboratorio',
      description: 'Análisis clínicos para diagnóstico preciso.',
      path: 'examenes-laboratorio'
    },
    {
      title: 'Manejo Ambulatorio',
      description: 'Tratamientos y seguimiento sin hospitalización.',
      path: 'manejo-ambulatorio'
    },
    {
      title: 'Nebulización',
      description: 'Terapia respiratoria para problemas pulmonares.',
      path: 'nebulizacion'
    },
    {
      title: 'Vacunación',
      description: 'Aplicación de vacunas preventivas.',
      path: 'vacunacion'
    }
  ];
items: any;

  ngOnInit(): void {
    this.title.setTitle('Services Page');
    this.meta.updateTag({name: 'description', content: 'Esta es la pagina de Servicios'});
    this.meta.updateTag({name: 'og:title', content: 'Services Page'});
    this.meta.updateTag({name: 'keywords', content: 'veretinaria, virginia, risaralda, pereira, vacunacion'});
  }


}
