import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LoginService } from '../../Services/login-service';

@Component({
  standalone: true,
  selector: 'nav-bar-component',
  imports: [RouterLink],
  templateUrl: './nav-bar-component.html',
  styleUrl: './nav-bar-component.scss',
})
export class NavBarComponent {
  loginService = inject(LoginService);

  isAdmin! : boolean;

  logIn(): void {
    //admin123
    let password = prompt("Ingrese la contraseña de administrador:");
    if (password !== null) {
      this.loginService.logIn(password);
    }else{
      alert("No se introdujo contraseña")
    }
  }

  logOut(): void {
    this.loginService.logOut();
  }

  ngOnInit(): void{
    this.loginService.isAdmin$.subscribe({
      next: (isAdmin) => this.isAdmin = isAdmin,
      error: (error) => console.log(error)
    });
  }
}
