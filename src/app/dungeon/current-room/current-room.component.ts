import { Component, OnInit, DoCheck } from '@angular/core';
//import { Observable, Subscription } from 'rxjs';


import { DungeonComponent } from '../dungeon.component';
import { rooms } from '../../../../assets/rooms.json';


import { PlayerArrayService } from '../../player-array.service';
import { MoveRoomService } from 'src/app/move-room.service';
import { RoomLayoutService } from 'src/app/room-layout.service';



@Component({
  selector: 'app-current-room',
  templateUrl: './current-room.component.html',
  styleUrls: ['./current-room.component.css']
})
export class CurrentRoomComponent implements OnInit, DoCheck {

  
  //bring in the rooms, random order
  room_list = this.room_layout_service.random_room_layout;

  //initialize
  current_room: {x: number, y: number};
  current_room_abs_id;
  current_room_name;
  current_room_desc;
  

  constructor(public move_room_service: MoveRoomService, public room_layout_service: RoomLayoutService, public playerArrayService: PlayerArrayService) { 

  }
  
 

  ngOnInit() {
    //get the (x,y) coords
    this.current_room = this.playerArrayService.getPosition();
    //turn that into a single number to get an index from the rooms array
    this.current_room_abs_id = this.move_room_service.current_room_reduce();
    //and pull a room for where you happen to be
    this.current_room_name = this.room_list[this.current_room_abs_id].namePretty;
    this.current_room_desc = this.room_list[this.current_room_abs_id].description;
    
    //console.log(this.playerArrayService.getPosition());

}
  

    //original attempt
    // let dungeonLayout = rooms.map(a => a.id);
    // function newDungeon(array) {
    //  array.sort(() => Math.random() - 0.5);
    // }
    // let my_new_dungeon = newDungeon(dungeonLayout);
    // console.log(dungeonLayout);    
    // console.log(my_new_dungeon);
    // console.log(typeof my_new_dungeon);
    

  ngDoCheck(){
    this.current_room = this.playerArrayService.getPosition();
    //console.log("current room is "+this.current_room_name);
    
    this.current_room_abs_id = this.move_room_service.current_room_reduce();
    //console.log(this.current_room_abs_id)
    this.current_room_name = this.room_list[this.current_room_abs_id].namePretty;
    this.current_room_desc = this.room_list[this.current_room_abs_id].description;
    //console.log("current room is "+ this.current_room_name);

  }

  

}
