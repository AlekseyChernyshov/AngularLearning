import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { MessageComponent } from './message/message.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [HeroesComponent, MessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heroes';
}
