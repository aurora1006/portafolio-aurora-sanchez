import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  //styleUrl: './app.scss',
  standalone: true,
  templateUrl: './app.html',
})
export class App {
  //protected readonly title = signal('portafolio-aurora-sanchez');
}
