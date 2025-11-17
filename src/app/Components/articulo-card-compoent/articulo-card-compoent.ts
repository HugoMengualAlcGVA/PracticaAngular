import { Component, Input } from '@angular/core';
import { ArticuloClass } from '../../../Models/articuloClass';

@Component({
  selector: 'app-articulo-card-compoent',
  imports: [],
  templateUrl: './articulo-card-compoent.html',
  styleUrl: './articulo-card-compoent.scss',
})
export class ArticuloCardCompoent {
  @Input() articulo!: ArticuloClass;
}
