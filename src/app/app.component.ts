import { Component } from '@angular/core';
import { PlayerArrayService } from './player-array.service';
import { treasure } from '../../assets/treasure.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'domi';
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
