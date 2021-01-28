import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent{


  name = 'Ane Ilievska';
  color:string;

  constructor() { }

  receiveColor($event) {
    this.color=$event;
  }

}
