import { Component, Input } from '@angular/core';
import { InputInheritedComponent } from '../../../../../shared/components/input-inherited/input-inherited.component';
import { InputInterface } from '@shared/model/input.model';

@Component({
  selector: 'app-input-advanced',
  template: `
    <app-input-inherited
      label="Input avanzado"
      [value]="value"
      [type]="customType"
      (valueChange)="onValueChange($event)"
    ></app-input-inherited>
    <p class="text-light text-center mt-2">{{value}}</p>
  `,
  styleUrls: ['./input-advanced.component.scss']
})
export class InputAdvancedComponent extends InputInheritedComponent {
  @Input() customType: InputInterface = 'text';
  onValueChange(newValue: any) {
    this.value = newValue;
  }
}
