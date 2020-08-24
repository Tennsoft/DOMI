import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerArrayService {

  constructor(
    private router: Router
  ) {
      this.difficultyChange.subscribe((value) => {
        this.difficulty = value
      });
    }

  //score
  gamescore = <number> 0;
  gold = <number> 2;

  getScore(){
    return this.gamescore;
  }

  addToScore(){
    this.gamescore++;
  }

  reduceScore(){
    this.gamescore--;
  }

  seeDifficultyChange() {
   this.difficultyChange.next(this.difficulty);
  }

  //queue initial length
  queuelength = 5;
  queueRoom = false;

  getQueueLength(){
    return this.queuelength;
  }

  //name
  name = <string> 'Brave Adventurer';
  
  setName(newName){
    if(newName){
      this.name = newName;
      if(newName === 'SpellSword') {
        this.spellSword();
      } else if (newName === 'Ben') {
        this.benName();
      } else if (newName === 'Money Bags') {
        this.moneyBagsName();
      }
    } else { 
      this.name = 'Brave Adventurer';
    }
  }

  moneyBagsName(){
    this.addToInventory('gold');
    this.addToInventory('gold');
    this.addToInventory('gold');
    this.addToInventory('gold');
    this.addToInventory('gold');
    this.addToInventory('gold');
    this.addToInventory('gold');
  }

  benName(){
    this.addToInventory('readME');
    this.addToInventory('automaticCrossbow');
  }

  spellSword(){
    this.addToInventory('sword');
    this.addToInventory('wand');
  }

  getName(){
    return this.name;
  }

  //inventory
  objectUnique( value ){
    var unique = true;
    this.inventory.forEach(function ( entry )
    {
        if ( entry == value )
        {
            unique = false;
        }
    });
    return unique;
}

  inventory = [];
  addToInventory(addedItem){
    if(this.objectUnique(addedItem)) {
      //console.log("added to inventory " + addedItem);
      this.inventory.push(addedItem);
    } else if(addedItem === 'gold') {
      //console.log("added gold")
      this.addGold();
    }
  }

  addGold(){
    this.gold = this.gold + 1;
  }
  spendGold(){
    this.gold = this.gold - 1;
  }
  getGold(){
    return this.gold;
  }

  removeFromInventory(removedItem){
    this.inventory = this.inventory.filter(items => items !== removedItem);
  }

  addHealthPotion(){
    let healthPotionList = ['greaterheathPotion','heathPotion','lesserheathPotion'];
    this.addToInventory(healthPotionList[Math.floor(Math.random()*3)]);
  }

  getInventory(){
    return this.inventory;
  }

  //health
  health = { 
    maxHP: <number> 4, 
    curHP: <number> 4, 
    bossHP: <number> 8
  };

  getHealth(){
    return this.health;
  }

  loseHealth(){
    this.health.curHP--;
    if(this.health.curHP === 0 ){
      this.router.navigate(['/endScreen'])
    }
  }

  gainHealth(){
    this.health.curHP++;
    if(this.health.curHP > this.health.maxHP){
      this.health.curHP = this.health.maxHP;
    }
  }

  instantDeath(){
    while(this.health.curHP > 0){
      this.loseHealth();
    }
  }

  //fight results
  fight_result = "";

  getFightResult(){
    return this.fight_result;
  }

  setFightResult(result){
    this.fight_result = result;
    //console.log(this.fight_result);
  }


  //position
  position = { x: 1, y: 0 };
    
  setPosition(new_position){
    return this.position = new_position;
  }

  getPosition(){
    return this.position;
  }

  // toggle(input){
  //   if(input == true){
  //     return input = false;
  //   }
  //   else{
  //     return input = true;
  //   }
  // }

  //resetting the game

  clearInventory(){
    this.inventory = [];
    this.health.curHP = this.health.maxHP;
    this.setName('');
    this.router.navigate(['/']);
  }

  restartInventory(){
    this.inventory = [this.inventory[0]];
    this.health.curHP = this.health.maxHP;
  }

  resetPosition(){
    this.setPosition({x:1, y:0});
  }

  //difficulty
  difficulty: string = "";

  setDifficulty(diff){
    return this.difficulty = diff; 
  }

  getDifficulty(){
    return this.difficulty;
  }

  difficultyChange: Subject<string> = new Subject<string>();
}
