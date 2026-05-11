import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta)

  ngOnInit(): void {
    this.title.setTitle('Services Page');
    this.meta.updateTag({name: 'description', content: 'Esta es la pagina de Servicios'});
    this.meta.updateTag({name: 'og:title', content: 'Services Page'});
    this.meta.updateTag({name: 'keywords', content: 'veretinaria, virginia, risaralda, pereira, vacunacion'});
  }
}
