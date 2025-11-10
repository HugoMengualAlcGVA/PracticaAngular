import { Component } from '@angular/core';
import { ArticuloClass } from '../../../Models/articuloClass';
import { HttpCLientService } from '../../Services/http-client-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-htttp-client-component',
  imports: [CommonModule],
  templateUrl: './htttp-client-component.html',
  styleUrl: './htttp-client-component.scss',
})
export class HtttpClientComponent {
  articulos!: ArticuloClass[];

  constructor(private http: HttpCLientService) { }

  ngOnInit() {
    this.http.getAll().subscribe({
      next: (datos) => (this.articulos = datos),
      error: (error) => console.log('ERROR JSON SERVER' + error.status),
    })
  }

  borrarArticulo(id: string){
    this.http.delete(id);
  }
}
