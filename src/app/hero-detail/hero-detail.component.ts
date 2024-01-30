import { Component, Input, input } from '@angular/core';
import {Hero} from '../hero';
import { NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    UpperCasePipe
  ],
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
 @Input() hero?: Hero
}