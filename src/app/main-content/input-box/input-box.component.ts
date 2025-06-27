import { Component, Input } from '@angular/core';
import { InputBoxData } from '../interfaces/input-box.interface';

@Component({
  selector: 'app-input-box',
  imports: [],
  templateUrl: './input-box.component.html',
  styleUrl: './input-box.component.scss',
})
export class InputBoxComponent {
  @Input() inputBoxData!: InputBoxData;
  @Input() feedbackData!: InputBoxData;

  isInputActive = false;

  toggleInputFocus() {
    this.isInputActive = !this.isInputActive;
  }
}
