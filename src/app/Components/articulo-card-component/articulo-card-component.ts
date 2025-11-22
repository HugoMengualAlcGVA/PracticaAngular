import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ArticuloClass } from '../../../Models/articuloClass';

@Component({
  selector: 'app-articulo-card-component',
  imports: [],
  templateUrl: './articulo-card-component.html',
  styleUrl: './articulo-card-component.scss',
})
export class ArticuloCardCompoent {
  @Input() articulo!: ArticuloClass;
  @Input() oscuro: boolean = false;
  @Input() showBtnCambiarAOscuro: boolean = false;

  @Output() cambiarAOscuro = new EventEmitter<boolean>();

  cambiarModoOscuro() {
    this.cambiarAOscuro.emit(this.oscuro);
  }
}
