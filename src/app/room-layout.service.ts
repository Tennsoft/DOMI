import { Injectable } from '@angular/core';

import { rooms } from '../../assets/rooms.json';

@Injectable({
  providedIn: 'root'
})
export class RoomLayoutService {

  constructor() { }


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
  


}
