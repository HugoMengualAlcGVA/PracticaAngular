import { Component } from '@angular/core';
import { ARTICULOS } from '../../../Models/datos';
import { articuloClass } from '../../../Models/articuloClass';
import { CommonModule } from '@angular/common';
import { ArticulosService } from '../../Services/articulos-service';

@Component({
  selector: 'app-tabla-component',
  imports: [CommonModule],
  templateUrl: './tabla-component.html',
  styleUrl: './tabla-component.scss',
})

export class TablaComponent {
  articulos: articuloClass[] = ARTICULOS;

  constructor(private articulosService: ArticulosService) { }

  borrarArticulo(id: string){
    this.articulosService.deleteArticulo(id);
  }


}
