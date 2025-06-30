import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";



@Component({
  selector: 'app-legal-notice',
  imports: [HeaderComponent, TranslatePipe, TranslateDirective],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}
