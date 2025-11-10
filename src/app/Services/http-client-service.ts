import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticuloClass } from '../../Models/articuloClass';

@Injectable({
  providedIn: 'root',
})
export class HttpCLientService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/articulos';
  
  getAll():Observable <ArticuloClass[]>{
    return this.http.get<ArticuloClass[]>(this.url)
  }

  get(id: String): Observable<ArticuloClass>{
    return this.http.get<ArticuloClass>(this.url + "/" + id);
  }

  delete(id: String): Boolean{
    var response: Boolean;
    this.http.delete(this.url+"/"+id).subscribe((r) => console.log(r));
    return true;
  }
}
