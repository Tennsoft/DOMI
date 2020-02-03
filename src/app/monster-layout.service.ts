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
  
    return array;
  }
  
  random_monster_layout = this.scrambleMonsters(monsters);

  random_boss_layout = this.scrambleMonsters(bosses);
 



}
