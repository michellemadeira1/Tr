import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  condition: boolean = true;

  constructor(){}

  onCondition(){
    this.condition= !this.condition;
  }
}
