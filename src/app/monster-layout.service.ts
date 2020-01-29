import { Injectable } from '@angular/core';

import { monsters } from '../../assets/monsters.json';

@Injectable({
  providedIn: 'root'
})
export class MonsterLayoutService {

  //constructor() { }

 
  generateMonsters(): Array<Object>{
  //make a blank to take results
  let my_monster_list: Array<Object> = [];
  //choose one from original
  while(my_monster_list.length < 6){
  let randomNum: number = Math.floor(Math.random()*monsters.length);
  let my_choice = monsters[randomNum];
  //check if already in results, if not, push
  var found = false;
  for(var i = 0; i < my_monster_list.length; i++) {
    if (my_monster_list[i] == my_choice) {
        found = true;
        break;
    }
}
  if(found == false){
    my_monster_list.push(my_choice);
  }
}
  return my_monster_list;
}


}
