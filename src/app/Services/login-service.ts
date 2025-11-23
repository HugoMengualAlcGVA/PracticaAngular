import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService{
  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/password';

  isAdminSubject = new BehaviorSubject<boolean>(false);

  isAdmin$: Observable<boolean> = this.isAdminSubject.asObservable();

  logIn(password: string) {
    this.http.get<string[]>(this.url).subscribe({
      next: (datos) => {
        console.log(datos);
        
        if (datos.at(0) === password){
          this.isAdminSubject.next(true);
        }else{
          this.isAdminSubject.next(false);
          alert("Contraseña incorrecta");
        }
      },
      error: (error) => console.log('ERROR JSON SERVER' + error.status), 
    });
  }
  logOut() {
    this.isAdminSubject.next(false);
  }
}
