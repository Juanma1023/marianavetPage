import { Component, inject, OnInit } from '@angular/core';
import { Hero } from "../../components/hero/hero";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [Hero],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Principal Page');
    this.meta.updateTag({name: 'description', content: 'Esta es la pagina principal'});
    this.meta.updateTag({name: 'og:title', content: 'Principal Page'});
    this.meta.updateTag({name: 'keywords', content: 'veretinaria, virginia, risaralda, pereira, vacunacion'});
  }


}
