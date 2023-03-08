import { Component, OnInit } from '@angular/core';
import { inputTypeMock } from '@shared/mocks/type-input-mock';
import { InputInterface } from '@shared/model/input.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  inputType: InputInterface = 'text';
  index: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeInput(){
    if(this.index < inputTypeMock.length){
      this.inputType = inputTypeMock[this.index];
      this.index++
    } else {
      this.index = 0;
      this.inputType = inputTypeMock[this.index];
    }
  }
}
