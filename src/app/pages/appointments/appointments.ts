import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-appointments',
  imports: [],
  templateUrl: './appointments.html',
  styleUrl: './appointments.css',
})
export class Appointments implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta)

  ngOnInit(): void {
    this.title.setTitle('Appointment Page');
    this.meta.updateTag({name: 'description', content: 'Esta es la pagina para agendar citas'});
    this.meta.updateTag({name: 'og:title', content: 'Appointment Page'});
    this.meta.updateTag({name: 'keywords', content: 'veretinaria, virginia, risaralda, pereira, vacunacion'});
  }
}
