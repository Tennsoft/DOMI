import { Injectable } from '@angular/core';

import { PlayerArrayService } from './player-array.service';

import { HealthChangeService } from './health-change.service'

import monsters from '../../assets/monsters.json';
import bosses from '../../assets/bosses.json';
import { MonsterLayoutService } from './monster-layout.service';
import { RoomLayoutService } from './room-layout.service';

@Injectable({
  providedIn: 'root'
})
export class AttackService {

  constructor(
    public playerArray: PlayerArrayService,
    public healthChange: HealthChangeService,
    public monster_layout_service: MonsterLayoutService,
    public room_layout_service: RoomLayoutService
  ) { }
  currentMonster = '';
  setMonster(monsterName){
    this.currentMonster = monsterName;
  }

  getMonster(){
    return this.currentMonster;
  }

  monster_list = this.monster_layout_service.random_monster_layout;
  //bring in boss monsters, random order
  boss_list = this.monster_layout_service.random_boss_layout;
  //bring in treasure to find, random order
  treasure_list = this.room_layout_service.random_treasure_layout;



  attackDeclared(damageType){
    console.log("you attacked the " + this.currentMonster + " with the " + damageType);
    let curr_mons = this.currentMonster;
    let my_monster_entry = monsters.monsters.filter(function(items){
      return(items.namePretty === curr_mons)
    })[0];
    

    //set dead to true
    //let my_monster_index = 
    for(var i=0; i< this.monster_list.length; i++){
      if(this.monster_list[i].namePretty == curr_mons){
        this.monster_list[i].dead = true;
      }
    
    }



    if(this.usedWeakness(damageType, this.currentMonster)){
      
      this.playerArray.setFightResult(my_monster_entry.fightDie);
      console.log("you used the right weapon");
     } else {
       console.log("you used the wrong weapon");
       this.playerArray.loseHealth();
       this.healthChange.updateLife();
       this.playerArray.setFightResult(my_monster_entry.fightDamage);
     }

           
  }

  usedWeakness(damageType, monster){ 
    let chosen = monsters.monsters.filter(function(items) {
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
