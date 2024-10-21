import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContainerComponent } from './main-container';
import { NavBarComponent } from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainContainerComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce_angular';
}
