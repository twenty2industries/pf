import { Component, Input } from '@angular/core';
import { HeroData } from '../../main-content/interfaces/hero.interface';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() heroData!: HeroData;
}
