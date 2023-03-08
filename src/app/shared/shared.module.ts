import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSharedComponent } from './components/input-shared/input-shared.component';

@NgModule({
  declarations: [
    InputSharedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputSharedComponent
  ]
})
export class SharedModule { }
