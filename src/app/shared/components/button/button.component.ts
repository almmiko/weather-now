import { Component, EventEmitter, Input, Output } from '@angular/core';

type Config = {
  text: string;
};

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() config: Config = {
    text: '',
  };
  @Output() buttonClickEvent = new EventEmitter();

  onClick(): void {
    this.buttonClickEvent.emit();
  }
}
