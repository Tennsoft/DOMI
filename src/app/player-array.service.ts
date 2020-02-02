import { Injectable } from '@angular/core';


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
  position= {x:1,y:0};
    
  setPosition(new_position){
    return this.position = new_position;
  }

  getPosition(){
    return this.position;
}
  
}
