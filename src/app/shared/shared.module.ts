import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputSharedComponent } from './components/input-shared/input-shared.component';
import { InputInheritedComponent } from './components/input-inherited/input-inherited.component';

@NgModule({
  declarations: [
    InputSharedComponent,
    InputInheritedComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputSharedComponent,
    InputInheritedComponent
  ]
})
export class SharedModule { }
