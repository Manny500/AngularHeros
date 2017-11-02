import { Hero } from './hero';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})
  
//always expeort the compenent class because youll always import it somewhere else
export class HeroDetailComponent {
    @Input() hero: Hero;
  }