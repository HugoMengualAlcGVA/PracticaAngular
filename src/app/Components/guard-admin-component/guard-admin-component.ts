import { Component, inject } from '@angular/core';
import { ArticuloClass } from '../../../Models/articuloClass';
import { HttpClientService } from '../../Services/http-client-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guard-admin-component',
  imports: [CommonModule],
  templateUrl: './guard-admin-component.html',
  styleUrl: './guard-admin-component.scss',
})
export class GuardAdminComponent {
  articulos!: ArticuloClass[];

  //constructor(private http: HttpCLientService) { }
  http = inject(HttpClientService);

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.getAll().subscribe({
      next: (datos) => (this.articulos = datos),
      error: (error) => console.log('ERROR JSON SERVER' + error.status),
    })
  }

  getArticuloById(id: string) {
    this.http.get(id).subscribe({ next: (datos) => console.log(datos) });
  }

  anyadirElemento() {
    let id = prompt("Dime la id");
    let nombre = prompt("Dime nombre");
    let categoria = prompt("Dime categoria");
    let descripcion = prompt("Dime descripción");
    let unidades = Number(prompt("Dime unidades"));
    let precio = Number(prompt("Dime precio"));

    if (
      nombre != null && categoria != null && descripcion != null
      && unidades != null && precio != null && id != null
    ) {
      let articulo: ArticuloClass = new ArticuloClass(id, nombre, categoria, descripcion, unidades, precio);
      this.http.postArticulo(articulo).subscribe((datos => console.log(datos)));
      this.getData();
    } else {
      alert("No se ha indicado un valor para alguno de los campos");
    }
  }

  modificarArticulo(a: ArticuloClass) {
    let valorAModificar = prompt("Que valor quieres modificar (sin accentos ni mayusculas)?");
    let nuevoValor = prompt("Cual es el nuevo valor");

    if (valorAModificar != null) {

      switch (valorAModificar) {
        case "nombre":
          a.nombre = String(nuevoValor);
          break;
        case "categoria":
          a.categoria = String(nuevoValor);
          break;
        case "descripcion":
          a.descripcion = String(nuevoValor);
          break;
        case "unidades":
          a.unidades = Number(nuevoValor);
          break;
        case "precio":
          a.precio = Number(nuevoValor);
          break;
        default:
          alert("El valor a modificar no es correcto");
          break;
      }

      this.http.putArticulo(a).subscribe();
      this.getData();
    } else alert("No se ha indicado un valor a modificar");
  }

  borrarArticulo(id: string) {
    this.http.delete(id);
    this.getData();
  }
}
