import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

import { PlayerArrayService } from '../../player-array.service';
import { MoveRoomService } from 'src/app/move-room.service';
import { RoomLayoutService } from 'src/app/room-layout.service';
import { FourByFourMoveRoomService } from 'src/app/four-by-four-move-room.service';

@Component({
  selector: 'app-current-room',
  templateUrl: './current-room.component.html',
  styleUrls: ['./current-room.component.css']
})

export class CurrentRoomComponent implements OnInit, DoCheck, OnDestroy {
  //bring in the rooms, random order
  //room_list = this.room_layout_service.random_room_layout;

  //initialize
  room_list;
  current_room: { x: number, y: number};
  current_room_abs_id;
  current_room_name;
  current_room_desc;
  danceparty = <boolean> false;
  audioPlayer = new Audio();
  

  constructor(
    public move_room_service: MoveRoomService, 
    public room_layout_service: RoomLayoutService, 
    public playerArrayService: PlayerArrayService,
    public four_by_four_move_room_service: FourByFourMoveRoomService) { }

  ngOnInit() {
    this.audioPlayer.src = "../../assets/audio/Caramelldansen.mp3";
    this.room_list = this.room_layout_service.random_room_layout;
    //get the (x,y) coords
    this.current_room = this.playerArrayService.getPosition();
    //turn that into a single number to get an index from the rooms array
    if(window.history.state.difficulty == "easy"){
      this.current_room_abs_id = this.move_room_service.current_room_reduce();
    }else{
      this.current_room_abs_id = this.four_by_four_move_room_service.current_room_reduce();
    }
    //this.current_room_abs_id = this.move_room_service.current_room_reduce();
    
    //and pull a room for where you happen to be
    this.current_room_name = this.room_list[this.current_room_abs_id].namePretty;
    this.current_room_desc = this.room_list[this.current_room_abs_id].description;
    
    //console.log(this.playerArrayService.getPosition());

}

  ngDoCheck(){
    this.current_room = this.playerArrayService.getPosition();
    //console.log("current room is "+this.current_room_name);

    if(window.history.state.difficulty == "easy"){
      this.current_room_abs_id = this.move_room_service.current_room_reduce();
    }else{
      this.current_room_abs_id = this.four_by_four_move_room_service.current_room_reduce();
    }

    //this.current_room_abs_id = this.move_room_service.current_room_reduce();
    //console.log(this.current_room_abs_id)
    this.current_room_name = this.room_list[this.current_room_abs_id].namePretty;
    this.current_room_desc = this.room_list[this.current_room_abs_id].description;
    //console.log("current room is "+ this.current_room_name);
    
    if(this.current_room_name === "Dance Party"){
      this.danceparty = true;
    } else {
      this.danceparty = false;
    }
  }
  ngOnDestroy(){
    this.audioPlayer.pause();
  }

  onCaramel(){
    if(this.audioPlayer.paused){
      this.audioPlayer.play();
    } else {
      this.audioPlayer.pause();
    }
  }
}
