import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  standalone: true,
  selector: 'nav-bar-component',
  imports: [RouterLink],
  templateUrl: './nav-bar-component.html',
  styleUrl: './nav-bar-component.scss',
})
export class NavBarComponent {

}
