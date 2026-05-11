import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class Testimonials implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta)

  ngOnInit(): void {
    this.title.setTitle('Testimonials Page');
    this.meta.updateTag({name: 'description', content: 'Esta es la pagina de Testimonios'});
    this.meta.updateTag({name: 'og:title', content: 'Testimonials Page'});
    this.meta.updateTag({name: 'keywords', content: 'veretinaria, virginia, risaralda, pereira, vacunacion'});
  }
}
