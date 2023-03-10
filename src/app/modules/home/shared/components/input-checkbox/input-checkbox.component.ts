import { Component, Input, OnInit } from '@angular/core';
import { InputInheritedComponent } from '../../../../../shared/components/input-inherited/input-inherited.component';

@Component({
  selector: 'app-input-checkbox',
  template: `
  <label>Checkbox</label>
    <input
      [type]="type"
      [checked]="checked"
      [value]="value"
    />
  `,
  styleUrls: ['./input-checkbox.component.scss']
})
export class InputCheckboxComponent extends InputInheritedComponent {
  @Input() checked: boolean = false
}
