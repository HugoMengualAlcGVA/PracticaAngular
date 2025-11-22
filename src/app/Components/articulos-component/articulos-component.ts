import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArticuloClass } from '../../../Models/articuloClass';
import { ARTICULOS } from '../../../Models/datos';
import { ArticulosService } from '../../Services/articulos-service';
import { ArticuloCardCompoent } from '../articulo-card-component/articulo-card-component';

@Component({
  selector: 'articulos-component',
  imports: [FormsModule, ArticuloCardCompoent],
  templateUrl: './articulos-component.html',
  styleUrl: './articulos-component.scss'
})
export class articulosComponent {
  articulos: ArticuloClass[] = ARTICULOS;

  constructor(private articulosService: ArticulosService) { }

  // verArticulos(){
    
  // }
  numArticulosOscuros: number = 0;
  oscuro: boolean = false;

  articulosModoOscuro(oscuro: boolean){
    if(oscuro){
      this.numArticulosOscuros++;
    }else{
      this.numArticulosOscuros--;
    }
  }
}
