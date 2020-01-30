import { Component, OnInit, Inject } from '@angular/core';

import { DungeonComponent } from '../dungeon.component';
import { rooms } from '../../../../assets/rooms.json';


import { PlayerArrayService } from '../../player-array.service';
import { MoveRoomService } from 'src/app/move-room.service';
import { RoomLayoutService } from 'src/app/room-layout.service';



@Component({
  selector: 'app-current-room',
  templateUrl: './current-room.component.html',
  styleUrls: ['./current-room.component.css'],
  providers: [PlayerArrayService, MoveRoomService, RoomLayoutService]
})
export class CurrentRoomComponent implements OnInit {

  constructor(public playerArrayService: PlayerArrayService,public move_room_service: MoveRoomService, public room_layout_service: RoomLayoutService, ) { 
    console.log(this.room_list);
  }

  

  ngOnInit() {
    //original attempt
    // let dungeonLayout = rooms.map(a => a.id);
    // function newDungeon(array) {
    //  array.sort(() => Math.random() - 0.5);
    // }
    // let my_new_dungeon = newDungeon(dungeonLayout);
    // console.log(dungeonLayout);    
    // console.log(my_new_dungeon);
    // console.log(typeof my_new_dungeon);
    
    //let room_list = this.room_layout_service.random_room_layout;
    //console.log(room_list);

  }

  //room display stuff
  room_list = this.room_layout_service.random_room_layout;

  current_room: {x: number, y: number} = this.playerArrayService.position;
  current_room_abs_id = this.move_room_service.current_room_reduce(this.current_room.x, this.current_room.y);
  current_room_name: string = this.room_list[this.current_room_abs_id].namePretty;
  current_room_desc: string = this.room_list[this.current_room_abs_id].description;

  


}
