import {Component} from '@angular/core';
import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import {FormsModule} from '@angular/forms';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';


@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
    HeroDetailComponent
  ],
})

export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  constructor(private toastr: ToastrService) {}

  onSelect(hero: Hero): void {
    if(hero.name.includes('a')) {
      this.selectedHero = hero;
    } else {
      this.toastr.error('Герой не содержит букву а')
    }
  }
  success(): void {
    this.toastr.success('Герой успешно подтвержден');
  }
}