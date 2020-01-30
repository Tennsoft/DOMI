import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerArrayService {

  //constructor() { }

  //name

  //inventory

  //health
  health = {maxHP: <number> 4, curHP: <number> 4, bossHP: <number> 8};
  getHealth(){
    return this.health;
  }

  //position
  position = {x: <number> 0, y: <number> 1};

}
