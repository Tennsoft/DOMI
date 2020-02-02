import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
//import { Observable, Subscription } from 'rxjs';


import { DungeonComponent } from '../dungeon.component';
import { rooms } from '../../../../assets/rooms.json';


import { PlayerArrayService } from '../../player-array.service';
import { MoveRoomService } from 'src/app/move-room.service';
import { RoomLayoutService } from 'src/app/room-layout.service';



@Component({
  selector: 'app-current-room',
  templateUrl: './current-room.component.html',
  styleUrls: ['./current-room.component.css'],
  providers: [MoveRoomService, RoomLayoutService]
})
export class CurrentRoomComponent implements OnInit, OnChanges, OnDestroy {

  

  room_list = this.room_layout_service.random_room_layout;

  

  constructor(public move_room_service: MoveRoomService, public room_layout_service: RoomLayoutService, public playerArrayService: PlayerArrayService) { 

    //room display stuff
  // room_list = this.room_layout_service.random_room_layout;


  let current_room: {x: number, y: number} = this.playerArrayService.getPosition();
  let current_room_abs_id = this.move_room_service.current_room_reduce(current_room.x, current_room.y);
  let current_room_name: string = this.room_list[current_room_abs_id].namePretty;
  let current_room_desc: string = this.room_list[current_room_abs_id].description;


    //console.log('current room is '+ this.position);
    console.log(this.playerArrayService.getPosition());
  }
  
 

  ngOnInit() {

   

  let current_room = this.playerArrayService.getPosition();
    let current_room_abs_id = this.move_room_service.current_room_reduce(current_room.x, current_room.y);
    let current_room_name = this.room_list[current_room_abs_id].namePretty;
    let current_room_desc = this.room_list[current_room_abs_id].description;
    

    //console.log("current room is "+ current_room);
    console.log(this.playerArrayService.getPosition());

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
    
    //let room_list = this.room_layout_service.random_room_layout;
    //console.log(room_list);

    //let room_list = this.room_layout_service.random_room_layout;

    


  

  ngOnChanges(changes: SimpleChanges){
    let current_room = this.playerArrayService.getPosition();
    console.log("current room is "+current_room);
    
    let current_room_abs_id = this.move_room_service.current_room_reduce(current_room.x, current_room.y);
    let current_room_name = this.room_list[current_room_abs_id].namePretty;
    let current_room_desc = this.room_list[current_room_abs_id].description;
    console.log("current room is "+ current_room);

  }

  ngOnDestroy() {

    //this.whereAmI.unsubscribe();
}

}
