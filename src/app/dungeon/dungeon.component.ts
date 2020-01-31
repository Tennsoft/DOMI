import { Component, OnInit, Output, EventEmitter } from '@angular/core';


import { MoveRoomService } from '../move-room.service.js';
import { PlayerArrayService } from '../player-array.service.js';



@Component({
  selector: 'app-dungeon',
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.css'],
  providers: [MoveRoomService, PlayerArrayService]
})
export class DungeonComponent implements OnInit {

  constructor(public move_room_service: MoveRoomService, public playerArrayService: PlayerArrayService) { }

 @Output() positionChanged = new EventEmitter<{this.playerArrayService.position}>



  ngOnInit() {
   
    
  }

  onMoveNorth(){
    this.positionChanged.emit({
    let current_position: {x: number, y: number} = this.playerArrayService.position;
    let new_position: {x: number, y: number} = this.move_room_service.moveRoom(0,1,current_position);
    this.playerArrayService.position = new_position;
    console.log(new_position);
    console.log(this.playerArrayService.position);
   })
  }

  onMoveSouth(){
    let current_position: {x: number, y: number} = this.playerArrayService.position;
    let new_position: {x: number, y: number} = this.move_room_service.moveRoom(0,-1,current_position);
    this.playerArrayService.position = new_position;
    console.log(new_position);
    console.log(this.playerArrayService.position);
  }

  onMoveEast(){
    let current_position: {x: number, y: number} = this.playerArrayService.position;
    let new_position: {x: number, y: number} = this.move_room_service.moveRoom(1,0,current_position);
    this.playerArrayService.position = new_position;
    console.log(new_position);
    console.log(this.playerArrayService.position);

  }

  onMoveWest(){
    let current_position: {x: number, y: number} = this.playerArrayService.position;
    let new_position: {x: number, y: number} = this.move_room_service.moveRoom(-1,0,current_position);
    this.playerArrayService.position = new_position;
    console.log(new_position);
    console.log(this.playerArrayService.position);
  }


 

}
