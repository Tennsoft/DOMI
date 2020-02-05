import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { PlayerArrayService } from './player-array.service';
import { HealthChangeService } from './health-change.service';

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
    private router: Router,
    public monster_layout_service: MonsterLayoutService,
    public room_layout_service: RoomLayoutService
  ) { }
  
  bossFight = false;
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
    try{
      let curr_mons = this.currentMonster;
      let my_monster_entry = monsters.monsters.filter(function(items){
        return(items.namePretty === curr_mons)
      })[0];
      

      //set dead to true
      for(var i=0; i< this.monster_list.length; i++){
        if(this.monster_list[i].namePretty == curr_mons){
          this.monster_list[i].dead = true;
        }
      }

      //pos = myArray.map(function(e) { return e.hello; }).indexOf('stevie');
      let my_index = this.monster_list.map(function(e){return e.namePretty;}).indexOf(curr_mons);
      //console.log(my_index);
      if(this.usedWeakness(damageType, this.currentMonster)){
        
        this.playerArray.setFightResult(my_monster_entry.fightDie + " You found treasure! Check your inventory.");
        this.playerArray.addToInventory(this.treasure_list[my_index].name);
        //console.log("you used the right weapon");
      } else {
        //console.log("you used the wrong weapon");
          this.playerArray.loseHealth();
          this.healthChange.updateLife();
          this.playerArray.setFightResult(my_monster_entry.fightDamage + " You found treasure! Check your inventory.");
          this.playerArray.addToInventory(this.treasure_list[my_index].name);
      }
    } catch (error) {
      let curr_mons = this.currentMonster;
      let my_monster_entry = bosses.bosses.filter(function(items){
        return(items.namePretty === curr_mons)
      })[0];

      let my_index = this.boss_list.map(function(e){return e.namePretty;}).indexOf(curr_mons);
      console.log(my_index);
      if(this.usedWeakness(damageType, this.currentMonster)){
        
        this.playerArray.setFightResult(my_monster_entry.fightDie + " You found treasure! Check your inventory.");
        this.playerArray.addToInventory(this.treasure_list[my_index].name);
        console.log("you used the right weapon");
      } else {
        console.log("you used the wrong weapon");
          this.playerArray.loseHealth();
          this.healthChange.updateLife();
          this.playerArray.setFightResult(my_monster_entry.fightDamage + " You found treasure! Check your inventory.");
          this.playerArray.addToInventory(this.treasure_list[my_index].name);
      }
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
        this.router.navigate(['/endScreen'])
        return true;
      } else { 
        return false; 
      }

    }
    
  }

}
