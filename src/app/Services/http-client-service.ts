import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticuloClass } from '../../Models/articuloClass';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/articulos';
  
  getAll():Observable <ArticuloClass[]>{
    return this.http.get<ArticuloClass[]>(this.url)
  }

  get(id: String): Observable<ArticuloClass>{
    return this.http.get<ArticuloClass>(this.url + "/" + id);
  }

  delete(id: String){
    var response: Boolean;
    this.http.delete(this.url+"/"+id).subscribe((r) => console.log(r));
  }

  getByPrecio(precio: number){
    return this.http.get<ArticuloClass[]>(this.url+"/?precio_gte="+precio);
  }
  getByCategoria(categoria: string){
    console.log(this.url + "?categoria=" + categoria);
    return this.http.get<ArticuloClass[]>(this.url+"?categoria="+categoria);
  }

  postArticulo(articulo: ArticuloClass){
    return this.http.post<ArticuloClass>(this.url, articulo);
  }

  putArticulo(articulo: ArticuloClass){
    return this.http.put<ArticuloClass>(this.url+"/"+String(articulo.id), articulo);
  }
}
