import { Injectable } from '@angular/core';

import { monsters } from '../../assets/monsters.json';
import { bosses } from '../../assets/bosses.json';

@Injectable({
  providedIn: 'root'
})
export class MonsterLayoutService {

  constructor() { }

  scrambleMonsters(array): Array<any> {
    let currentIndex: number = array.length;
    let temporaryValue: number, randomIndex: number;
  
    //while there are things to scramble
    while (0 !== currentIndex) {
  
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
  
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }
  
    console.log("new monster list is \n " + array);
    let x = this.generateMonsterList(array);
    return array;

  }
  generateMonsterList(array): Array<any> {
    let newMonsterList = [];
    while(newMonsterList.length <= 40) {
      let newID = Math.floor(Math.random() * (array.length - 1));
      newMonsterList.push(array[newID]);
    }
    console.log("new monster list is \n " + newMonsterList);
    return newMonsterList;
  }
  random_monster_layout = this.scrambleMonsters(monsters); 

  random_boss_layout = this.scrambleMonsters(bosses);
}
