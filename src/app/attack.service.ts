import { Injectable } from '@angular/core';

import { PlayerArrayService } from './player-array.service';

import { HealthChangeService } from './health-change.service'

import monsters from '../../assets/monsters.json';
import bosses from '../../assets/bosses.json';

@Injectable({
  providedIn: 'root'
})
export class AttackService {

  constructor(
    public playerArray: PlayerArrayService,
    public healthChange: HealthChangeService
  ) { }
  currentMonster = '';
  setMonster(monsterName){
    this.currentMonster = monsterName;
  }

  attackDeclared(damageType){
    console.log("you attacked the " + this.currentMonster + " with the " + damageType);
    
    if(this.usedWeakness(damageType, this.currentMonster)){
      console.log("you used the right weapon");
     } else {
       console.log("you used the wrong weapon");
       this.playerArray.loseHealth();
       this.healthChange.updateLife();
     }
    
  }

  usedWeakness(damageType, monster){ 
    let chosen = monsters.monsters.filter(function(items) {
    return(items.namePretty === monster);
  })[0];

    try{
      if(chosen.namePretty === '') {
        return true;
      } else if(chosen.weakness === damageType) {
        return true;
      } else { 
        return false; 
      }
    } catch (error) {
      let chosen = bosses.bosses.filter(function(items) {
        return(items.namePretty === monster);
      })[0];
      if(chosen.namePretty === '') {
        return true;
      } else if(chosen.weakness === damageType) {
        return true;
      } else { 
        return false; 
      }

    }
    
  }

}
