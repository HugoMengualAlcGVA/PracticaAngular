import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArticuloClass } from '../../../Models/articuloClass';
import { ARTICULOS } from '../../../Models/datos';
import { ArticulosService } from '../../Services/articulos-service';


@Component({
  selector: 'articulos-component',
  imports: [FormsModule],
  templateUrl: './articulos-component.html',
  styleUrl: './articulos-component.scss'
})
export class articulosComponent {
  articulos: ArticuloClass[] = ARTICULOS;

  constructor(private articulosService: ArticulosService) { }

  verArticulos(){
    
  }
}
