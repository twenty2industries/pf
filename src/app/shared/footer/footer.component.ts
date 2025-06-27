import { Component, Input } from '@angular/core';
import { HeroData } from '../../main-content/interfaces/hero.interface';


@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() heroData!: HeroData;
}
