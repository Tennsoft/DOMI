import { Component, OnInit, Input, Output, Inject } from '@angular/core';

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

  constructor(public playerArrayService: PlayerArrayService,public move_room_service: MoveRoomService, public room_layout_service: RoomLayoutService) { }

  //@Input() my_new_dungeon: number[];
  //placeholders for now
  //current_room_name: string = rooms[2].namePretty;
  //current_room_desc: string = rooms[2].description;


  

  ngOnInit() {
    //very pretty function, but I'm going to switch to a service and something probably less pretty
    // let dungeonLayout = rooms.map(a => a.id);
    // function newDungeon(array) {
    //  array.sort(() => Math.random() - 0.5);
    // }
    // let my_new_dungeon = newDungeon(dungeonLayout);
    // console.log(dungeonLayout);    
    // console.log(my_new_dungeon);
    // console.log(typeof my_new_dungeon);


  }

  //room_list = this.room_layout_service.scrambleRooms();
  
  
  current_room: {x: number, y: number} = this.playerArrayService.position;
  current_room_abs_id = this.move_room_service.current_room_reduce(this.current_room.x, this.current_room.y);
  current_room_name: string = rooms[this.current_room_abs_id].namePretty;
  current_room_desc: string = rooms[this.current_room_abs_id].description;

}
