import { Component, Input } from '@angular/core';
import { HeroData } from '../interfaces/hero.interface';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input() heroData!: HeroData;

  isHovered: boolean = false;
}
