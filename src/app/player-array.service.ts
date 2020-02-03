import { Injectable, EventEmitter  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerArrayService {

  constructor() {
    
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
  inventoryUpdated = new EventEmitter();

  inventory = [];
  addToInventory(addedItem){
    this.inventory.push(addedItem);
    this.inventoryUpdated.emit(addedItem);
  }

  getInventory(){
    return this.inventory;
  }
  clearInventory(){
    this.inventory = [];
  }
  restartInventory(){
    this.inventory = [this.inventory[0]];
  }

  //searching for treasure
  can_search = false;
  getSearchPossible(){
    return this.can_search;
  }

  setSearchPossible(arg){
    return this.can_search = arg;
  }


  //health
  health = {maxHP: <number> 4, curHP: <number> 4, bossHP: <number> 8};
  getHealth(){
    return this.health;
  }

  //position
  position = { x: 1, y: 0 };
    
  setPosition(new_position){
    return this.position = new_position;
  }

  getPosition(){
    return this.position;
}
  
}
