import { Injectable } from '@angular/core';

import { rooms } from '../../assets/rooms.json';

@Injectable({
  providedIn: 'root'
})
export class RoomLayoutService {

  constructor() { }

  scrambleRooms(): Array<Object>{
    //make a blank to take results
    let my_room_list: Array<Object> = [];
    //choose one from original
    while(my_room_list.length < 8){
    let randomNum: number = Math.floor(Math.random()*rooms.length);
    let my_choice = rooms[randomNum];
    //check if already in results, if not, push
    var found = false;
    for(var i = 0; i < my_room_list.length; i++) {
      if (my_room_list[i] == my_choice) {
          found = true;
          continue;
      }
  }
    if(found == false){
      my_room_list.push(my_choice);
    }
  }
    //console.log(my_room_list);
    return my_room_list;
  }
  



}
