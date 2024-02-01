import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { NgClass } from '@angular/common';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
@Input() hero?: Hero; 
}
