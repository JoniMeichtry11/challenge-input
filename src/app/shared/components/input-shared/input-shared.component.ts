import { Component, OnInit, Input } from '@angular/core';
import { InputInterface } from '@shared/model/input.model';

@Component({
  selector: 'app-input-shared',
  templateUrl: './input-shared.component.html',
  styleUrls: ['./input-shared.component.scss']
})
export class InputSharedComponent implements OnInit {
  @Input() type: InputInterface = "text";
  @Input() value: any = "";
  @Input() placeHolder: string = "Input";
  @Input() name: string = "";
  @Input() class: string = "";
  @Input() color: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
