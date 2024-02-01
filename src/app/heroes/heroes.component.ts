import {Component} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private toastr: ToastrService,
    private heroService: HeroService, private messageService: MessageService) {}

    getHeroes(): void {
      this.heroService.getHeroes()
          .subscribe(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
      this.getHeroes();
    }

  onSelect(hero: Hero): void {
    if(hero.name.includes('a')) {
      this.selectedHero = hero;
      this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
    } else {
      this.toastr.error('Герой не содержит букву а')
    }
  }
  success(): void {
    this.toastr.success('Герой успешно подтвержден');
  }
}