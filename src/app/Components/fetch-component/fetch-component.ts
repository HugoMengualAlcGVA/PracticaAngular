import { Component } from '@angular/core';
import { ArticuloClass } from '../../../Models/articuloClass';

@Component({
  selector: 'app-fetch-component',
  imports: [],
  templateUrl: './fetch-component.html',
  styleUrl: './fetch-component.scss',
})
export class FetchComponent {
  articulos!: ArticuloClass[];
  url = 'http://localhost:3000/articulos';

  async ngOnInit() {
    try {
      let response = await fetch(this.url);
      let datos = await response.json();
      if (!response.ok) throw new Error('Error');
      this.articulos = datos;
    } catch (error) {
      console.log(error);
    }
  }
}