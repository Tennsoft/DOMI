import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerArrayService {

  //constructor() { }

  //name
  name = <string> '';
  setName(newName){
    this.name = newName;
  }
  getName(){
    return this.name;
  }

  //inventory
  invventory = [];
  addToInventory(addedItem){
    this.invventory.push(addedItem);
  }
  getInventory(){
    return this.invventory;
  }

  //health
  health = {maxHP: <number> 4, curHP: <number> 4, bossHP: <number> 8};
  getHealth(){
    return this.health;
  }

  //position
  position = {x: <number> 0, y: <number> 1};

}
