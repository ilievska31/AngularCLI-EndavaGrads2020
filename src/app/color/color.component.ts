import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {


  color = "Black";
  @Output() colorEvent = new EventEmitter<string>();

  @Input() nameM:string;
  constructor() { }

  sendColor() {
    this.colorEvent.emit(this.color);
  }


  // tslint:disable-next-line:typedef

}
