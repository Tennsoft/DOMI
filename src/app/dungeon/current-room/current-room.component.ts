import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';

import { DungeonComponent } from '../dungeon.component';
import { rooms } from '../../../../assets/rooms.json';

@Component({
  selector: 'app-current-room',
  templateUrl: './current-room.component.html',
  styleUrls: ['./current-room.component.css']
})
export class CurrentRoomComponent implements OnInit {

  constructor() { }

  @Input() my_new_dungeon: number[];
  //placeholders for now
  current_room_name: string = rooms[2].namePretty;
  current_room_desc: string = rooms[2].description;
  

  ngOnInit() {
    //let current_room = 1;
    //let current_roomCoords = {x:0, y:1};
    console.log(this.my_new_dungeon);


  }

  ngOnChanges(){
    //if boss room, load in boss


  }


}
