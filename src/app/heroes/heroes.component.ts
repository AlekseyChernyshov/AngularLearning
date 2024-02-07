import {Component, OnDestroy} from '@angular/core';
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

export class HeroesComponent {
  heroes: Observable<Hero[]> = this.heroService.getHeroes()
  selectedHero?: Hero;

  constructor(private toastr: ToastrService,
    private heroService: HeroService, private messageService: MessageService) {}

    // getHeroes(): void {
    //   this.heroService.getHeroes()
    //       .pipe(
    //         map(heros => heros.map(hero => hero.name))
          
    //       )
    //       .subscribe(heroes => {
    //         // this.heroes = heroes
    //         console.log(heroes);
    //       });
    // }

    ngOnInit(): void {
      // this.getHeroes();
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
}