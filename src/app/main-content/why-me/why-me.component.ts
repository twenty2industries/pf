import { Component, Input } from '@angular/core';
import { WhyMeData } from '../interfaces/why-me.interface';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
  selector: 'app-why-me',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {
@Input() whymeData!: WhyMeData;

}
