import { Component, inject } from '@angular/core';
import { ArticuloClass } from '../../../Models/articuloClass';
import { HttpClientService } from '../../Services/http-client-service';
import { CommonModule } from '@angular/common';
import { ArticuloCardCompoent } from "../articulo-card-component/articulo-card-component";

@Component({
  selector: 'app-htttp-client-component',
  imports: [CommonModule, ArticuloCardCompoent],
  templateUrl: './htttp-client-component.html',
  styleUrl: './htttp-client-component.scss',
})
export class HtttpClientComponent {
  articulos!: ArticuloClass[];

  //constructor(private http: HttpCLientService) { }
  http = inject(HttpClientService);

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.http.getAll().subscribe({
      next: (datos) => (this.articulos = datos),
      error: (error) => console.log('ERROR JSON SERVER' + error.status),
    })
  }

  getArticuloById(id:string){
    this.http.get(id).subscribe({next:(datos) => console.log(datos)});
  }

  getArticulosByPrecio(){
    let precio : number | null = Number(prompt("Dime precio"));
    if(precio){
      this.http.getByPrecio(precio).subscribe({
        next: datos => {
          if(datos.length != 0) console.log(datos)
          else console.log("No hay resultados");
        }
        
      });
    }else console.log("No se especifico precio");
    
  }

  getArticulosByCategoria(){
    let categoria : string | null = prompt("Dime categoria");
    if(categoria){
      this.http.getByCategoria(categoria).subscribe({
        next: datos => {
          if(datos.length != 0) console.log(datos)
          else console.log("No hay resultados");
        }
        
      });
    }else console.log("No se especifico precio");
    
  }

  borrarArticulo(id: string){
    this.http.delete(id);
    this.getData();
  }
}
