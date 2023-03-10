import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputInterface } from '@shared/model/input.model';

@Component({
  selector: 'app-input-inherited',
  template: `
    <div class="form-group">
      <label>{{ label }}</label>
      <input
        type="{{ type }}"
        class="form-control"
        [value]="value"
        (input)="onInput($event)"
      >
    </div>
  `,
  styleUrls: ['./input-inherited.component.scss']
})
export class InputInheritedComponent{
  @Input() label: string = '';
  @Input() value: any = '';
  @Input() type: InputInterface = 'text';
  @Output() valueChange = new EventEmitter<any>();
  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const newValue = inputElement.value;
    this.value = newValue;
    this.valueChange.emit(newValue);
  }
}
