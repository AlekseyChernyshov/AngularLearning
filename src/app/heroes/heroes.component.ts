import { Component } from '@angular/core';
import { Hero } from '../hero';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  constructor(private toastr: ToastrService) {}

  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    class: 'Fighter'
  }

  success(): void {
    this.toastr.success('Герой успешно подтвержден');
  }
}
