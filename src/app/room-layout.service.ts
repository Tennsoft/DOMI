import { Injectable } from '@angular/core';

import { rooms } from '../assets/rooms.json';
import { treasure } from '../assets/treasure.json';

@Injectable({
  providedIn: 'root'
})
export class RoomLayoutService {

  constructor() { }

     // let dungeonLayout = rooms.map(a => a.id);
    // function newDungeon(array) {
    //  array.sort(() => Math.random() - 0.5);
    // }
    // let my_new_dungeon = newDungeon(dungeonLayout);
    // return my_new_dungeon;
    //console.log(dungeonLayout);

   scrambleRooms(array): Array<any> {
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
  
  random_room_layout = this.scrambleRooms(rooms);

  found_treasures = treasure.filter(items => items.name !== 'sword' && items.name !== 'wand');

  random_treasure_layout = this.scrambleRooms(this.found_treasures);
  


}
