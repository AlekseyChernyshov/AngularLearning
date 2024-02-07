import {Component, OnDestroy, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit{
  heroes: Hero[] = []

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
    if(!hero.name.includes('a')) 
     {
      this.toastr.error('Герой не содержит букву а')
    }
  }
  success(): void {
    this.toastr.success('Герой успешно подтвержден');
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}