import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InputAdvancedComponent } from './shared/components/input-advanced/input-advanced.component';
import { InputCheckboxComponent } from './shared/components/input-checkbox/input-checkbox.component';


@NgModule({
  declarations: [
    HomePageComponent,
    InputAdvancedComponent,
    InputCheckboxComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
