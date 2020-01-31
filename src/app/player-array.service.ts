import { Injectable } from '@angular/core';

import { DungeonComponent } from './dungeon/dungeon.component';

@Injectable({
  providedIn: 'root'
})
export class PlayerArrayService {

  constructor() {
    // position = {x: <number> 0, y: <number> 1};
    // this.dungeonComponent.subscribe((this.new_position) => {
    //    position = this.new_position; 
   }

  //name
  name = <string> '';
  setName(newName){
    this.name = newName;
  }
  getName(){
    return this.name;
  }

  //inventory
  inventory = [];
  addToInventory(addedItem){
    this.inventory.push(addedItem);
  }
  getInventory(){
    return this.inventory;
  }

  //health
  health = {maxHP: <number> 4, curHP: <number> 4, bossHP: <number> 8};
  getHealth(){
    return this.health;
  }

  //position
  position = {x: <number> 0, y: <number> 1};
  getPosition(){
    return this.position;
  }
  setPosition(new_position){
    this.position = new_position;
  }
  
}
