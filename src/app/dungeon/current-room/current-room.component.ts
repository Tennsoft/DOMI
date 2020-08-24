import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

import { PlayerArrayService } from '../../services/player-array.service';
import { RoomLayoutService } from '../../services/room-layout.service';
import { MoveRoomEasyService } from '../../services/difficulty/move-room-easy.service';
import { MoveRoomMediumService } from '../../services/difficulty/move-room-medium.service';
import { MoveRoomHardService } from '../../services/difficulty/move-room-hard.service';

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
    public room_layout_service: RoomLayoutService, 
    public playerArrayService: PlayerArrayService,
    public move_room_easy_service: MoveRoomEasyService, 
    public move_room_medium_service: MoveRoomMediumService,
    public move_room_hard_service: MoveRoomHardService,
    ) { }

  ngOnInit() {
    this.audioPlayer.src = "../../assets/audio/Caramelldansen.mp3";
    this.room_list = this.room_layout_service.random_room_layout;
    //get the (x,y) coords
    this.current_room = this.playerArrayService.getPosition();

    //turn that into a single number to get an index from the rooms array
    switch(this.playerArrayService.getDifficulty()) { 
      case "easy": {
        this.current_room_abs_id = this.move_room_easy_service.current_room_reduce();
        break; 
      } 
      case "medium": {
        this.current_room_abs_id = this.move_room_medium_service.current_room_reduce();
        break; 
      } 
      case "hard": {
        this.current_room_abs_id = this.move_room_hard_service.current_room_reduce();
        break; 
      } 
      default: { 
        break; 
      } 
   }
    
    //and pull a room for where you happen to be
    this.current_room_name = this.room_list[this.current_room_abs_id].namePretty;
    this.current_room_desc = this.room_list[this.current_room_abs_id].description;
    
    //console.log(this.playerArrayService.getPosition());
}

  ngDoCheck(){
    this.current_room = this.playerArrayService.getPosition();

    switch(this.playerArrayService.getDifficulty()) { 
      case "easy": {
        this.current_room_abs_id = this.move_room_easy_service.current_room_reduce();
        break; 
      } 
      case "medium": {
        this.current_room_abs_id = this.move_room_medium_service.current_room_reduce();
        break; 
      } 
      case "hard": {
        this.current_room_abs_id = this.move_room_hard_service.current_room_reduce();
        break; 
      } 
      default: { 
        break; 
      } 
   }

    this.current_room_name = this.room_list[this.current_room_abs_id].namePretty;
    this.current_room_desc = this.room_list[this.current_room_abs_id].description;
    
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
