import { Component } from '@angular/core';
import { PlayerArrayService } from '../player-array.service';
import { treasure } from '../../assets/treasure.json';

@Component({
  selector: 'app-dev-box',
  templateUrl: './dev-box.component.html',
  styleUrls: ['./dev-box.component.css']
})
export class DevBoxComponent{

  constructor(
    protected playerArray: PlayerArrayService
  ){}

  //dev method for adding all items to inventory 
  addAll(){
    treasure.forEach(element => { 
      this.playerArray.addToInventory(element.name);
    });
  }
}
